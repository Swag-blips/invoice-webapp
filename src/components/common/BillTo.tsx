import React from "react";

type Props = {};

const BillTo = (props: Props) => {
  return (
    <>
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
    </>
  );
};

export default BillTo;
