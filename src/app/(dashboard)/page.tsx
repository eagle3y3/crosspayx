import React from "react";
import { UserInfo } from "@/components/Dashboard/user-info"; // Adjust the import path
import { KYCViewerInfo } from "@/KYCViewerService"; // Adjust the import path

interface DashboardProps {
  accountInfo: KYCViewerInfo | null;
}

const Dashboard: React.FC<DashboardProps> = ({ accountInfo }) => {
  return (
    <div className="flex flex-row flex-wrap">
      <UserInfo accountInfo={accountInfo} />
    </div>
  );
};

export default Dashboard;
