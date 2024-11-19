import Invoices from "./Invoices";
import arrowDown from "/assets/icon-arrow-down.svg";
import plus from "/assets/icon-plus.svg";

export default function Main() {
  return (
    <main className="flex  lg:items-start mt-8 lg:mt-[78px] w-full">
      <div className="flex items-center w-full  lg:w-[730px] mx-6 md:mx-8 lg:mx-0 justify-center">
        <div className="flex flex-col w-full ">
          <div className=" flex items-center justify-between w-[inherit]">
            <div className="flex flex-col ">
              <h2 className="font-bold text-[24px] tracking-[-0.75px] lg:text-[36px] text-[#0C0E16] lg:tracking-[-1.13px] text-left">
                Invoices
              </h2>
              <p className="text-[13px] hidden lg:inline-flex text-left tracking-[-0.1px] text-[#888EB0]">
                There are 7 total invoices
              </p>
              <p className="lg:hidden  text-left tracking-[-0.1px] text-[13px]  text-[#888EB0] ">
                7 Invoices
              </p>
            </div>
            <div className="flex items-center gap-4 lg:gap-10">
              <div className="flex items-center cursor-pointer gap-[14px]">
                <p className="text-[15px] text-left hidden lg:inline-flex font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16] ">
                  Filter by status
                </p>
                <p className="lg:hidden text-[15px] text-left font-bold leading-[15px] tracking-[-0.25px] text-[#0C0E16]">
                  Filter
                </p>
                <img src={arrowDown} alt="arrow-down icon" />
              </div>

              <button className="w-[150px] text-white hidden lg:flex gap-4  pl-2 h-12 rounded-[24px] bg-[#7C5DFA] font-bold">
                <div className="bg-white mt-2 h-8 w-8 flex items-center justify-center rounded-full">
                  <img src={plus} alt="plus" />
                </div>
                <p className="mt-[14px]"> New invoice</p>
              </button>
              <button className="w-auto px-[15px] lg:hidden text-white flex gap-4  pl-2 h-12 rounded-[24px] bg-[#7C5DFA] font-bold">
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
