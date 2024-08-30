import React from "react";
import DashboardLayout from "./layout"; // Adjust the import path as needed
import PageWrapper from "@/components/PageWrapper";

const DashboardHomePage: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
      <p className="text-gray-700">
        This is the main content area where you can place your dashboard
        widgets, charts, or other important information.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Widgets */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold">Widget 1</h2>
          <p className="text-gray-600">Some content for widget 1.</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold">Widget 2</h2>
          <p className="text-gray-600">Some content for widget 2.</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold">Widget 3</h2>
          <p className="text-gray-600">Some content for widget 3.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
