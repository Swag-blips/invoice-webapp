import arrowLeft from "/assets/icon-arrow-left.svg";
import data from "../../../data.json";
import ItemDetails from "../../components/ItemDetails";
import { useEffect, useState } from "react";
import { InvoicesType } from "../../types";
import { Link, useParams } from "react-router-dom";
import formatDate from "../../utils/formatDate";

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
    <main className="flex justify-center lg:items-start mt-8 lg:mt-[78px] w-full">
      <div className="flex  md:w-[640px] flex-col lg:w-[730px]">
        <Link to={"/"} className="flex gap-6 items-center ">
          <img src={arrowLeft} alt="arrow-left" className=" object-contain" />
          <p className="text-[#737990] tracking-[-0.25px] font-bold">Go back</p>
        </Link>

        <div className="w-auto rounded-lg mt-8 justify-between flex items-center bg-white px-8 shadow-sm h-[88px]">
          <div className="flex items-center gap-5">
            <p className="font-medium text-[13px] leading-[0.1px] text-[#858BB2]">
              Status
            </p>
            <div
              className={`flex items-center justify-center gap-2 w-[104px]  ${
                invoice?.status === "paid"
                  ? "bg-[#33D69F]"
                  : invoice?.status === "pending"
                  ? "bg-[#FF8F00]"
                  : "bg-[#373B53]"
              } rounded-md bg-opacity-[5.71%] h-10`}
            >
              <div
                className={`w-2 h-2  ${
                  invoice?.status === "paid"
                    ? "bg-[#33D69F]"
                    : invoice?.status === "pending"
                    ? "bg-[#FF8F00]"
                    : "bg-[#373B53]"
                } rounded-full`}
              />
              <p
                className={` ${
                  invoice?.status === "paid"
                    ? "text-[#33D69F]"
                    : invoice?.status === "pending"
                    ? "text-[#FF8F00]"
                    : "text-[#373B53]"
                } font-bold tracking-[-0.25px] opacity-100`}
              >
                {invoice?.status}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="h-12 px-6 rounded-[24px] bg-[#F9FAFE] font-bold tracking-[-0.25px] text-[#7E88C3]">
              Edit
            </button>
            <button className="h-12 px-6 rounded-[24px]  font-bold tracking-[-0.25px]  bg-[#EC5757] text-white">
              Delete
            </button>
            <button className="bg-[#7C5DFA] h-12 px-6 rounded-[24px] font-bold tracking-[-0.25px]  text-white ">
              Mark as paid
            </button>
          </div>
        </div>

        <div className="bg-white p-12 mt-6">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2 ">
              <p className="text-[#0C0E16] text-[15px] font-bold tracking-[-0.25px]">
                <span className="text-[#7E88C3]">#</span>
                {invoice?.id}
              </p>
              <p className="font-medium text-[13px] text-left text-[#7E88C3]">
                {invoice?.description}
              </p>
            </div>
            <div className="flex text-[#7E88C3] tracking-[-0.1px] text-[13px] font-medium flex-col  text-right ">
              <p>{invoice?.senderAddress.street}</p>
              <p>{invoice?.senderAddress.city}</p>
              <p>{invoice?.senderAddress.postCode}</p>
              <p>{invoice?.senderAddress.country}</p>
            </div>
          </div>
          <div className="flex items-start gap-[117px]">
            <div className="flex flex-col justify-center gap-8">
              <div className=" flex flex-col gap-2">
                <p className="text-[#7E88C3] text-[13px] font-medium">
                  Invoice Date
                </p>
                <p className="font-bold text-[#0C0E16] text-[15px] tracking-[-0.25px]">
                  {invoice?.createdAt && formatDate(invoice?.createdAt)}
                </p>
              </div>
              <div className=" flex flex-col gap-2">
                <p className="text-[#7E88C3] text-[13px] font-medium">
                  Payment due
                </p>
                <p className="font-bold text-[#0C0E16] text-[15px] tracking-[-0.25px]">
                  {invoice?.paymentDue && formatDate(invoice?.paymentDue)}
                </p>
              </div>
            </div>

            <div>
              <p className="text-[#7E88C3] text-[13px] font-medium">Bill To</p>
              <p className="font-bold mt-[13px] text-[#0C0E16] text-[15px] tracking-[-0.25px]">
                {invoice?.clientName}
              </p>
              <div className="flex mt-2 text-[#7E88C3] tracking-[-0.1px] text-[13px] font-medium flex-col  text-left ">
                <p>{invoice?.clientAddress.street}</p>
                <p>{invoice?.clientAddress.city}</p>
                <p>{invoice?.clientAddress.postCode}</p>
                <p>{invoice?.clientAddress.country}</p>
              </div>
            </div>

            <div className="flex flex-col ">
              <p className="text-[#7E88C3] tracking-[-0.1px] text-[13px] font-medium">
                Sent to
              </p>
              <p className="font-bold  text-[#0C0E16] text-[15px] tracking-[-0.25px]">
                {invoice?.clientEmail}
              </p>
            </div>
          </div>
          <ItemDetails items={invoice?.items} total={invoice?.total} />
        </div>
      </div>
    </main>
  );
};

export default Receipt;
