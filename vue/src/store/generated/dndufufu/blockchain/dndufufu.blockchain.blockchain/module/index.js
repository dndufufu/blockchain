// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteCohort } from "./types/blockchain/tx";
import { MsgUpdateCohort } from "./types/blockchain/tx";
import { MsgCreateCohort } from "./types/blockchain/tx";
const types = [
    ["/dndufufu.blockchain.blockchain.MsgDeleteCohort", MsgDeleteCohort],
    ["/dndufufu.blockchain.blockchain.MsgUpdateCohort", MsgUpdateCohort],
    ["/dndufufu.blockchain.blockchain.MsgCreateCohort", MsgCreateCohort],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgDeleteCohort: (data) => ({ typeUrl: "/dndufufu.blockchain.blockchain.MsgDeleteCohort", value: data }),
        msgUpdateCohort: (data) => ({ typeUrl: "/dndufufu.blockchain.blockchain.MsgUpdateCohort", value: data }),
        msgCreateCohort: (data) => ({ typeUrl: "/dndufufu.blockchain.blockchain.MsgCreateCohort", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
