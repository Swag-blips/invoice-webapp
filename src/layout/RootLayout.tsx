import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start w-full  ">
      <Sidebar />
      <Navbar />
      <div className="lg:flex  justify-center    w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
