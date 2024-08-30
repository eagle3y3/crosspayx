"use client";
import { createKintoSDK, KintoAccountInfo } from "kinto-web-sdk";
import { useState, useEffect } from "react";
import {
  encodeFunctionData,
  Address,
  getContract,
  defineChain,
  createPublicClient,
  http,
} from "viem";
import { KYCViewerService, KYCViewerInfo } from "./../KYCViewerService";
import {
  getERC20Balances,
  formatTokenBalance,
  TokenBalance,
} from "./../BlockscoutUtils";
import { Button } from "@/components/ui/button";
import Loading from "../components/ui/loading";
import Dashboard from "./(dashboard)/page";

interface Transaction {
  to: string;
  value: string;
  data: string;
}

const kinto = defineChain({
  id: 7887,
  name: "Kinto",
  network: "kinto",
  nativeCurrency: {
    decimals: 18,
    name: "ETH",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.kinto-rpc.com/"],
      webSocket: ["wss://rpc.kinto.xyz/ws"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://kintoscan.io" },
  },
});

const counterAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "count",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "increment",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
];

export default function Home() {
  const [accountInfo, setAccountInfo] = useState<KintoAccountInfo | undefined>(
    undefined
  );
  const [kycViewerInfo, setKYCViewerInfo] = useState<KYCViewerInfo | null>(
    null
  );
  const [tokenBalances, setTokenBalances] = useState<TokenBalance[]>([]);
  const [selectedToken, setSelectedToken] = useState<TokenBalance | null>(null);
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [transferAmount, setTransferAmount] = useState<string>("");
  const [destinationKYCInfo, setDestinationKYCInfo] =
    useState<KYCViewerInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const kintoSDK = createKintoSDK("0x60eF862f70983eB631bb5bBDdCc1F7F067f9D2F3");

  async function kintoLogin() {
    try {
      await kintoSDK.createNewWallet();
    } catch (error) {
      console.error("Failed to login/signup:", error);
    }
  }

  async function fetchKYCViewerInfo() {
    if (!accountInfo?.walletAddress) return;

    const kycViewer = KYCViewerService.getInstance();
    const info = await kycViewer.fetchKYCInfo(
      accountInfo.walletAddress as Address
    );
    setKYCViewerInfo(info);
  }

  async function fetchAccountInfo() {
    try {
      setAccountInfo(await kintoSDK.connect());
    } catch (error) {
      console.error("Failed to fetch account info:", error);
    }
  }

  async function fetchTokenBalances() {
    if (accountInfo?.walletAddress) {
      const balances = await getERC20Balances(accountInfo.walletAddress);
      console.log("Token balances:", balances);

      //array of all erc20 addresses:
      const erc20Addresses = balances.map((token) => token.contractAddress);
      console.log("ERC20 Addresses:", erc20Addresses);

      //TODO: better to fetch balances from the contract
      setTokenBalances(balances);
    }
  }

  const handleTransfer = async () => {
    console.log("Attempting transfer");
    if (
      !selectedToken ||
      !recipientAddress ||
      !transferAmount ||
      !accountInfo?.walletAddress
    ) {
      console.log("Transfer cancelled: missing information");
      return;
    }

    try {
      const amount = BigInt(
        parseFloat(transferAmount) *
          Math.pow(10, parseInt(selectedToken.decimals))
      );
      const data = encodeFunctionData({
        abi: [
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        functionName: "transfer",
        args: [recipientAddress as Address, amount],
      });

      console.log("Sending transaction");
      const response = await kintoSDK.sendTransaction([
        {
          to: selectedToken.contractAddress as Address,
          data,
          value: BigInt(0),
        },
      ]);

      console.log("Transfer response:", response);
      // Refresh token balances after transfer
      await fetchTokenBalances();

      // Clear input fields after successful transfer
      setTransferAmount("");
      setRecipientAddress("");
      setSelectedToken(null);
    } catch (error) {
      console.error("Failed to transfer token:", error);
    }
  };

  const fetchDestinationKYC = async () => {
    if (!recipientAddress) return;

    const kycViewer = KYCViewerService.getInstance();
    const info = await kycViewer.fetchKYCInfo(recipientAddress as Address);
    setDestinationKYCInfo(info);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const account = await kintoSDK.connect();
        setAccountInfo(account);

        if (account?.walletAddress) {
          const kycViewer = KYCViewerService.getInstance();
          const kycInfo = await kycViewer.fetchKYCInfo(
            account.walletAddress as Address
          );
          setKYCViewerInfo(kycInfo);

          const balances = await getERC20Balances(account.walletAddress);
          setTokenBalances(balances);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    if (recipientAddress && recipientAddress.length === 42) {
      fetchDestinationKYC();
    } else {
      setDestinationKYCInfo(null);
    }
  }, [recipientAddress]);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {accountInfo?.walletAddress ? (
        <>
          <Dashboard />
          <div>{accountInfo.walletAddress}</div>
        </>
      ) : (
        <Button variant={"outline"} onClick={() => kintoLogin()}>
          {"Create A Wallet"}
        </Button>
      )}
    </main>
  );
}
