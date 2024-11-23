import { useState } from "react";
import ReceiptButtons from "./home/ReceiptButtons";
import chevronDown from "/assets/icon-arrow-down.svg";
import { options } from "../utils/options";
import iconCalendar from "/assets/icon-calendar.svg";
import DatePicker from "react-datepicker";
import deleteIcon from "/assets/icon-delete.svg";

import "react-datepicker/dist/react-datepicker.css";

interface InputFields {
  [key: string]: {};
  itemName: string;
  qty: number;
  price: number;
  total: number;
}
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

  // type FormType = { [name: ]: string };
  const toggle = () => setIsOpen(!isOpen);

  const handleSelectedOption = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
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

  return (
    <div className="lg:w-[719px] w-[616px] dark:bg-[#141625] hidden no-scrollbar md:flex z-10 absolute  overflow-y-scroll bg-white h-screen">
      <div className="lg:ml-[159px] md:ml-[56px]  mt-[120px] lg:mt-[59px]">
        <h1 className="font-bold dark:text-white text-[24px] text-neutral tracking-[-0.5px]">
          New invoice
        </h1>

        <form className="mt-[46px] dark:text-white w-[504px] text-left">
          <div className="flex flex-col  gap-6">
            <h2 className="text-base font-bold text-[#7C5DFA]">Bill From</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="streetAddress" className="label-text">
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                className="receipt-input-style"
              />
            </div>

            <div className="flex items-center gap-6 w-full ">
              <div className="flex flex-col w-[152px] gap-2">
                <label htmlFor="city" className="label-text">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="receipt-input-style"
                />
              </div>
              <div className="flex  w-[152px] flex-col gap-2">
                <label htmlFor="postCode" className="label-text">
                  Post code
                </label>
                <input
                  type="text"
                  name="postCode"
                  id="postCode"
                  className="receipt-input-style"
                />
              </div>
              <div className="flex  w-[152px] flex-col gap-2">
                <label htmlFor="country" className="label-text">
                  Country
                </label>
                <input
                  type="text"
                  className="receipt-input-style"
                  name="country"
                  id="country"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-12 gap-6">
            <h2 className="text-base font-bold text-[#7C5DFA]">Bill To</h2>
            <div className="flex flex-col gap-2">
              <label className="label-text" htmlFor="clientName">
                Client's name
              </label>
              <input
                type="text"
                name="clientName"
                id="clientName"
                className="receipt-input-style"
              />
            </div>
            <div>
              <label className="label-text" htmlFor="clientEmail">
                Client's email
              </label>
              <input
                type="text"
                name="clientEmail"
                id="clientEmail"
                className="receipt-input-style"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="streetAddress" className="label-text">
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                id="streetAddress"
                className="receipt-input-style"
              />
            </div>
            <div className="flex items-center gap-6 w-full ">
              <div className="flex flex-col w-[152px] gap-2">
                <label htmlFor="city" className="label-text">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="receipt-input-style"
                />
              </div>
              <div className="flex  w-[152px] flex-col gap-2">
                <label htmlFor="postCode" className="label-text">
                  Post code
                </label>
                <input
                  type="text"
                  name="postCode"
                  id="postCode"
                  className="receipt-input-style"
                />
              </div>
              <div className="flex  w-[152px] flex-col gap-2">
                <label htmlFor="country" className="label-text">
                  Country
                </label>
                <input
                  type="text"
                  className="receipt-input-style"
                  name="country"
                  id="country"
                />
              </div>
            </div>

            <div className="flex gap-6 mt-12 items-center">
              <div className="flex  w-[240px] flex-col gap-2">
                <label htmlFor="invoiceDate" className="label-text">
                  Invoice Date
                </label>
                <div className="relative">
                  <DatePicker
                    selected={startDate}
                    className="receipt-input-style pl-6 font-bold "
                    onChange={(date) => setStartDate(date)}
                  />
                  <img
                    src={iconCalendar}
                    alt="calendar"
                    className="absolute right-14 translate-y-[-2rem]"
                  />
                </div>
              </div>
              <div className="flex  w-[240px] flex-col gap-2">
                <label htmlFor="paymentTerms" className="label-text">
                  Payment Terms
                </label>
                <div onClick={toggle} className="relative">
                  <input
                    type="text"
                    className="receipt-input-style dark:text-white  text-neutral font-bold pl-2"
                    value={selectedOption || "Net 30 Days"}
                    name="paymentTerms"
                    id="paymentTerms"
                    readOnly
                  />
                  <img
                    src={chevronDown}
                    alt="chevron-down"
                    className="absolute right-4 translate-y-[-1.5rem]"
                  />
                  {isOpen && (
                    <div className="w-[240px] bg-white dark:bg-[#252945] rounded-lg absolute top-16  dark:drop-shadow-none drop-shadow-[0_10px_20px_rgba(72,84,159,0.25)] ">
                      <ul className="">
                        {options.map((option) => (
                          <>
                            <li
                              key={option}
                              onClick={handleSelectedOption(option)}
                              className="text-neutral mt-4 font-bold tracking-[0.25px] dark:text-white mb-4 ml-6 hover:text-[#7C5DFA] text-base"
                            >
                              {option}
                            </li>
                            <div
                              className={`h-[1px] last:hidden dark:bg-[#1E2139] w-full bg-[#DFE3FA]`}
                            />
                          </>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="projectDescription" className="label-text">
                Project Description
              </label>
              <input
                type="text"
                name="projectDescription"
                id="projectDescription"
                className="receipt-input-style"
              />
            </div>

            <div>
              <h2 className="text-[#777F98] font-bold text-[18px]">
                Item List
              </h2>

              <div className="grid gap-4  mt-[13px] grid-cols-2">
                {inputFields.map((input, index) => (
                  <>
                    <div key={index}>
                      <label htmlFor="itemName" className="label-text">
                        Item Name
                      </label>
                      <input
                        className="receipt-input-style"
                        name="itemName"
                        id="itemName"
                        value={input.itemName}
                        onChange={(event) => handleFormChange(index, event)}
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <label htmlFor="qty" className="label-text">
                          Qty
                        </label>
                        <input
                          name="qty"
                          id="qty"
                          className="  outline-none text-base font-bold pl-2 border-[#DFE3FA] border h-12 rounded-[4px] focus:border-[#9277FF] w-[46px]"
                          value={input.qty}
                          onChange={(event) => handleFormChange(index, event)}
                        />
                      </div>

                      <div>
                        <label htmlFor="price" className="label-text">
                          Price
                        </label>
                        <input
                          name="price"
                          id="price"
                          className="receipt-input-style"
                          value={input.price}
                          onChange={(event) => handleFormChange(index, event)}
                        />
                      </div>

                      <div>
                        <label htmlFor="total" className="label-text">
                          Total
                        </label>
                        <input
                          name="total"
                          id="total"
                          className="font-bold text-[#888EB0] w-full outline-none h-12 "
                          value={input.total}
                          onChange={(event) => handleFormChange(index, event)}
                          readOnly
                        />
                      </div>

                      <img src={deleteIcon} alt="garbage-image" />
                    </div>
                  </>
                ))}
              </div>

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
