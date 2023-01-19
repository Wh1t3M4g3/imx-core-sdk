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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateExchangeAndURLAPIRequest } from '../models';
// @ts-ignore
import { CreateTransferRequestV1 } from '../models';
// @ts-ignore
import { CreateTransferResponseV1 } from '../models';
// @ts-ignore
import { Exchange } from '../models';
// @ts-ignore
import { ExchangeCreateExchangeAndURLResponse } from '../models';
// @ts-ignore
import { GetSignableTransferRequestV1 } from '../models';
// @ts-ignore
import { GetSignableTransferResponseV1 } from '../models';
// @ts-ignore
import { GetTransactionsResponse } from '../models';
// @ts-ignore
import { LambdasAPIError } from '../models';
/**
 * ExchangesApi - axios parameter creator
 * @export
 */
export const ExchangesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Receive wallet_address, provider, type and widget information to create a base exchange transaction and return widget URL
         * @summary Create an exchange with URL
         * @param {CreateExchangeAndURLAPIRequest} createExchangeAPIRequest req
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createExchange: async (createExchangeAPIRequest: CreateExchangeAndURLAPIRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createExchangeAPIRequest' is not null or undefined
            assertParamExists('createExchange', 'createExchangeAPIRequest', createExchangeAPIRequest)
            const localVarPath = `/v3/exchanges`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createExchangeAPIRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Accepts a transfer request and updates the transfer_status after processing transfer (offramp)
         * @summary Accepts a transfer request and updates the transfer_status after processing transfer (offramp)
         * @param {string} id Transaction ID
         * @param {string} xImxEthAddress eth address
         * @param {string} xImxEthSignature eth signature
         * @param {CreateTransferRequestV1} createTransferRequest Create a transfer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createExchangeTransfer: async (id: string, xImxEthAddress: string, xImxEthSignature: string, createTransferRequest: CreateTransferRequestV1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('createExchangeTransfer', 'id', id)
            // verify required parameter 'xImxEthAddress' is not null or undefined
            assertParamExists('createExchangeTransfer', 'xImxEthAddress', xImxEthAddress)
            // verify required parameter 'xImxEthSignature' is not null or undefined
            assertParamExists('createExchangeTransfer', 'xImxEthSignature', xImxEthSignature)
            // verify required parameter 'createTransferRequest' is not null or undefined
            assertParamExists('createExchangeTransfer', 'createTransferRequest', createTransferRequest)
            const localVarPath = `/v2/exchanges/{id}/transfers`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xImxEthAddress != null) {
                localVarHeaderParameter['x-imx-eth-address'] = String(xImxEthAddress);
            }

            if (xImxEthSignature != null) {
                localVarHeaderParameter['x-imx-eth-signature'] = String(xImxEthSignature);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createTransferRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get an exchange by ID
         * @summary Get an exchange by ID
         * @param {string} id Exchange ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExchange: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getExchange', 'id', id)
            const localVarPath = `/v3/exchanges/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Send a request for signable-transfer-details (offramp)
         * @summary Send a request for signable-transfer-details (offramp)
         * @param {string} id Transaction ID
         * @param {GetSignableTransferRequestV1} getSignableTransferRequest get details of signable transfer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExchangeSignableTransfer: async (id: string, getSignableTransferRequest: GetSignableTransferRequestV1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getExchangeSignableTransfer', 'id', id)
            // verify required parameter 'getSignableTransferRequest' is not null or undefined
            assertParamExists('getExchangeSignableTransfer', 'getSignableTransferRequest', getSignableTransferRequest)
            const localVarPath = `/v2/exchanges/{id}/signable-transfer-details`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(getSignableTransferRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of exchanges based on the request
         * @summary Returns a list of exchanges based on the request
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {'id' | 'status' | 'exchange' | 'amount' | 'transfer_id'} [orderBy] Property to sort by
         * @param {'asc' | 'desc'} [direction] Direction to sort
         * @param {number} [id] Transaction ID
         * @param {string} [walletAddress] Ethereum address of the user who created transaction
         * @param {'created' | 'pending' | 'completed' | 'failed' | 'waitingPayment' | 'timedOut'} [status] Transaction status
         * @param {'moonpay' | 'layerswap'} [provider] Provider name
         * @param {string} [transferId] Transfer ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExchanges: async (pageSize?: number, cursor?: string, orderBy?: 'id' | 'status' | 'exchange' | 'amount' | 'transfer_id', direction?: 'asc' | 'desc', id?: number, walletAddress?: string, status?: 'created' | 'pending' | 'completed' | 'failed' | 'waitingPayment' | 'timedOut', provider?: 'moonpay' | 'layerswap', transferId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v3/exchanges`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (walletAddress !== undefined) {
                localVarQueryParameter['wallet_address'] = walletAddress;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }

            if (transferId !== undefined) {
                localVarQueryParameter['transfer_id'] = transferId;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ExchangesApi - functional programming interface
 * @export
 */
export const ExchangesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ExchangesApiAxiosParamCreator(configuration)
    return {
        /**
         * Receive wallet_address, provider, type and widget information to create a base exchange transaction and return widget URL
         * @summary Create an exchange with URL
         * @param {CreateExchangeAndURLAPIRequest} createExchangeAPIRequest req
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createExchange(createExchangeAPIRequest: CreateExchangeAndURLAPIRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ExchangeCreateExchangeAndURLResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createExchange(createExchangeAPIRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Accepts a transfer request and updates the transfer_status after processing transfer (offramp)
         * @summary Accepts a transfer request and updates the transfer_status after processing transfer (offramp)
         * @param {string} id Transaction ID
         * @param {string} xImxEthAddress eth address
         * @param {string} xImxEthSignature eth signature
         * @param {CreateTransferRequestV1} createTransferRequest Create a transfer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createExchangeTransfer(id: string, xImxEthAddress: string, xImxEthSignature: string, createTransferRequest: CreateTransferRequestV1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateTransferResponseV1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createExchangeTransfer(id, xImxEthAddress, xImxEthSignature, createTransferRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get an exchange by ID
         * @summary Get an exchange by ID
         * @param {string} id Exchange ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExchange(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Exchange>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExchange(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Send a request for signable-transfer-details (offramp)
         * @summary Send a request for signable-transfer-details (offramp)
         * @param {string} id Transaction ID
         * @param {GetSignableTransferRequestV1} getSignableTransferRequest get details of signable transfer
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExchangeSignableTransfer(id: string, getSignableTransferRequest: GetSignableTransferRequestV1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSignableTransferResponseV1>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExchangeSignableTransfer(id, getSignableTransferRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of exchanges based on the request
         * @summary Returns a list of exchanges based on the request
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {'id' | 'status' | 'exchange' | 'amount' | 'transfer_id'} [orderBy] Property to sort by
         * @param {'asc' | 'desc'} [direction] Direction to sort
         * @param {number} [id] Transaction ID
         * @param {string} [walletAddress] Ethereum address of the user who created transaction
         * @param {'created' | 'pending' | 'completed' | 'failed' | 'waitingPayment' | 'timedOut'} [status] Transaction status
         * @param {'moonpay' | 'layerswap'} [provider] Provider name
         * @param {string} [transferId] Transfer ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExchanges(pageSize?: number, cursor?: string, orderBy?: 'id' | 'status' | 'exchange' | 'amount' | 'transfer_id', direction?: 'asc' | 'desc', id?: number, walletAddress?: string, status?: 'created' | 'pending' | 'completed' | 'failed' | 'waitingPayment' | 'timedOut', provider?: 'moonpay' | 'layerswap', transferId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTransactionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getExchanges(pageSize, cursor, orderBy, direction, id, walletAddress, status, provider, transferId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ExchangesApi - factory interface
 * @export
 */
export const ExchangesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ExchangesApiFp(configuration)
    return {
        /**
         * Receive wallet_address, provider, type and widget information to create a base exchange transaction and return widget URL
         * @summary Create an exchange with URL
         * @param {ExchangesApiCreateExchangeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createExchange(requestParameters: ExchangesApiCreateExchangeRequest, options?: AxiosRequestConfig): AxiosPromise<ExchangeCreateExchangeAndURLResponse> {
            return localVarFp.createExchange(requestParameters.createExchangeAPIRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Accepts a transfer request and updates the transfer_status after processing transfer (offramp)
         * @summary Accepts a transfer request and updates the transfer_status after processing transfer (offramp)
         * @param {ExchangesApiCreateExchangeTransferRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createExchangeTransfer(requestParameters: ExchangesApiCreateExchangeTransferRequest, options?: AxiosRequestConfig): AxiosPromise<CreateTransferResponseV1> {
            return localVarFp.createExchangeTransfer(requestParameters.id, requestParameters.xImxEthAddress, requestParameters.xImxEthSignature, requestParameters.createTransferRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get an exchange by ID
         * @summary Get an exchange by ID
         * @param {ExchangesApiGetExchangeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExchange(requestParameters: ExchangesApiGetExchangeRequest, options?: AxiosRequestConfig): AxiosPromise<Exchange> {
            return localVarFp.getExchange(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Send a request for signable-transfer-details (offramp)
         * @summary Send a request for signable-transfer-details (offramp)
         * @param {ExchangesApiGetExchangeSignableTransferRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExchangeSignableTransfer(requestParameters: ExchangesApiGetExchangeSignableTransferRequest, options?: AxiosRequestConfig): AxiosPromise<GetSignableTransferResponseV1> {
            return localVarFp.getExchangeSignableTransfer(requestParameters.id, requestParameters.getSignableTransferRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of exchanges based on the request
         * @summary Returns a list of exchanges based on the request
         * @param {ExchangesApiGetExchangesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExchanges(requestParameters: ExchangesApiGetExchangesRequest = {}, options?: AxiosRequestConfig): AxiosPromise<GetTransactionsResponse> {
            return localVarFp.getExchanges(requestParameters.pageSize, requestParameters.cursor, requestParameters.orderBy, requestParameters.direction, requestParameters.id, requestParameters.walletAddress, requestParameters.status, requestParameters.provider, requestParameters.transferId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createExchange operation in ExchangesApi.
 * @export
 * @interface ExchangesApiCreateExchangeRequest
 */
export interface ExchangesApiCreateExchangeRequest {
    /**
     * req
     * @type {CreateExchangeAndURLAPIRequest}
     * @memberof ExchangesApiCreateExchange
     */
    readonly createExchangeAPIRequest: CreateExchangeAndURLAPIRequest
}

/**
 * Request parameters for createExchangeTransfer operation in ExchangesApi.
 * @export
 * @interface ExchangesApiCreateExchangeTransferRequest
 */
export interface ExchangesApiCreateExchangeTransferRequest {
    /**
     * Transaction ID
     * @type {string}
     * @memberof ExchangesApiCreateExchangeTransfer
     */
    readonly id: string

    /**
     * eth address
     * @type {string}
     * @memberof ExchangesApiCreateExchangeTransfer
     */
    readonly xImxEthAddress: string

    /**
     * eth signature
     * @type {string}
     * @memberof ExchangesApiCreateExchangeTransfer
     */
    readonly xImxEthSignature: string

    /**
     * Create a transfer
     * @type {CreateTransferRequestV1}
     * @memberof ExchangesApiCreateExchangeTransfer
     */
    readonly createTransferRequest: CreateTransferRequestV1
}

/**
 * Request parameters for getExchange operation in ExchangesApi.
 * @export
 * @interface ExchangesApiGetExchangeRequest
 */
export interface ExchangesApiGetExchangeRequest {
    /**
     * Exchange ID
     * @type {string}
     * @memberof ExchangesApiGetExchange
     */
    readonly id: string
}

/**
 * Request parameters for getExchangeSignableTransfer operation in ExchangesApi.
 * @export
 * @interface ExchangesApiGetExchangeSignableTransferRequest
 */
export interface ExchangesApiGetExchangeSignableTransferRequest {
    /**
     * Transaction ID
     * @type {string}
     * @memberof ExchangesApiGetExchangeSignableTransfer
     */
    readonly id: string

    /**
     * get details of signable transfer
     * @type {GetSignableTransferRequestV1}
     * @memberof ExchangesApiGetExchangeSignableTransfer
     */
    readonly getSignableTransferRequest: GetSignableTransferRequestV1
}

/**
 * Request parameters for getExchanges operation in ExchangesApi.
 * @export
 * @interface ExchangesApiGetExchangesRequest
 */
export interface ExchangesApiGetExchangesRequest {
    /**
     * Page size of the result
     * @type {number}
     * @memberof ExchangesApiGetExchanges
     */
    readonly pageSize?: number

    /**
     * Cursor
     * @type {string}
     * @memberof ExchangesApiGetExchanges
     */
    readonly cursor?: string

    /**
     * Property to sort by
     * @type {'id' | 'status' | 'exchange' | 'amount' | 'transfer_id'}
     * @memberof ExchangesApiGetExchanges
     */
    readonly orderBy?: 'id' | 'status' | 'exchange' | 'amount' | 'transfer_id'

    /**
     * Direction to sort
     * @type {'asc' | 'desc'}
     * @memberof ExchangesApiGetExchanges
     */
    readonly direction?: 'asc' | 'desc'

    /**
     * Transaction ID
     * @type {number}
     * @memberof ExchangesApiGetExchanges
     */
    readonly id?: number

    /**
     * Ethereum address of the user who created transaction
     * @type {string}
     * @memberof ExchangesApiGetExchanges
     */
    readonly walletAddress?: string

    /**
     * Transaction status
     * @type {'created' | 'pending' | 'completed' | 'failed' | 'waitingPayment' | 'timedOut'}
     * @memberof ExchangesApiGetExchanges
     */
    readonly status?: 'created' | 'pending' | 'completed' | 'failed' | 'waitingPayment' | 'timedOut'

    /**
     * Provider name
     * @type {'moonpay' | 'layerswap'}
     * @memberof ExchangesApiGetExchanges
     */
    readonly provider?: 'moonpay' | 'layerswap'

    /**
     * Transfer ID
     * @type {string}
     * @memberof ExchangesApiGetExchanges
     */
    readonly transferId?: string
}

/**
 * ExchangesApi - object-oriented interface
 * @export
 * @class ExchangesApi
 * @extends {BaseAPI}
 */
export class ExchangesApi extends BaseAPI {
    /**
     * Receive wallet_address, provider, type and widget information to create a base exchange transaction and return widget URL
     * @summary Create an exchange with URL
     * @param {ExchangesApiCreateExchangeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangesApi
     */
    public createExchange(requestParameters: ExchangesApiCreateExchangeRequest, options?: AxiosRequestConfig) {
        return ExchangesApiFp(this.configuration).createExchange(requestParameters.createExchangeAPIRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Accepts a transfer request and updates the transfer_status after processing transfer (offramp)
     * @summary Accepts a transfer request and updates the transfer_status after processing transfer (offramp)
     * @param {ExchangesApiCreateExchangeTransferRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangesApi
     */
    public createExchangeTransfer(requestParameters: ExchangesApiCreateExchangeTransferRequest, options?: AxiosRequestConfig) {
        return ExchangesApiFp(this.configuration).createExchangeTransfer(requestParameters.id, requestParameters.xImxEthAddress, requestParameters.xImxEthSignature, requestParameters.createTransferRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get an exchange by ID
     * @summary Get an exchange by ID
     * @param {ExchangesApiGetExchangeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangesApi
     */
    public getExchange(requestParameters: ExchangesApiGetExchangeRequest, options?: AxiosRequestConfig) {
        return ExchangesApiFp(this.configuration).getExchange(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Send a request for signable-transfer-details (offramp)
     * @summary Send a request for signable-transfer-details (offramp)
     * @param {ExchangesApiGetExchangeSignableTransferRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangesApi
     */
    public getExchangeSignableTransfer(requestParameters: ExchangesApiGetExchangeSignableTransferRequest, options?: AxiosRequestConfig) {
        return ExchangesApiFp(this.configuration).getExchangeSignableTransfer(requestParameters.id, requestParameters.getSignableTransferRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of exchanges based on the request
     * @summary Returns a list of exchanges based on the request
     * @param {ExchangesApiGetExchangesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExchangesApi
     */
    public getExchanges(requestParameters: ExchangesApiGetExchangesRequest = {}, options?: AxiosRequestConfig) {
        return ExchangesApiFp(this.configuration).getExchanges(requestParameters.pageSize, requestParameters.cursor, requestParameters.orderBy, requestParameters.direction, requestParameters.id, requestParameters.walletAddress, requestParameters.status, requestParameters.provider, requestParameters.transferId, options).then((request) => request(this.axios, this.basePath));
    }
}
