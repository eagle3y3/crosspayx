import React from "react";
import DashboardLayout from "./layout"; // Adjust the import path as needed
import PageWrapper from "@/components/PageWrapper";
import { UserInfo } from "@/components/Dashboard/user-info";

const DashboardHomePage: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap">
      <UserInfo />
      <UserInfo />
      <UserInfo />
    </div>
  );
};

export default DashboardHomePage;
