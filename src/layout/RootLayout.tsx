import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full  ">
      <Sidebar />

      <Navbar />

      <main className="flex justify-center items-start mt-8 lg:mt-[78px] w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
