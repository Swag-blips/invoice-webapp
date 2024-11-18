import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <div className="flex w-full  ">
      <Sidebar />
      <main className="flex justify-center items-start mt-[78px] w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
