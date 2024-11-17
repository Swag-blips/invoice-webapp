import arrowDown from "/assets/icon-arrow-down.svg";
import plus from "/assets/icon-plus.svg";

export default function Main() {
  return (
    <div className="flex items-center  justify-center">
      <div className="flex md:w-[600px] lg:w-[730px] justify-between ">
        <div className="flex flex-col gap-[6px]">
          <h2 className="font-bold text-[36px] text-[#0C0E16] tracking-[-1.13px] text-left">
            Invoices
          </h2>
          <p className="text-[13px]  text-left tracking-[-0.1px] text-[#888EB0]">
            There are 7 total invoices
          </p>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center cursor-pointer gap-[14px]">
            <p className="text-[15px] text-left font-bold leading-[15px[ tracking-[-0.25px] text-[#0C0E16] ">
              Filter by status
            </p>
            <img src={arrowDown} alt="arrow-down icon" />
          </div>

          <button className="w-[150px] text-white flex gap-4  pl-2 h-12 rounded-[24px] bg-[#7C5DFA] font-bold">
            <div className="bg-white mt-2 h-8 w-8 flex items-center justify-center rounded-full">
              <img src={plus} alt="plus" />
            </div>
            <p className="mt-[14px]"> New invoice</p>
          </button>
        </div>
      </div>
    </div>
  );
}
