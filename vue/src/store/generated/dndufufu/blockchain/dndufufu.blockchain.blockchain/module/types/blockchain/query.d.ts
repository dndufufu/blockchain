import { Reader, Writer } from "protobufjs/minimal";
import { Cohort } from "../blockchain/cohort";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "dndufufu.blockchain.blockchain";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetCohortRequest {
    id: number;
}
export interface QueryGetCohortResponse {
    Cohort: Cohort | undefined;
}
export interface QueryAllCohortRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCohortResponse {
    Cohort: Cohort[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetCohortRequest: {
    encode(message: QueryGetCohortRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCohortRequest;
    fromJSON(object: any): QueryGetCohortRequest;
    toJSON(message: QueryGetCohortRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCohortRequest>): QueryGetCohortRequest;
};
export declare const QueryGetCohortResponse: {
    encode(message: QueryGetCohortResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCohortResponse;
    fromJSON(object: any): QueryGetCohortResponse;
    toJSON(message: QueryGetCohortResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCohortResponse>): QueryGetCohortResponse;
};
export declare const QueryAllCohortRequest: {
    encode(message: QueryAllCohortRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCohortRequest;
    fromJSON(object: any): QueryAllCohortRequest;
    toJSON(message: QueryAllCohortRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCohortRequest>): QueryAllCohortRequest;
};
export declare const QueryAllCohortResponse: {
    encode(message: QueryAllCohortResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCohortResponse;
    fromJSON(object: any): QueryAllCohortResponse;
    toJSON(message: QueryAllCohortResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCohortResponse>): QueryAllCohortResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Cohort(request: QueryGetCohortRequest): Promise<QueryGetCohortResponse>;
    CohortAll(request: QueryAllCohortRequest): Promise<QueryAllCohortResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Cohort(request: QueryGetCohortRequest): Promise<QueryGetCohortResponse>;
    CohortAll(request: QueryAllCohortRequest): Promise<QueryAllCohortResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
