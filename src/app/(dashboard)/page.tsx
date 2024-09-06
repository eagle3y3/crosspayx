import React from "react";
import { UserInfo } from "@/components/Dashboard/user-info"; // Adjust the import path
import { KYCViewerInfo } from "@/KYCViewerService"; // Adjust the import path
import { TokenBalance } from "@/BlockscoutUtils";
import TokenInfo from "@/components/Dashboard/token-balance";
import { CheckInfo } from "@/components/Dashboard/check-info";

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
    </div>
  );
};

export default Dashboard;
