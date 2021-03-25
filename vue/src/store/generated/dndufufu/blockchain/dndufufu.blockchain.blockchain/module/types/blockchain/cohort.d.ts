import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "dndufufu.blockchain.blockchain";
export interface Cohort {
    creator: string;
    id: number;
    name: string;
    operation: string;
}
export declare const Cohort: {
    encode(message: Cohort, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Cohort;
    fromJSON(object: any): Cohort;
    toJSON(message: Cohort): unknown;
    fromPartial(object: DeepPartial<Cohort>): Cohort;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
