/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "dndufufu.blockchain.blockchain";

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

export interface MsgUpdateCohortResponse {}

export interface MsgDeleteCohort {
  creator: string;
  id: number;
}

export interface MsgDeleteCohortResponse {}

const baseMsgCreateCohort: object = { creator: "", name: "", operation: "" };

export const MsgCreateCohort = {
  encode(message: MsgCreateCohort, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.operation !== "") {
      writer.uint32(26).string(message.operation);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCohort {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCohort } as MsgCreateCohort;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.operation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCohort {
    const message = { ...baseMsgCreateCohort } as MsgCreateCohort;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = String(object.operation);
    } else {
      message.operation = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCohort): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.operation !== undefined && (obj.operation = message.operation);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCohort>): MsgCreateCohort {
    const message = { ...baseMsgCreateCohort } as MsgCreateCohort;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = object.operation;
    } else {
      message.operation = "";
    }
    return message;
  },
};

const baseMsgCreateCohortResponse: object = { id: 0 };

export const MsgCreateCohortResponse = {
  encode(
    message: MsgCreateCohortResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCohortResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCohortResponse,
    } as MsgCreateCohortResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCohortResponse {
    const message = {
      ...baseMsgCreateCohortResponse,
    } as MsgCreateCohortResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateCohortResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateCohortResponse>
  ): MsgCreateCohortResponse {
    const message = {
      ...baseMsgCreateCohortResponse,
    } as MsgCreateCohortResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateCohort: object = {
  creator: "",
  id: 0,
  name: "",
  operation: "",
};

export const MsgUpdateCohort = {
  encode(message: MsgUpdateCohort, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.operation !== "") {
      writer.uint32(34).string(message.operation);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCohort {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateCohort } as MsgUpdateCohort;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.operation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCohort {
    const message = { ...baseMsgUpdateCohort } as MsgUpdateCohort;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = String(object.operation);
    } else {
      message.operation = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateCohort): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.operation !== undefined && (obj.operation = message.operation);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateCohort>): MsgUpdateCohort {
    const message = { ...baseMsgUpdateCohort } as MsgUpdateCohort;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = object.operation;
    } else {
      message.operation = "";
    }
    return message;
  },
};

const baseMsgUpdateCohortResponse: object = {};

export const MsgUpdateCohortResponse = {
  encode(_: MsgUpdateCohortResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCohortResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateCohortResponse,
    } as MsgUpdateCohortResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateCohortResponse {
    const message = {
      ...baseMsgUpdateCohortResponse,
    } as MsgUpdateCohortResponse;
    return message;
  },

  toJSON(_: MsgUpdateCohortResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateCohortResponse>
  ): MsgUpdateCohortResponse {
    const message = {
      ...baseMsgUpdateCohortResponse,
    } as MsgUpdateCohortResponse;
    return message;
  },
};

const baseMsgDeleteCohort: object = { creator: "", id: 0 };

export const MsgDeleteCohort = {
  encode(message: MsgDeleteCohort, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCohort {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteCohort } as MsgDeleteCohort;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCohort {
    const message = { ...baseMsgDeleteCohort } as MsgDeleteCohort;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCohort): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteCohort>): MsgDeleteCohort {
    const message = { ...baseMsgDeleteCohort } as MsgDeleteCohort;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteCohortResponse: object = {};

export const MsgDeleteCohortResponse = {
  encode(_: MsgDeleteCohortResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCohortResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCohortResponse,
    } as MsgDeleteCohortResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteCohortResponse {
    const message = {
      ...baseMsgDeleteCohortResponse,
    } as MsgDeleteCohortResponse;
    return message;
  },

  toJSON(_: MsgDeleteCohortResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCohortResponse>
  ): MsgDeleteCohortResponse {
    const message = {
      ...baseMsgDeleteCohortResponse,
    } as MsgDeleteCohortResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateCohort(request: MsgCreateCohort): Promise<MsgCreateCohortResponse>;
  UpdateCohort(request: MsgUpdateCohort): Promise<MsgUpdateCohortResponse>;
  DeleteCohort(request: MsgDeleteCohort): Promise<MsgDeleteCohortResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateCohort(request: MsgCreateCohort): Promise<MsgCreateCohortResponse> {
    const data = MsgCreateCohort.encode(request).finish();
    const promise = this.rpc.request(
      "dndufufu.blockchain.blockchain.Msg",
      "CreateCohort",
      data
    );
    return promise.then((data) =>
      MsgCreateCohortResponse.decode(new Reader(data))
    );
  }

  UpdateCohort(request: MsgUpdateCohort): Promise<MsgUpdateCohortResponse> {
    const data = MsgUpdateCohort.encode(request).finish();
    const promise = this.rpc.request(
      "dndufufu.blockchain.blockchain.Msg",
      "UpdateCohort",
      data
    );
    return promise.then((data) =>
      MsgUpdateCohortResponse.decode(new Reader(data))
    );
  }

  DeleteCohort(request: MsgDeleteCohort): Promise<MsgDeleteCohortResponse> {
    const data = MsgDeleteCohort.encode(request).finish();
    const promise = this.rpc.request(
      "dndufufu.blockchain.blockchain.Msg",
      "DeleteCohort",
      data
    );
    return promise.then((data) =>
      MsgDeleteCohortResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
