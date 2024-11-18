import arrowRight from "/assets/icon-arrow-right.svg";

const Invoices = () => {
  return (
    <div className="bg-white cursor-pointer shadow-sm rounded-[8px] flex items-center justify-between w-full mt-16 px-8 h-[72px]">
      <div className="flex items-center gap-10">
        <p className="text-[#0C0E16] font-bold tracking-[-0.25px]">
          <span className="text-[#7E88C3]">#</span>RT3080
        </p>

        <p className="text-[#7E88C3] tracking-[0.1px] text-[13px]">
          <span className="text-[#888EB0]">Due </span> 19 Aug 2021
        </p>
        <p className="text-[#858BB2] tracking-[0.1px] text-[13px]">
          Jensen huang
        </p>
      </div>

      <div className="flex items-center gap-10 justify-center">
        <p className="tetx-[15px] font-bold text-[#0C0E16] leading-[24px]">
          £ 1,800.90
        </p>
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center gap-2 w-[104px] bg-[#33D69F] bg-opacity-[5.71%] h-10">
            <div className="w-2 h-2 bg-[#33D69F] rounded-full" />
            <p className="text-[#33D69F] opacity-100">Paid</p>
          </div>
          <img src={arrowRight} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default Invoices;
