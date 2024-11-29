import { Link } from "react-router-dom";
import Navbar from "../../components/home/Navbar";
import arrowLeft from "/assets/icon-arrow-left.svg";
import ReceiptButtons from "../../components/Invoice-form/ReceiptButtons";
import BillFrom from "../../components/Invoice-form/BillFrom";
import { useState } from "react";
import { FormType } from "../../types";
import BillTo from "../../components/Invoice-form/BillTo";
import InvoiceDate from "../../components/Invoice-form/InvoiceDate";
import ProjectDescription from "../../components/Invoice-form/ProjectDescription";
import ItemList from "../../components/Invoice-form/ItemList";

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
  const [itemFields, setItemFields] = useState<ItemFields[]>([
    {
      itemName: "",
      qty: 0,
      price: 0,
      total: 0,
    },
  ]);
  const [itemFieldsError, setItemFieldsError] = useState([{}]);
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

          <h2 className="text-base font-bold mt-10 text-[#7C5DFA] mb-6">
            Bill To
          </h2>
          <BillTo form={form} />
          <div className="flex flex-col gap-6 ">
            <InvoiceDate />

            <ProjectDescription projectDescription={form.projectDescription} />
          </div>
          <div className="mt-10">
            <h1 className="text-[#777F98] font-bold text-[18px]">Item List</h1>
            <ItemList
              itemFields={itemFields}
              itemFieldsError={itemFieldsError}
            />
            <div className="mt-6 gap-4">
              <button className="w-full mt-12 dark:bg-[#252945] rounded-3xl font-bold  h-12 bg-[#F9FAFE] text-[#7E88C3]">
                + Add new item
              </button>
            </div>
          </div>
        </form>
      </main>
      <ReceiptButtons />
    </>
  );
};

export default CreateInvoice;
