import { createPublicClient, getContract, http } from "viem";

// Example Pyth Price Feed ABI
export const pythAbi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "priceId",
        type: "bytes32",
      },
    ],
    name: "getPriceUnsafe",
    outputs: [
      {
        internalType: "int64",
        name: "price",
        type: "int64",
      },
      {
        internalType: "int32",
        name: "expo",
        type: "int32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
// The Pyth contract address you provided
export const pythContractAddress = "0xA2aa501b19aff244D90cc15a4Cf739D2725B5729";

// WETH/USD priceId
export const WETH_USD_PRICE_ID =
  "0x9d4294bbcd1174d6f2003ec365831e64cc31d9f6f15a2b85399db8d5000960f6"; // Provided priceId
