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
 * @interface CreateCollectionRequest
 */
export interface CreateCollectionRequest {
    /**
     * URL of the tile image for this collection
     * @type {string}
     * @memberof CreateCollectionRequest
     */
    'collection_image_url'?: string;
    /**
     * Ethereum address of the ERC721 contract
     * @type {string}
     * @memberof CreateCollectionRequest
     */
    'contract_address': string;
    /**
     * Description of the collection
     * @type {string}
     * @memberof CreateCollectionRequest
     */
    'description'?: string;
    /**
     * URL of the icon for this collection
     * @type {string}
     * @memberof CreateCollectionRequest
     */
    'icon_url'?: string;
    /**
     * URL of the metadata for this collection
     * @type {string}
     * @memberof CreateCollectionRequest
     */
    'metadata_api_url'?: string;
    /**
     * Name of the collection
     * @type {string}
     * @memberof CreateCollectionRequest
     */
    'name': string;
    /**
     * Owner Public Key: The uncompressed public key of the owner of the contract
     * @type {string}
     * @memberof CreateCollectionRequest
     */
    'owner_public_key': string;
    /**
     * The collection\'s project ID
     * @type {number}
     * @memberof CreateCollectionRequest
     */
    'project_id': number;
}

