// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteCohort } from "./types/blockchain/tx";
import { MsgUpdateCohort } from "./types/blockchain/tx";
import { MsgCreateCohort } from "./types/blockchain/tx";


const types = [
  ["/dndufufu.blockchain.blockchain.MsgDeleteCohort", MsgDeleteCohort],
  ["/dndufufu.blockchain.blockchain.MsgUpdateCohort", MsgUpdateCohort],
  ["/dndufufu.blockchain.blockchain.MsgCreateCohort", MsgCreateCohort],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgDeleteCohort: (data: MsgDeleteCohort): EncodeObject => ({ typeUrl: "/dndufufu.blockchain.blockchain.MsgDeleteCohort", value: data }),
    msgUpdateCohort: (data: MsgUpdateCohort): EncodeObject => ({ typeUrl: "/dndufufu.blockchain.blockchain.MsgUpdateCohort", value: data }),
    msgCreateCohort: (data: MsgCreateCohort): EncodeObject => ({ typeUrl: "/dndufufu.blockchain.blockchain.MsgCreateCohort", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};