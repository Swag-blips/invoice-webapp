import { Link } from "react-router-dom";
import Navbar from "../../components/home/Navbar";
import arrowLeft from "/assets/icon-arrow-left.svg";
import ReceiptButtons from "../../components/Invoice-form/ReceiptButtons";
import BillFrom from "../../components/Invoice-form/BillFrom";
import { useState } from "react";
import { FormType } from "../../types";
import BillTo from "../../components/Invoice-form/BillTo";

const CreateInvoice = () => {
  const [form, setForm] = useState<FormType>({
    senderStreetAddress: "",
    senderCity: "",
    senderPostCode: "",
    senderCountry: "",
    clientName: "",
    clientEmail: "",
    clientStreetAddress: "",
    clientCity: "",
    clientPostCode: "",
    clientCountry: "",
    projectDescription: "",
  });
  return (
    <>
      <Navbar />
      <main className="px-6">
        <div className="flex items-center gap-6 mt-[32px]">
          <img src={arrowLeft} alt="arrow-left" className="object-contain" />
          <Link
            to={"/"}
            className="text-neutral dark:text-white text-base font-bold"
          >
            Go back
          </Link>
        </div>
        <h2 className="text-neutral dark:text-white mt-8 font-bold text-2xl">
          New Invoice
        </h2>

        <form className="mt-6">
          <BillFrom form={form} />

          <h2 className="text-base font-bold mt-10 text-[#7C5DFA]">Bill To</h2>
          <BillTo form={form} />
          <div className="flex flex-col gap-6 mt-6">
            <div className="flex  flex-col gap-2">
              <label htmlFor="invoiceDate" className="label-text">
                Invoice Date
              </label>
              <input
                type="text"
                className="invoice-input-style"
                name="invoiceDate"
                id="invoiceDate"
              />
            </div>
            <div className="flex  flex-col gap-2">
              <label htmlFor="paymentTerms" className="label-text">
                Payment Terms
              </label>
              <input
                type="text"
                className="invoice-input-style"
                name="paymentTerms"
                id="paymentTerms"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="projectDescription" className="label-text">
                Project Description
              </label>
              <input
                type="text"
                name="projectDescription"
                id="projectDescription"
                className="invoice-input-style"
              />
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-[#777F98] font-bold text-[18px]">Item List</h1>

            <div className="mt-6 gap-4">
              <div className="flex flex-col">
                <div className="flex flex-col gap-4">
                  <label htmlFor="itemName" className="label-text">
                    Item Name
                  </label>
                  <input
                    id="itemName"
                    name="itemName"
                    className="invoice-input-style"
                  />
                </div>

                <div className="flex items-center mt-6 gap-4 ">
                  <div className="flex flex-col">
                    {" "}
                    <label htmlFor="Qty" className="label-text">
                      Qty
                    </label>
                    <input
                      id="Qty"
                      name="Qty"
                      className="invoice-input-style"
                    />
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <label htmlFor="Price" className="label-text">
                      Price
                    </label>
                    <input
                      id="Price"
                      name="Price"
                      className="invoice-input-style"
                    />
                  </div>
                  <div className="flex flex-col">
                    {" "}
                    <label htmlFor="total" className="label-text">
                      total
                    </label>
                    <input
                      id="total"
                      name="total"
                      className="h-12 outline-none bg-none bg-transparent"
                      readOnly
                    />
                  </div>
                </div>
                <button className="w-full mt-12 dark:bg-[#252945] rounded-3xl font-bold  h-12 bg-[#F9FAFE] text-[#7E88C3]">
                  + Add new item
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
      <ReceiptButtons />
    </>
  );
};

export default CreateInvoice;
