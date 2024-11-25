import { BillFromErrors } from "../../types";

type Props = {
  handleFormInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: BillFromErrors | null;
};

const BillFrom = ({ errors, handleFormInputChange }: Props) => {
  return (
    <div className="flex flex-col  gap-6">
      <h2 className="text-base font-bold text-[#7C5DFA]">Bill From</h2>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="senderStreetAddress"
            className={`${
              errors?.senderStreetAddress ? "error-label-text" : "label-text "
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
          name="senderStreetAddress"
          id="senderStreetAddress"
          className={` ${
            errors?.senderStreetAddress
              ? "error-receipt-input-style"
              : "receipt-input-style"
          }`}
          onChange={handleFormInputChange}
        />
      </div>

      <div className="flex items-center gap-6 w-full ">
        <div className="flex flex-col w-[152px] gap-2">
          <label
            htmlFor="senderCity"
            className={` ${
              errors?.senderCity ? "error-label-text" : "label-text"
            }`}
          >
            City
          </label>
          <input
            type="text"
            name="senderCity"
            id="senderCity"
            className={` ${
              errors?.senderCity
                ? "error-receipt-input-style"
                : "receipt-input-style"
            }`}
            onChange={handleFormInputChange}
          />
        </div>
        <div className="flex  w-[152px] flex-col gap-2">
          <label
            htmlFor="senderPostCode"
            className={` ${
              errors?.senderPostCode ? "error-label-text" : "label-text"
            }`}
          >
            Post code
          </label>
          <input
            type="text"
            name="senderPostCode"
            id="senderPostCode"
            className={` ${
              errors?.senderPostCode
                ? "error-receipt-input-style"
                : "receipt-input-style"
            }`}
            onChange={handleFormInputChange}
          />
        </div>
        <div className="flex  w-[152px] flex-col gap-2">
          <label
            htmlFor="senderCountry"
            className={` ${
              errors?.senderCountry ? "error-label-text" : "label-text"
            }`}
          >
            Country
          </label>
          <input
            type="text"
            className={`${
              errors?.senderCountry
                ? "error-receipt-input-style "
                : "receipt-input-style "
            }`}
            name="senderCountry"
            id="senderCountry"
            onChange={handleFormInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BillFrom;
