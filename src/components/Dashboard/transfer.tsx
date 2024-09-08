import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

interface TokenBalance {
  balance: string;
  contractAddress: string;
  decimals: string;
  name: string;
  symbol: string;
  type: string;
}

interface TokenDropdownProps {
  balances: TokenBalance[];
  isOpen: boolean;
  toggleDropdown: () => void;
  loading: boolean;
}

interface TransferProps {
  setSelectedToken: (tokenBalance: TokenBalance | null) => void;
  setTransferAmount: (amount: string) => void;
  formatTokenBalance: (balance: string, decimals: string) => string;
  handleTransfer: () => void;
  setRecipientAddress: (address: string) => void;
  tokenBalances: TokenBalance[];
  recipientAddress: string;
  selectedToken: TokenBalance | null;
  transferAmount: string;
  usdValue: string;
}

const Transfer: React.FC<TransferProps> = ({
  setSelectedToken,
  setTransferAmount,
  formatTokenBalance,
  tokenBalances,
  handleTransfer,
  selectedToken,
  transferAmount,
  recipientAddress,
  setRecipientAddress,
  usdValue,
}) => {
  return (
    <Card>
      <CardHeader className="p-3">
        <CardTitle>Transfer Tokens</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-1 transition-all duration-300">
        {/* Token Selection */}
        <div className="mb-4">
          <Label className=" text-gray-700 text-sm mb-2">Select Token</Label>
          <select
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            value={selectedToken?.contractAddress || ""}
            onChange={(e) => {
              const selected = tokenBalances.find(
                (token) => token.contractAddress === e.target.value
              );
              setSelectedToken(selected || null); // Use null or handle undefined case if no match is found
            }}
          >
            <option value="" disabled>
              Select a Token
            </option>
            {tokenBalances.map((token) => (
              <option key={token.contractAddress} value={token.contractAddress}>
                {token.symbol} -{" "}
                {formatTokenBalance(token.balance, token.decimals.toString())}
              </option>
            ))}
          </select>
        </div>

        {/* Recipient Address */}
        <div className="mb-4">
          <Label className="block text-gray-700 text-sm mb-2">
            Recipient Address
          </Label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none"
            placeholder="0xRecipientAddress"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
          />
        </div>

        {/* Transfer Amount */}
        <div className="mb-4 relative">
          <Label className="block text-gray-700 text-sm mb-2">
            Transfer Amount
          </Label>
          <div className="relative">
            {/* Amount Input */}
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-md focus:outline-none"
              placeholder="Amount"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
            />

            {/* USD Equivalent (Outside of the input but aligned bottom-right) */}
            <span className="absolute bottom-[-1.5rem] right-0 text-gray-600 text-sm mb-1">
              {"$"}
              {usdValue}
              {" USD"}
            </span>
          </div>
        </div>

        {/* Transfer Button */}
        <Button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 mt-2"
          onClick={handleTransfer}
          disabled={!selectedToken || !recipientAddress || !transferAmount}
        >
          Transfer
        </Button>
      </CardContent>
    </Card>
  );
};

export default Transfer;
