import { useState } from "react";
import ReceiptButtons from "./ReceiptButtons";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceDate from "./InvoiceDate";
import ItemList from "./ItemList";
import ProjectDescription from "./ProjectDescription";
import { InputFields } from "../../types";

const ReceiptForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [inputFields, setInputFields] = useState<InputFields[]>([
    {
      itemName: "",
      qty: 0,
      price: 0,
      total: 0,
    },
  ]);

  const toggle = () => {
    setIsOpen(!isOpen);
    return;
  };
  const handleSelectedOption = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    return;
  };

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;

    data[index].total = data[index].qty * data[index].price;
    setInputFields(data);
  };

  const addFields = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let newField = { itemName: "", qty: 0, price: 0, total: 0 };
    setInputFields([...inputFields, newField]);
  };

  const removeFields = (index: number) => {
    if (index === 0) return;
    setInputFields((prevInput) =>
      prevInput.filter((_, indx) => indx !== index)
    );
  };
  return (
    <div className="lg:w-[719px] w-[616px] dark:bg-[#141625] hidden no-scrollbar md:flex z-10 absolute  overflow-y-scroll bg-white h-screen">
      <div className="lg:ml-[159px] md:ml-[56px]  mt-[120px] lg:mt-[59px]">
        <h1 className="font-bold dark:text-white text-[24px] text-neutral tracking-[-0.5px]">
          New invoice
        </h1>
        <form className="mt-[46px] dark:text-white w-[504px] text-left">
          <BillFrom />
          <div className="flex flex-col mt-12 gap-6">
            <h2 className="text-base font-bold text-[#7C5DFA]">Bill To</h2>
            <BillTo />
            <InvoiceDate
              handleSelectedOption={handleSelectedOption}
              selectedOption={selectedOption}
              toggle={toggle}
              startDate={startDate}
              setStartDate={setStartDate}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <ProjectDescription />
            <div>
              <h2 className="text-[#777F98] font-bold text-[18px]">
                Item List
              </h2>
              <ItemList
                inputFields={inputFields}
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
            <ReceiptButtons />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReceiptForm;
