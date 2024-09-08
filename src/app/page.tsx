"use client";
import { createKintoSDK, KintoAccountInfo } from "kinto-web-sdk";
import { useState, useEffect } from "react";
import {
  encodeFunctionData,
  Address,
  defineChain,
  parseUnits,
  pad,
} from "viem";
import { KYCViewerService, KYCViewerInfo } from "./../KYCViewerService";
import {
  getERC20Balances,
  formatTokenBalance,
  TokenBalance,
} from "./../BlockscoutUtils";
import { Button } from "@/components/ui/button";
import Loading from "@/components/ui/loading";
import Dashboard from "./(dashboard)/page";
import { WETH_USD_PRICE_ID } from "@/PythUtils";

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
  const [destinationKYCError, setDestinationKYCError] = useState<string | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const kintoSDK = createKintoSDK("0x60eF862f70983eB631bb5bBDdCc1F7F067f9D2F3");
  const [usdValue, setUsdValue] = useState<string>(""); // USD equivalent
  const [wethToUsdPrice, setWethToUsdPrice] = useState<number | null>(null); // WETH/USD price

  async function kintoLogin() {
    try {
      await kintoSDK.createNewWallet();
    } catch (error) {
      console.error("Failed to login/signup:", error);
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
    console.log("Attempting transfer via custom contract");
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
      const amount = parseUnits(
        transferAmount,
        parseInt(selectedToken.decimals)
      );
      const tokenSymbol = pad(selectedToken.contractAddress as Address, {
        size: 32,
      }); // Replace with actual token symbol
      const priceId =
        "0x9d4294bbcd1174d6f2003ec365831e64cc31d9f6f15a2b85399db8d5000960f6"; // Replace with actual price ID

      // Encode the function data for your contract's pay function
      const data = encodeFunctionData({
        abi: [
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "bytes32", name: "tokenSymbol", type: "bytes32" },
              { internalType: "uint256", name: "amount", type: "uint256" },
              { internalType: "bytes32", name: "priceId", type: "bytes32" },
            ],
            name: "pay",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        functionName: "pay",
        args: [recipientAddress as Address, tokenSymbol, amount, priceId],
      });

      const transactions = [
        {
          to: "0x7f2541bA54d4461EE081544E550Ee28C744C874c" as Address, // Replace with your contract's address
          data,
          value: BigInt(0), // Assuming your pay function doesn't require sending native currency
        },
      ];

      // Send transaction to your custom smart contract
      const response = await kintoSDK.sendTransaction(transactions);

      console.log("Transaction response:", response);

      // Refresh balances or UI as needed after transaction
      await fetchTokenBalances();

      setTransferAmount("");
      setRecipientAddress("");
      setSelectedToken(null);
    } catch (error) {
      console.error("Failed to transfer token via custom contract:", error);
    }
  };

  const fetchDestinationKYC = async () => {
    if (!recipientAddress) return;

    const kycViewer = KYCViewerService.getInstance();
    const info = await kycViewer.fetchKYCInfo(recipientAddress as Address);
    if (typeof info === "string") {
      setDestinationKYCError(info);
    } else {
      setDestinationKYCInfo(info);
    }
  };

  const fetchWethPriceInUSD = async () => {
    const url = `https://hermes.pyth.network/v2/updates/price/latest?ids[]=${WETH_USD_PRICE_ID}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.parsed.length > 0) {
        const priceData = data.parsed[0].price.price; // Raw price
        const expo = data.parsed[0].price.expo; // Exponent

        // Calculate the final price in USD
        const wethToUsdPrice = priceData * 10 ** expo; // Since expo is negative, this divides the price
        setWethToUsdPrice(wethToUsdPrice);
      }
    } catch (error) {
      console.error("Failed to fetch WETH/USD price from Pyth API:", error);
    }
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

          // Check if the kycInfo is of the correct type
          if (typeof kycInfo === "object" && kycInfo !== null) {
            setKYCViewerInfo(kycInfo);
          } else {
            console.error("Invalid KYC info:", kycInfo);
            setKYCViewerInfo(null); // Handle it gracefully
          }

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

  // Fetch the price when the component mounts
  useEffect(() => {
    fetchWethPriceInUSD();
  }, []);

  // Update USD value whenever the user types in a WETH amount
  useEffect(() => {
    if (transferAmount && wethToUsdPrice !== null) {
      const wethValue = parseFloat(transferAmount);
      const usdEquivalent = wethValue * wethToUsdPrice;
      setUsdValue(usdEquivalent.toFixed(2)); // Show with two decimal places
    } else {
      setUsdValue(""); // Reset if input is empty or price is not available
    }
  }, [transferAmount, wethToUsdPrice]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  if (loading) {
    return (
      <div className="flex max-h-screen flex-col items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <main className="flex flex-col md:flex-row md:ml-40 md:justify-start items-start justify-center w-full">
      {/* Set items-start */}
      {accountInfo?.walletAddress ? (
        <div className="w-full">
          {/* Allow to take full width */}
          <Dashboard
            accountInfo={kycViewerInfo}
            isOpen={isOpen}
            toggleDropdown={toggleDropdown}
            tokenBalance={tokenBalances}
            loading={loading}
            recipientAddress={recipientAddress}
            recipientInfo={destinationKYCInfo}
            destinationKYCError={destinationKYCError}
            setRecipientAddress={setRecipientAddress}
            setSelectedToken={setSelectedToken}
            setTransferAmount={setTransferAmount}
            formatTokenBalance={formatTokenBalance}
            handleTransfer={handleTransfer}
            selectedToken={selectedToken}
            transferAmount={transferAmount}
            usdValue={usdValue}
          />
        </div>
      ) : (
        <Button variant={"outline"} onClick={() => kintoLogin()}>
          {"Create A Wallet"}
        </Button>
      )}
    </main>
  );
}
