import { useState } from "react";
import ReceiptButtons from "./ReceiptButtons";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceDate from "./InvoiceDate";
import ItemList from "./ItemList";
import ProjectDescription from "./ProjectDescription";
import { BillFromErrors, ItemFields } from "../../types";
import validate, {
  validateDateAndOption,
  validateItemFields,
} from "../../utils/validateInput";
import { useMutation } from "@tanstack/react-query";

const InvoiceForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
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
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "Net 30 Days"
  );
  const [errors, setErrors] = useState<BillFromErrors | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [itemFields, setItemFields] = useState<ItemFields[]>([
    {
      itemName: "",
      qty: null,
      price: null,
      total: null,
    },
  ]);
  const [isSubmitted, setIsubmitted] = useState(false);
  const [itemFieldsError, setItemFieldsError] = useState([{}]);

  const API_URL = import.meta.env.VITE_API_URL;

  const toggle = () => {
    setIsOpen(!isOpen);
    return;
  };
  const handleSelectedOption = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    return;
  };

  const { mutate: createInvoice } = useMutation({
    mutationFn: async () => {
      const res = await fetch(`${API_URL}/api/invoices`, {
        method: "POST",
      });
    },
  });

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data = [...itemFields];
    data[index][event.target.name] = event.target.value;
    if (data[index][event.target.name]) {
      data[index].total = (data[index].qty || 0) * (data[index].price || 0);
    }

    setItemFields(data);
  };

  const addFields = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let newField = { itemName: "", qty: null, price: null, total: null };
    setIsubmitted(false);
    setItemFields([...itemFields, newField]);
  };

  const removeFields = (index: number) => {
    if (index === 0) return;
    setItemFields((prevInput) => prevInput.filter((_, indx) => indx !== index));
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsubmitted(true);
    if (
      validate(
        form.senderStreetAddress,
        form.senderCity,
        form.senderPostCode,
        form.senderCountry,
        form.clientName,
        form.clientEmail,
        form.clientStreetAddress,
        form.clientCity,
        form.clientPostCode,
        form.clientCountry,
        form.projectDescription,
        setErrors
      ) &&
      validateItemFields(itemFields, setItemFieldsError) &&
      validateDateAndOption(startDate, selectedOption)
    ) {
      console.log("Valid");
    } else {
      console.log("Not valid!");
    }
  };

  return (
    <div className="lg:w-[719px] w-[616px] dark:bg-[#141625] hidden no-scrollbar md:flex z-10 absolute  overflow-y-scroll bg-white h-screen">
      <div className="lg:ml-[159px] md:ml-[56px]  mt-[120px] lg:mt-[59px]">
        <h1 className="font-bold dark:text-white text-[24px] text-neutral tracking-[-0.5px]">
          New invoice
        </h1>
        <form className="mt-[46px] dark:text-white w-[504px] text-left">
          <BillFrom
            errors={errors}
            handleFormInputChange={handleFormInputChange}
          />
          <div className="flex flex-col mt-12 gap-6">
            <h2 className="text-base font-bold text-[#7C5DFA]">Bill To</h2>
            <BillTo
              errors={errors}
              handleFormInputChange={handleFormInputChange}
            />
            <InvoiceDate
              handleSelectedOption={handleSelectedOption}
              selectedOption={selectedOption}
              toggle={toggle}
              startDate={startDate}
              setStartDate={setStartDate}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <ProjectDescription
              errors={errors}
              handleFormInputChange={handleFormInputChange}
            />
            <div>
              <h2 className="text-[#777F98] font-bold text-[18px]">
                Item List
              </h2>
              <ItemList
                itemFields={itemFields}
                isSubmitted={isSubmitted}
                itemFieldsError={itemFieldsError || {}}
                handleFormChange={handleFormChange}
                removeFields={removeFields}
              />
              <button
                onClick={addFields}
                className="w-full dark:bg-[#252945] rounded-3xl font-bold mt-4 h-12 bg-[#F9FAFE] text-[#7E88C3]"
              >
                + Add new item
              </button>
            </div>
            <ReceiptButtons handleSubmit={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceForm;
