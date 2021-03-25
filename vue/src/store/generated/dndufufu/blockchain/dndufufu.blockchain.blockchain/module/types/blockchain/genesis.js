/* eslint-disable */
import { Cohort } from "../blockchain/cohort";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "dndufufu.blockchain.blockchain";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.cohortList) {
            Cohort.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.cohortList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cohortList.push(Cohort.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.cohortList = [];
        if (object.cohortList !== undefined && object.cohortList !== null) {
            for (const e of object.cohortList) {
                message.cohortList.push(Cohort.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.cohortList) {
            obj.cohortList = message.cohortList.map((e) => e ? Cohort.toJSON(e) : undefined);
        }
        else {
            obj.cohortList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.cohortList = [];
        if (object.cohortList !== undefined && object.cohortList !== null) {
            for (const e of object.cohortList) {
                message.cohortList.push(Cohort.fromPartial(e));
            }
        }
        return message;
    },
};
