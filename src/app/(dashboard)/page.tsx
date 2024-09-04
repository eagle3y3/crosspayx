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
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
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
      />
    </div>
  );
};

export default Dashboard;
