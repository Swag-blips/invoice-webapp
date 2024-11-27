import { useState } from "react";
import ReceiptButtons from "./ReceiptButtons";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceDate from "./InvoiceDate";
import ItemList from "./ItemList";
import ProjectDescription from "./ProjectDescription";
import { FormErrors, FormType, ItemFields } from "../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";
import { handleValidator } from "../../utils/validateInput";

const InvoiceForm = () => {
  const [isOpen, setIsOpen] = useState(false);
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
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "Net 30 Days"
  );
  const [errors, setErrors] = useState<FormErrors | null>(null);
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
  const { userId } = useAuth();
  const toggle = () => {
    setIsOpen(!isOpen);
    return;
  };
  const handleSelectedOption = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    return;
  };

  const queryClient = useQueryClient();
  const { mutate: createInvoice } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch(`${API_URL}/api/invoices/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            ...form,

            selectedOption,
            startDate,
            itemFields,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data;
      } catch (error: any) {
        throw new Error(error);
      }
    },

    onSuccess: () => {
      toast.success("Invoice created successfully");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },

    onError: (error) => {
      toast.error(error?.message);
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
    if (
      handleValidator(
        itemFields,
        setItemFieldsError,
        form,
        setErrors,
        startDate,
        selectedOption
      )
    ) {
      createInvoice();
    }
    return;
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
            {errors && (
              <>
                <p className="text-sm text-error">
                  -All fields must be filled <br />
                  -an item must be added
                </p>
              </>
            )}
            <ReceiptButtons handleSubmit={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceForm;
