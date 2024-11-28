import { useState } from "react";
import Invoices from "./Invoices";
import arrowDown from "/assets/icon-arrow-down.svg";
import plus from "/assets/icon-plus.svg";
import FilterInvoice from "./FilterInvoice";
import useReceiptStore from "../../store/receiptStore";

export default function Main() {
  const [openFilter, setOpenFilter] = useState(false);

  const { setIsOpen } = useReceiptStore();

  return (
    <main className="flex relative  lg:items-start mt-8 lg:mt-[78px] w-full">
      <div className="flex items-center w-full  lg:w-[730px] mx-6 md:mx-8 lg:mx-0 justify-center">
        <div className="flex flex-col w-full ">
          <div className=" flex items-center justify-between w-[inherit]">
            <div className="flex flex-col ">
              <h2 className="font-bold text-2xl dark:text-white tracking-[-0.75px] lg:text-[36px] text-neutral lg:tracking-[-1.13px] text-left">
                Invoices
              </h2>
              <p className="text-sm hidden lg:inline-flex text-left tracking-[-0.1px] text-[#888EB0]">
                There are 7 total invoices
              </p>
              <p className="lg:hidden  text-left tracking-[-0.1px] text-sm dark:text-[#DFE3FA] text-[#888EB0] ">
                7 Invoices
              </p>
            </div>
            <div className="flex  relative  items-center gap-4 lg:gap-10">
              <div
                onClick={() => setOpenFilter((prevFilter) => !prevFilter)}
                className="flex items-center cursor-pointer gap-[14px]"
              >
                <p className="text-base text-left dark:text-white hidden lg:inline-flex font-bold leading-[15px] tracking-tight text-neutral ">
                  Filter by status
                </p>
                <p className="lg:hidden text-base dark:text-white  text-left font-bold leading-[15px] tracking-tight text-neutral">
                  Filter
                </p>
                <img src={arrowDown} alt="arrow-down icon" />
              </div>
              {openFilter && <FilterInvoice />}

              <button
                onClick={setIsOpen}
                className="w-[150px] text-white hidden md:flex gap-4  pl-2 h-12 rounded-3xl hover:bg-[#9277FF] bg-[#7C5DFA] font-bold"
              >
                <div className="bg-white mt-2 h-8 w-8 flex items-center justify-center rounded-full">
                  <img src={plus} alt="plus" />
                </div>
                <p className="mt-[14px]"> New invoice</p>
              </button>
              <button className="w-auto px-[15px] md:hidden text-white flex gap-4  pl-2 h-12 rounded-3xl bg-[#7C5DFA] font-bold">
                <div className="bg-white mt-2 h-8 w-8 flex items-center justify-center rounded-full">
                  <img src={plus} alt="plus" />
                </div>
                <p className="mt-[14px]"> New </p>
              </button>
            </div>
          </div>
          <Invoices />
        </div>
      </div>
    </main>
  );
}
