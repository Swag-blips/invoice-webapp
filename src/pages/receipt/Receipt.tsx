import arrowLeft from "/assets/icon-arrow-left.svg";
import data from "../../../data.json";
import ItemDetails from "../../components/ItemDetails";
import { useEffect, useState } from "react";
import { InvoicesType } from "../../types";
import { Link, useParams } from "react-router-dom";
import StatusButton from "../../components/StatusButton";
import ReceiptDetails from "../../components/ReceiptDetails";
import SubmitComponent from "../../components/SubmitComponent";

const Receipt = () => {
  const [invoice, setInvoice] = useState<InvoicesType>();

  const { id } = useParams();

  const findInvoice = () => {
    const invoice = data.find((curr) => curr.id === id);
    setInvoice(invoice);
    return;
  };

  // const isPaid = invoice?.status === "paid";

  useEffect(() => {
    findInvoice();
  }, [data, id]);

  return (
    <main className="flex  justify-center lg:items-start mt-8 lg:mt-[78px] w-full">
      <div className="flex w-full mx-6  md:w-[640px] flex-col lg:w-[730px]">
        <Link to={"/"} className="flex gap-6 items-center ">
          <img src={arrowLeft} alt="arrow-left" className=" object-contain" />
          <p className="text-[#737990] hover:text-[#7E88C3] dark:text-white tracking-tight font-bold">
            Go back
          </p>
        </Link>

        <div className="w-auto rounded-lg mt-8 justify-between flex items-center dark:bg-[#1E2139] dark:shadow-none bg-white px-8 shadow-md h-[88px]">
          <div className="flex w-full md:w-auto justify-between items-center gap-5">
            <p className="font-medium text-sm leading-[0.1px] dark:text-[#DFE3FA] text-secondary-text">
              Status
            </p>
            <StatusButton invoice={invoice} />
          </div>
          <div className="md:flex hidden items-center gap-2">
            <button className="h-12 px-6 hover:bg-[#DFE3FA]  rounded-[24px] dark:bg-[#252945] bg-[#F9FAFE] dark:text-[#DFE3FA] font-bold tracking-tight text-[#7E88C3]">
              Edit
            </button>
            <button className="h-12 px-6 rounded-[24px] hover:bg-[#FF9797]  font-bold tracking-tight  bg-[#EC5757] text-white">
              Delete
            </button>
            <button className="bg-[#7C5DFA] h-12 px-6 hover:bg-[#9277FF] rounded-[24px] font-bold tracking-tight  text-white ">
              Mark as paid
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1E2139]  rounded-lg p-6 md:p-12 mt-6">
          <ReceiptDetails invoice={invoice} />
          <ItemDetails items={invoice?.items} total={invoice?.total} />
        </div>
        <SubmitComponent />
      </div>
    </main>
  );
};

export default Receipt;
