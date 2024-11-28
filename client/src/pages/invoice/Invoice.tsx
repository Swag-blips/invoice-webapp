import arrowLeft from "/assets/icon-arrow-left.svg";
import ItemDetails from "../../components/invoice/ItemDetails";
import { useEffect, useState } from "react";
import { InvoicesType } from "../../types";
import { Link, useParams } from "react-router-dom";
import StatusButton from "../../components/invoice/StatusButton";
import SubmitComponent from "../../components/invoice/SubmitComponent";
import InvoiceDetails from "../../components/invoice/InvoiceDetails";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../helpers/Loading";
import useReceiptStore from "../../store/receiptStore";
import DeleteInvoice from "../../components/invoice/DeleteInvoice";
import Overlay from "../../components/invoice/Overlay";

const Invoice = () => {
  const { id } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpen = () => {
    setOpenDeleteModal(true);
  };

  console.log(openDeleteModal);

  const { setIsOpen } = useReceiptStore();
  const {
    data: invoice,
    refetch,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: ["invoice"],
    queryFn: async (): Promise<InvoicesType> => {
      const res = await fetch(`${API_URL}/api/invoices/getInvoice/${id}`, {
        method: "GET",
        credentials: "include",
      });

      const data = (await res.json()) as InvoicesType;

      return data;
    },
  });
  useEffect(() => {
    refetch();
  }, [id, refetch]);

  const handleOpenForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen();
  };

  if (isLoading || isRefetching) {
    return <Loading />;
  }
  return (
    <main className="flex relative  justify-center lg:items-start mt-8 lg:mt-[78px] w-full">
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
            <button
              onClick={handleOpenForm}
              className="h-12 px-6 hover:bg-[#DFE3FA]  rounded-3xl dark:bg-[#252945] bg-[#F9FAFE] dark:text-[#DFE3FA] font-bold tracking-tight text-[#7E88C3]"
            >
              Edit
            </button>
            <button
              onClick={handleOpen}
              className="h-12 px-6 rounded-3xl hover:bg-[#FF9797]  font-bold tracking-tight  bg-error text-white"
            >
              Delete
            </button>
            <button className="bg-[#7C5DFA] h-12 px-6 hover:bg-[#9277FF] rounded-3xl font-bold tracking-tight  text-white ">
              Mark as paid
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-[#1E2139]  rounded-lg p-6 md:p-12 mt-6">
          <InvoiceDetails invoice={invoice} />
          <ItemDetails items={invoice?.itemFields} />
        </div>
        <SubmitComponent />
        {openDeleteModal && (
          <>
            <DeleteInvoice /> <Overlay />
          </>
        )}
      </div>
    </main>
  );
};

export default Invoice;
