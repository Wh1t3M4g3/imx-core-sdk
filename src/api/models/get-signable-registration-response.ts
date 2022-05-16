/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface GetSignableRegistrationResponse
 */
export interface GetSignableRegistrationResponse {
    /**
     * Signature from authorised operator
     * @type {string}
     * @memberof GetSignableRegistrationResponse
     */
    'operator_signature'?: string;
    /**
     * Hash of the payload to be signed for user registration
     * @type {string}
     * @memberof GetSignableRegistrationResponse
     */
    'payload_hash'?: string;
}

