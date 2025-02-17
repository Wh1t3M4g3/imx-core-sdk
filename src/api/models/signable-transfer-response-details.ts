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


// May contain unused imports in some cases
// @ts-ignore
import { SignableTransferResponseDetailsToken } from './signable-transfer-response-details-token';

/**
 * 
 * @export
 * @interface SignableTransferResponseDetails
 */
export interface SignableTransferResponseDetails {
    /**
     * Amount of the asset being transferred
     * @type {string}
     * @memberof SignableTransferResponseDetails
     */
    'amount': string;
    /**
     * ID of the asset being transferred
     * @type {string}
     * @memberof SignableTransferResponseDetails
     */
    'asset_id': string;
    /**
     * Timestamp when this transfer will expire
     * @type {number}
     * @memberof SignableTransferResponseDetails
     */
    'expiration_timestamp': number;
    /**
     * Nonce of the transfer
     * @type {number}
     * @memberof SignableTransferResponseDetails
     */
    'nonce': number;
    /**
     * Hash of the payload to be signed for transfer
     * @type {string}
     * @memberof SignableTransferResponseDetails
     */
    'payload_hash': string;
    /**
     * EIP-712 encoding of the StarkEx transfer request to be displayed to the user
     * @type {string}
     * @memberof SignableTransferResponseDetails
     */
    'readable_transaction': string;
    /**
     * Receiver of the transfer
     * @type {string}
     * @memberof SignableTransferResponseDetails
     */
    'receiver_stark_key': string;
    /**
     * ID of the vault being transferred to
     * @type {number}
     * @memberof SignableTransferResponseDetails
     */
    'receiver_vault_id': number;
    /**
     * ID of the vault being transferred from
     * @type {number}
     * @memberof SignableTransferResponseDetails
     */
    'sender_vault_id': number;
    /**
     * 
     * @type {SignableTransferResponseDetailsToken}
     * @memberof SignableTransferResponseDetails
     */
    'token': SignableTransferResponseDetailsToken;
    /**
     * IMX signed readable_transaction and payload_hash
     * @type {string}
     * @memberof SignableTransferResponseDetails
     */
    'verification_signature': string;
}

