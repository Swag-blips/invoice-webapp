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
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2 ">
            <p className="text-[#0C0E16] text-[15px] font-bold tracking-[-0.25px]">
              <span className="text-[#7E88C3]">#</span>
              XM9141
            </p>
            <p className="font-medium text-[13px] text-left text-[#7E88C3]">
              Graphic design
            </p>
          </div>
          <div className="flex text-[#7E88C3] tracking-[-0.1px] text-[13px] font-medium flex-col  text-right ">
            <p>19 union terrace</p>
            <p>London</p>
            <p>E1 3EZ</p>
            <p>United kingdom</p>
          </div>
        </div>
        <div className="flex items-start gap-[117px]">
          <div className="flex flex-col justify-center gap-8">
            <div className=" flex flex-col gap-2">
              <p className="text-[#7E88C3] text-[13px] font-medium">
                Invoice Date
              </p>
              <p className="font-bold text-[#0C0E16] text-[15px] tracking-[-0.25px]">
                21 Aug 2021
              </p>
            </div>
            <div className=" flex flex-col gap-2">
              <p className="text-[#7E88C3] text-[13px] font-medium">
                Payment due
              </p>
              <p className="font-bold text-[#0C0E16] text-[15px] tracking-[-0.25px]">
                20 Sep 2021
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#7E88C3] text-[13px] font-medium">Bill To</p>
            <p className="font-bold mt-[13px] text-[#0C0E16] text-[15px] tracking-[-0.25px]">
              Alex Grim
            </p>
            <div className="flex mt-2 text-[#7E88C3] tracking-[-0.1px] text-[13px] font-medium flex-col  text-left ">
              <p>19 union terrace</p>
              <p>London</p>
              <p>E1 3EZ</p>
              <p>United kingdom</p>
            </div>
          </div>

          <div className="flex flex-col ">
            <p className="text-[#7E88C3] tracking-[-0.1px] text-[13px] font-medium">
              Sent to
            </p>
            <p className="font-bold  text-[#0C0E16] text-[15px] tracking-[-0.25px]">
              alexgrim@mail.com
            </p>
          </div>
        </div>

        <div className="w-full rounded-r-[8px] rounded-l-[8px] mt-12 p-8 bg-[#F9FAFE]">
          <div className="grid grid-cols-2">
            <div className=" flex flex-col gap-8">
              <p className="text-[#7E88C3]">Item Name</p>
              <p className="text-[#0C0E16] font-bold text-[15px]">
                Banner Design
              </p>
              <p className="text-[#0C0E16] font-bold text-[15px]">
                Email Design
              </p>
            </div>
            <div className="flex gap-[70px]">
              <div className=" flex flex-col items-center gap-8">
                <h1 className="text-[16px] text-[#7E88C3] font-medium tracking=[-0.1px] text-left">
                  Qty
                </h1>
                <p className="font-bold text-[15px] text-[#7E88C3] tracking-[-0.25px] text-left">
                  1
                </p>
                <p className="font-bold text-[15px] text-[#7E88C3] tracking-[-0.25px] text-left">
                  2
                </p>
              </div>
              <div className=" flex flex-col items-center gap-8">
                <h1 className="text-[16px] text-[#7E88C3] font-medium tracking=[-0.1px] text-left">
                  Price
                </h1>
                <p className="font-bold  text-[15px] text-[#7E88C3] tracking-[-0.25px] text-right">
                  £ 156.00
                </p>
                <p className="font-bold text-[15px] text-[#7E88C3] tracking-[-0.25px] text-right">
                  £ 200.00
                </p>
              </div>
              <div className=" flex flex-col items-center gap-8">
                <h1 className="text-[16px] text-[#7E88C3] font-medium tracking=[-0.1px] text-right">
                  Total
                </h1>
                <p className="font-bold text-[15px] text-[#0C0E16] tracking-[-0.25px] text-right">
                  £ 156.00
                </p>
                <p className="font-bold text-[15px] text-[#0C0E16] tracking-[-0.25px] text-right">
                  £ 400.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#373B53] flex items-center justify-between w-full p-8 rounded-br-[8px] rounded-bl-[8px]">
          <p className="text-white">Amount Due</p>
          <p className="text-white font-bold text-2xl tracking-[-0.5px] text-right">
            £ 556.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
