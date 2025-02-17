/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface NftprimarytransactionTransactionData
 */
export interface NftprimarytransactionTransactionData {
    /**
     * Contract address of the asset
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'contract_address'?: string;
    /**
     * Timestamp when the transaction was created
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'created_at'?: string;
    /**
     * External transaction id
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'external_id'?: string;
    /**
     * Fees to pay on this transaction
     * @type {number}
     * @memberof NftprimarytransactionTransactionData
     */
    'fees_amount'?: number;
    /**
     * Amount of the currency specified in `from_currency` that the buyer paid for the transaction
     * @type {number}
     * @memberof NftprimarytransactionTransactionData
     */
    'from_amount'?: number;
    /**
     * Currency that the buyer used for the transaction
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'from_currency'?: string;
    /**
     * Minting transaction ID - see mintTokens response
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'mint_id'?: string;
    /**
     * Mint status
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'mint_status'?: string;
    /**
     * Temporary asset id. Might be a token id if the token id is known or a generic description if it\'s not
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'offer_id'?: string;
    /**
     * Provider name
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'provider'?: string;
    /**
     * Ethereum address of the seller
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'seller_wallet_address'?: string;
    /**
     * Transaction status enums(created, waitingPayment, pending, completed, failed)
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'status'?: string;
    /**
     * Amount of the currency specified in `to_currency` that the seller received from the checkout provider for the transaction
     * @type {number}
     * @memberof NftprimarytransactionTransactionData
     */
    'to_amount'?: number;
    /**
     * Currency (crypto) that the checkout provider sent to the seller for the transaction
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'to_currency'?: string;
    /**
     * ID of the token that has been successfully minted - should be the same as `offer_id`
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'token_id'?: string;
    /**
     * Transaction id
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'transaction_id'?: string;
    /**
     * Timestamp when the transaction was updated
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'updated_at'?: string;
    /**
     * Wallet address that receives the minted NFT
     * @type {string}
     * @memberof NftprimarytransactionTransactionData
     */
    'user_wallet_address'?: string;
}

