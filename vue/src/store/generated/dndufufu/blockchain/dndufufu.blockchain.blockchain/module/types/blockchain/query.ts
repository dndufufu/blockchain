/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Cohort } from "../blockchain/cohort";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "dndufufu.blockchain.blockchain";

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

const baseQueryGetCohortRequest: object = { id: 0 };

export const QueryGetCohortRequest = {
  encode(
    message: QueryGetCohortRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCohortRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCohortRequest } as QueryGetCohortRequest;
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

  fromJSON(object: any): QueryGetCohortRequest {
    const message = { ...baseQueryGetCohortRequest } as QueryGetCohortRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCohortRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCohortRequest>
  ): QueryGetCohortRequest {
    const message = { ...baseQueryGetCohortRequest } as QueryGetCohortRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCohortResponse: object = {};

export const QueryGetCohortResponse = {
  encode(
    message: QueryGetCohortResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Cohort !== undefined) {
      Cohort.encode(message.Cohort, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCohortResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetCohortResponse } as QueryGetCohortResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Cohort = Cohort.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCohortResponse {
    const message = { ...baseQueryGetCohortResponse } as QueryGetCohortResponse;
    if (object.Cohort !== undefined && object.Cohort !== null) {
      message.Cohort = Cohort.fromJSON(object.Cohort);
    } else {
      message.Cohort = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCohortResponse): unknown {
    const obj: any = {};
    message.Cohort !== undefined &&
      (obj.Cohort = message.Cohort ? Cohort.toJSON(message.Cohort) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCohortResponse>
  ): QueryGetCohortResponse {
    const message = { ...baseQueryGetCohortResponse } as QueryGetCohortResponse;
    if (object.Cohort !== undefined && object.Cohort !== null) {
      message.Cohort = Cohort.fromPartial(object.Cohort);
    } else {
      message.Cohort = undefined;
    }
    return message;
  },
};

const baseQueryAllCohortRequest: object = {};

export const QueryAllCohortRequest = {
  encode(
    message: QueryAllCohortRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCohortRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCohortRequest } as QueryAllCohortRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCohortRequest {
    const message = { ...baseQueryAllCohortRequest } as QueryAllCohortRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCohortRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCohortRequest>
  ): QueryAllCohortRequest {
    const message = { ...baseQueryAllCohortRequest } as QueryAllCohortRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCohortResponse: object = {};

export const QueryAllCohortResponse = {
  encode(
    message: QueryAllCohortResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Cohort) {
      Cohort.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCohortResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllCohortResponse } as QueryAllCohortResponse;
    message.Cohort = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Cohort.push(Cohort.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCohortResponse {
    const message = { ...baseQueryAllCohortResponse } as QueryAllCohortResponse;
    message.Cohort = [];
    if (object.Cohort !== undefined && object.Cohort !== null) {
      for (const e of object.Cohort) {
        message.Cohort.push(Cohort.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCohortResponse): unknown {
    const obj: any = {};
    if (message.Cohort) {
      obj.Cohort = message.Cohort.map((e) =>
        e ? Cohort.toJSON(e) : undefined
      );
    } else {
      obj.Cohort = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCohortResponse>
  ): QueryAllCohortResponse {
    const message = { ...baseQueryAllCohortResponse } as QueryAllCohortResponse;
    message.Cohort = [];
    if (object.Cohort !== undefined && object.Cohort !== null) {
      for (const e of object.Cohort) {
        message.Cohort.push(Cohort.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Cohort(request: QueryGetCohortRequest): Promise<QueryGetCohortResponse>;
  CohortAll(request: QueryAllCohortRequest): Promise<QueryAllCohortResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Cohort(request: QueryGetCohortRequest): Promise<QueryGetCohortResponse> {
    const data = QueryGetCohortRequest.encode(request).finish();
    const promise = this.rpc.request(
      "dndufufu.blockchain.blockchain.Query",
      "Cohort",
      data
    );
    return promise.then((data) =>
      QueryGetCohortResponse.decode(new Reader(data))
    );
  }

  CohortAll(request: QueryAllCohortRequest): Promise<QueryAllCohortResponse> {
    const data = QueryAllCohortRequest.encode(request).finish();
    const promise = this.rpc.request(
      "dndufufu.blockchain.blockchain.Query",
      "CohortAll",
      data
    );
    return promise.then((data) =>
      QueryAllCohortResponse.decode(new Reader(data))
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
