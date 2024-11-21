import { Outlet } from "react-router-dom";
import Sidebar from "../components/home/Sidebar";
import Navbar from "../components/home/Navbar";
import useReceiptStore from "../store/receiptStore";
import ReceiptForm from "../components/ReceiptForm";

const RootLayout = () => {
  const { isOpen } = useReceiptStore();

  return (
    <div className="flex flex-col lg:flex-row lg:items-start w-full  ">
      <Sidebar />
      {isOpen && <ReceiptForm />}
      <Navbar />
      <div className="lg:flex lg:justify-center w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
