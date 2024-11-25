import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/home/Sidebar";
import Navbar from "../components/home/Navbar";
import useReceiptStore from "../store/receiptStore";
import ReceiptForm from "../components/common/ReceiptForm";
import Overlay from "../components/receipt/Overlay";
import { Loader } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const RootLayout = () => {
  const { isOpen } = useReceiptStore();
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userId);
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-6 text-[#4b2ec0] animate-spin" />
      </div>
    );
  }
  return (
    <div className="flex flex-col lg:flex-row lg:items-start w-full  ">
      <Sidebar />
      {isOpen && <ReceiptForm />}
      <Navbar />

      <div
        className={`lg:flex ${
          isOpen ? "overflow-y-hidden" : ""
        }  lg:justify-center w-full`}
      >
        <Outlet />
        {isOpen && <Overlay />}
      </div>
    </div>
  );
};

export default RootLayout;
