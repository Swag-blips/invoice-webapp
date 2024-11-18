import React from "react";
import arrowLeft from "/assets/icon-arrow-left.svg";
const Receipt = () => {
  return (
    <div className="flex md:w-[640px] flex-col lg:w-[730px]">
      <div className="flex gap-6 items-center ">
        <img src={arrowLeft} alt="arrow-left" className=" object-contain" />
        <p className="text-[#0C0E16] tracking-[-0.25px] font-bold">Go back</p>
      </div>

      <div className="w-auto rounded-lg mt-8 justify-between flex items-center bg-white px-8 shadow-sm h-[88px]">
        <div className="flex items-center gap-5">
          <p className="font-medium text-[13px] leading-[0.1px] text-[#858BB2]">
            Status
          </p>
          <div className="flex items-center justify-center gap-2 w-[104px] bg-[#FF8F00] rounded-md bg-opacity-[5.71%] h-10">
            <div className="w-2 h-2 bg-[#FF8F00] rounded-full" />
            <p className="text-[#FF8F00] font-bold tracking-[-0.25px] opacity-100">
              Paid
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-12 px-6 rounded-[24px] bg-[#F9FAFE] font-bold tracking-[-0.25px] text-[#7E88C3]">
            Edit
          </button>
          <button className="h-12 px-6 rounded-[24px]  font-bold tracking-[-0.25px]  bg-[#EC5757] text-white">
            Delete
          </button>
          <button className="bg-[#7C5DFA] h-12 px-6 rounded-[24px] font-bold tracking-[-0.25px]  text-white ">
            Mark as paid
          </button>
        </div>
      </div>

      <div className="bg-white p-12 mt-6">
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
