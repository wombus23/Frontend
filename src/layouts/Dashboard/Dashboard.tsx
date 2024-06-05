import { ReactNode } from "react";
import { Nav, MobileNav } from "./components";

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-stretch min-h-screen">
      <Nav className="hidden md:flex" />
      <MobileNav className="md:hidden" />
      <main className="main-content min-h-screen w-full bg-[#17181A] text-white">
        {children}
      </main>
    </div>
  );
};

export default Dashboard;
