import React from "react";

type Props = {
  handleFormInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clientStreetAddress: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
};

const BillTo = ({
  handleFormInputChange,
  clientStreetAddress,
  clientCity,
  clientCountry,
  clientPostCode,
}: Props) => {
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
        <label htmlFor="clientStreetAddress" className="label-text">
          Street Address
        </label>
        <input
          type="text"
          name="clientStreetAddress"
          id="clientStreetAddress"
          className="receipt-input-style"
        />
      </div>
      <div className="flex items-center gap-6 w-full ">
        <div className="flex flex-col w-[152px] gap-2">
          <label htmlFor="clientCity" className="label-text">
            City
          </label>
          <input
            type="text"
            name="clientCity"
            id="clientCity"
            className="receipt-input-style"
          />
        </div>
        <div className="flex  w-[152px] flex-col gap-2">
          <label htmlFor="clientPostCode" className="label-text">
            Post code
          </label>
          <input
            type="text"
            name="clientPostCode"
            id="clientPostCode"
            className="receipt-input-style"
          />
        </div>
        <div className="flex  w-[152px] flex-col gap-2">
          <label htmlFor="clientCountry" className="label-text">
            Country
          </label>
          <input
            type="text"
            className="receipt-input-style"
            name="clientCountry"
            id="clientCountry"
          />
        </div>
      </div>
    </>
  );
};

export default BillTo;
