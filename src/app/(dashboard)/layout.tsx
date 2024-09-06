import PageWrapper from "@/components/PageWrapper";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full bg-gray-100">
      {/* Main content area */}
      <div className="flex flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              Profile
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <main className=" bg-gray-100 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
