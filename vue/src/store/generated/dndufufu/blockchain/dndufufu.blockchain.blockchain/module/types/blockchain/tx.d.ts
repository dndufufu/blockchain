import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "dndufufu.blockchain.blockchain";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCohort {
    creator: string;
    name: string;
    operation: string;
}
export interface MsgCreateCohortResponse {
    id: number;
}
export interface MsgUpdateCohort {
    creator: string;
    id: number;
    name: string;
    operation: string;
}
export interface MsgUpdateCohortResponse {
}
export interface MsgDeleteCohort {
    creator: string;
    id: number;
}
export interface MsgDeleteCohortResponse {
}
export declare const MsgCreateCohort: {
    encode(message: MsgCreateCohort, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCohort;
    fromJSON(object: any): MsgCreateCohort;
    toJSON(message: MsgCreateCohort): unknown;
    fromPartial(object: DeepPartial<MsgCreateCohort>): MsgCreateCohort;
};
export declare const MsgCreateCohortResponse: {
    encode(message: MsgCreateCohortResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCohortResponse;
    fromJSON(object: any): MsgCreateCohortResponse;
    toJSON(message: MsgCreateCohortResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCohortResponse>): MsgCreateCohortResponse;
};
export declare const MsgUpdateCohort: {
    encode(message: MsgUpdateCohort, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCohort;
    fromJSON(object: any): MsgUpdateCohort;
    toJSON(message: MsgUpdateCohort): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCohort>): MsgUpdateCohort;
};
export declare const MsgUpdateCohortResponse: {
    encode(_: MsgUpdateCohortResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCohortResponse;
    fromJSON(_: any): MsgUpdateCohortResponse;
    toJSON(_: MsgUpdateCohortResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCohortResponse>): MsgUpdateCohortResponse;
};
export declare const MsgDeleteCohort: {
    encode(message: MsgDeleteCohort, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCohort;
    fromJSON(object: any): MsgDeleteCohort;
    toJSON(message: MsgDeleteCohort): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCohort>): MsgDeleteCohort;
};
export declare const MsgDeleteCohortResponse: {
    encode(_: MsgDeleteCohortResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCohortResponse;
    fromJSON(_: any): MsgDeleteCohortResponse;
    toJSON(_: MsgDeleteCohortResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteCohortResponse>): MsgDeleteCohortResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateCohort(request: MsgCreateCohort): Promise<MsgCreateCohortResponse>;
    UpdateCohort(request: MsgUpdateCohort): Promise<MsgUpdateCohortResponse>;
    DeleteCohort(request: MsgDeleteCohort): Promise<MsgDeleteCohortResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCohort(request: MsgCreateCohort): Promise<MsgCreateCohortResponse>;
    UpdateCohort(request: MsgUpdateCohort): Promise<MsgUpdateCohortResponse>;
    DeleteCohort(request: MsgDeleteCohort): Promise<MsgDeleteCohortResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
