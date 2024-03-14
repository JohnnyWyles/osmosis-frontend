import { IS_TESTNET } from "~/config/env";

/** Cosmwasm Code Ids confirmed to be transmuter pools in current env. */
export const TransmuterPoolCodeIds = IS_TESTNET ? ["3084"] : ["148"];
export const AstroportPclPoolCodeIds = IS_TESTNET ? ["5005"] : ["580"];
