import React from "react";
import { FormErrors } from "../../types";

type Props = {
  handleFormInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormErrors | null;
};

const BillTo = ({ errors, handleFormInputChange }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label
            className={` ${
              errors?.clientName ? "error-label-text" : "label-text"
            }`}
            htmlFor="clientName"
          >
            Client's name
          </label>
          <p className="text-[10px] tracking-[-0.21px] text-[#EC5757]">
            {errors?.clientName && errors.clientName}
          </p>
        </div>
        <input
          type="text"
          name="clientName"
          id="clientName"
          className={` ${
            errors?.clientName
              ? "error-invoice-input-style"
              : "invoice-input-style"
          }`}
          onChange={handleFormInputChange}
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            className={` ${
              errors?.clientEmail ? "error-label-text" : "label-text"
            }`}
            htmlFor="clientEmail"
          >
            Client's email
          </label>
          <p className="text-[10px] tracking-[-0.21px] text-[#EC5757]">
            {errors?.clientEmail && errors.clientEmail}
          </p>
        </div>
        <input
          type="email"
          name="clientEmail"
          id="clientEmail"
          className={` ${
            errors?.clientEmail
              ? "error-invoice-input-style"
              : "invoice-input-style"
          }`}
          onChange={handleFormInputChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="clientStreetAddress"
            className={` ${
              errors?.clientStreetAddress ? "error-label-text" : "label-text"
            }`}
          >
            Street Address
          </label>
          <p className="text-[10px] tracking-[-0.21px] text-[#EC5757]">
            {errors?.clientStreetAddress && errors.clientStreetAddress}
          </p>
        </div>
        <input
          type="text"
          name="clientStreetAddress"
          id="clientStreetAddress"
          className={` ${
            errors?.clientStreetAddress
              ? "error-invoice-input-style"
              : "invoice-input-style"
          }`}
          onChange={handleFormInputChange}
        />
      </div>
      <div className="flex items-center gap-6 w-full ">
        <div className="flex flex-col w-[152px] gap-2">
          <label
            htmlFor="clientCity"
            className={` ${
              errors?.clientCity ? "error-label-text" : "label-text"
            }`}
          >
            City
          </label>

          <input
            type="text"
            name="clientCity"
            id="clientCity"
            className={` ${
              errors?.clientCity
                ? "error-invoice-input-style"
                : "invoice-input-style"
            }`}
            onChange={handleFormInputChange}
          />
        </div>
        <div className="flex  w-[152px] flex-col gap-2">
          <label
            htmlFor="clientPostCode"
            className={` ${
              errors?.clientPostCode ? "error-label-text" : "label-text"
            }`}
          >
            Post code
          </label>
          <input
            type="text"
            name="clientPostCode"
            id="clientPostCode"
            className={` ${
              errors?.clientPostCode
                ? "error-invoice-input-style"
                : "invoice-input-style"
            }`}
            onChange={handleFormInputChange}
          />
        </div>
        <div className="flex  w-[152px] flex-col gap-2">
          <label
            htmlFor="clientCountry"
            className={` ${
              errors?.clientCountry ? "error-label-text" : "label-text"
            }`}
          >
            Country
          </label>
          <input
            type="text"
            className={` ${
              errors?.clientCountry
                ? "error-invoice-input-style"
                : "invoice-input-style"
            }`}
            name="clientCountry"
            id="clientCountry"
            onChange={handleFormInputChange}
          />
        </div>
      </div>
    </>
  );
};

export default BillTo;
