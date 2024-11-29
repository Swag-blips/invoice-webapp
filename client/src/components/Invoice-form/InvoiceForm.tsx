import { useEffect, useState } from "react";
import ReceiptButtons from "./ReceiptButtons";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceDate from "./InvoiceDate";
import ItemList from "./ItemList";
import ProjectDescription from "./ProjectDescription";
import { FormErrors, FormType, InvoicesType, ItemFields } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { handleValidator } from "../../utils/validateInput";
import { useParams } from "react-router-dom";
import EditButtons from "./EditButtons";
import { useCreateInvoice, useEditInvoice } from "../../hooks/useInvoice";

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
      qty: 0,
      price: 0,
      total: 0,
    },
  ]);
  const [isSubmitted, setIsubmitted] = useState(false);
  const [itemFieldsError, setItemFieldsError] = useState([{}]);
  const toggle = () => {
    setIsOpen(!isOpen);
    return;
  };
  const handleSelectedOption = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    return;
  };

  const { id } = useParams();

  const { data: invoice } = useQuery<InvoicesType>({
    queryKey: ["invoice"],
  });

  useEffect(() => {
    if (id && invoice) {
      setForm({
        senderStreetAddress: invoice.senderStreetAddress,
        senderCity: invoice.senderCity,
        senderPostCode: invoice.senderPostCode,
        senderCountry: invoice.senderCountry,
        clientName: invoice.clientName,
        clientEmail: invoice.clientEmail,
        clientStreetAddress: invoice.clientStreetAddress,
        clientCity: invoice.clientCity,
        clientPostCode: invoice.clientPostCode,
        clientCountry: invoice.clientCountry,
        projectDescription: invoice.projectDescription,
      });

      setStartDate(invoice.startDate);
      setSelectedOption(invoice.selectedOption);
      setItemFields(invoice.itemFields);
    } else {
      return;
    }
  }, [id, invoice]);

  const { mutate: createInvoice, isPending } = useCreateInvoice(
    form,
    selectedOption,
    startDate,
    itemFields
  );

  const { mutate: editInvoice, isPending: isEditing } = useEditInvoice(
    invoice?.invoiceId,
    form,
    selectedOption,
    startDate,
    itemFields
  );
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
    let newField = { itemName: "", qty: 0, price: 0, total: 0 };
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

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      editInvoice();
    }
    return;
  };

  return (
    <div className="lg:w-[719px] w-[616px] dark:bg-[#141625] hidden no-scrollbar md:flex z-10 fixed overflow-y-scroll bg-white h-screen">
      <div className="lg:ml-[159px] md:ml-[56px]  mt-[120px] lg:mt-[59px]">
        <h1 className="font-bold dark:text-white text-2xl text-neutral tracking-[-0.5px]">
          New invoice
        </h1>
        <form className="mt-[46px] dark:text-white w-[504px] text-left">
          <BillFrom
            form={form}
            errors={errors}
            handleFormInputChange={handleFormInputChange}
          />
          <div className="flex flex-col mt-12 gap-6">
            <h2 className="text-base font-bold text-[#7C5DFA]">Bill To</h2>
            <BillTo
              form={form}
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
              projectDescription={form.projectDescription}
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
            {!JSON.stringify(errors) && (
              <>
                <p className="text-sm text-error">
                  -All fields must be filled <br />
                  -an item must be added
                </p>
              </>
            )}
            {!id && (
              <ReceiptButtons
                isPending={isPending}
                handleSubmit={handleSubmit}
              />
            )}
            {id && (
              <EditButtons isEditing={isEditing} handleEdit={handleEdit} />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceForm;
