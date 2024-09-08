"use client";

import React from "react";
import { UserInfo } from "@/components/Dashboard/user-info";
import { KYCViewerInfo } from "@/KYCViewerService";
import { TokenBalance } from "@/BlockscoutUtils";
import TokenInfo from "@/components/Dashboard/token-balance";
import { CheckInfo } from "@/components/Dashboard/check-info";
import Transfer from "@/components/Dashboard/transfer";

interface DashboardProps {
  accountInfo: KYCViewerInfo | null;
  tokenBalance: TokenBalance[];
  isOpen: boolean;
  toggleDropdown: () => void;
  loading: boolean;
  recipientAddress: string;
  recipientInfo: KYCViewerInfo | null;
  setRecipientAddress: (address: string) => void;
  destinationKYCError: string | null;
  setSelectedToken: (tokenBalance: TokenBalance | null) => void;
  formatTokenBalance: (balance: string, decimals: string) => string;
  setTransferAmount: (amount: string) => void;
  handleTransfer: () => void;
  selectedToken: TokenBalance | null;
  transferAmount: string;
  usdValue: string;
}

const Dashboard: React.FC<DashboardProps> = ({
  accountInfo,
  tokenBalance,
  isOpen,
  toggleDropdown,
  loading,
  recipientAddress,
  recipientInfo,
  setRecipientAddress,
  destinationKYCError,
  setSelectedToken,
  setTransferAmount,
  formatTokenBalance,
  handleTransfer,
  selectedToken,
  transferAmount,
  usdValue,
}) => {
  return (
    <div className="grid grid-cols-1 md:flex md:gap-3 md:items-start md:justify-start w-full">
      <UserInfo accountInfo={accountInfo} />
      <TokenInfo
        balances={tokenBalance}
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
        loading={loading}
      />
      <CheckInfo
        recipientAddress={recipientAddress}
        recipientInfo={recipientInfo}
        setRecipientAddress={setRecipientAddress}
        destinationKYCError={destinationKYCError}
      />
      <Transfer
        selectedToken={selectedToken}
        setSelectedToken={setSelectedToken}
        recipientAddress={recipientAddress}
        setRecipientAddress={setRecipientAddress}
        handleTransfer={handleTransfer}
        transferAmount={transferAmount}
        tokenBalances={tokenBalance}
        setTransferAmount={setTransferAmount}
        formatTokenBalance={formatTokenBalance}
        usdValue={usdValue}
      />
    </div>
  );
};

export default Dashboard;
