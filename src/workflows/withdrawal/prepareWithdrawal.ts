import { WithdrawalsApi, CreateWithdrawalResponse } from '../../api';
import {
  convertToSignableToken,
  TokenAmount,
  WalletConnection,
} from '../../types';
import { signMessage } from '../../utils';

const assertIsDefined = <T>(value?: T): T => {
  if (value !== undefined) return value;
  throw new Error('undefined field exception');
};

type PrepareWithdrawalWorkflowParams = TokenAmount &
  WalletConnection & {
    withdrawalsApi: WithdrawalsApi;
  };

export async function prepareWithdrawalWorkflow(
  params: PrepareWithdrawalWorkflowParams,
): Promise<CreateWithdrawalResponse> {
  const { ethSigner, starkSigner, withdrawalsApi } = params;
  const withdrawalAmount = params.type === 'ERC721' ? '1' : params.amount;
  const signableWithdrawalResult = await withdrawalsApi.getSignableWithdrawal({
    user: await ethSigner.getAddress(),
    token: convertToSignableToken(params),
    amount: withdrawalAmount,
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableWithdrawalResult.data;

  const starkSignature = await starkSigner.signMessage(payloadHash);

  const { ethAddress, ethSignature } = await signMessage(
    signableMessage,
    ethSigner,
  );

  const prepareWithdrawalResponse = await withdrawalsApi.createWithdrawal(
    ethAddress,
    ethSignature,
    {
      stark_key: assertIsDefined(signableWithdrawalResult.data.stark_key),
      amount: withdrawalAmount,
      asset_id: assertIsDefined(signableWithdrawalResult.data.asset_id),
      vault_id: assertIsDefined(signableWithdrawalResult.data.vault_id),
      nonce: assertIsDefined(signableWithdrawalResult.data.nonce),
      stark_signature: starkSignature,
    },
  );

  return prepareWithdrawalResponse.data;
}
