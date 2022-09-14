import { UsersApi, GetSignableRegistrationResponse } from '../api';
import { WalletConnection } from '../types';
import { signRaw } from '../utils';
import { Registration } from '../contracts';

type registerOffchainWorkflowParams = WalletConnection & {
  usersApi: UsersApi;
};

async function isUserRegistered(
  userAddress: string,
  usersApi: UsersApi,
): Promise<boolean> {
  try {
    await usersApi.getUsers(userAddress);
    return true;
  } catch (error) {
    return false;
  }
}

export async function registerOffchainWorkflow({
  ethSigner,
  starkSigner,
  usersApi,
}: registerOffchainWorkflowParams): Promise<void> {
  const userAddress = await ethSigner.getAddress();
  const starkPublicKey = await starkSigner.getAddress();

  if (await isUserRegistered(userAddress, usersApi)) {
    return;
  }

  const signableResult = await usersApi.getSignableRegistrationOffchain({
    ether_key: userAddress,
    stark_key: starkPublicKey,
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const starkSignature = await starkSigner.signMessage(payloadHash);

  await usersApi.registerUser({
    eth_signature: ethSignature,
    ether_key: userAddress,
    stark_signature: starkSignature,
    stark_key: starkPublicKey,
  });

  return;
}

export async function isRegisteredOnChainWorkflow(
  starkPublicKey: string,
  contract: Registration,
): Promise<boolean> {
  return await contract.isRegistered(starkPublicKey);
}

export async function getSignableRegistrationOnchain(
  etherKey: string,
  starkPublicKey: string,
  usersApi: UsersApi,
): Promise<GetSignableRegistrationResponse> {
  const response = await usersApi.getSignableRegistration({
    ether_key: etherKey,
    stark_key: starkPublicKey,
  });
  return {
    operator_signature: response.data.operator_signature,
    payload_hash: response.data.payload_hash,
  };
}
