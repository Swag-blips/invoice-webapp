import { FormErrors, FormType } from "../../types";

type Props = {
  form: FormType;
  handleFormInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormErrors | null;
};

const BillFrom = ({ form, errors, handleFormInputChange }: Props) => {
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
          <p className="text-[10px] tracking-[-0.21px] text-error">
            {errors?.clientStreetAddress && errors.clientStreetAddress}
          </p>
        </div>
        <input
          type="text"
          name="senderStreetAddress"
          id="senderStreetAddress"
          value={form.senderStreetAddress}
          className={` ${
            errors?.senderStreetAddress
              ? "error-invoice-input-style"
              : "invoice-input-style"
          }`}
          onChange={handleFormInputChange}
        />
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-center gap-6 w-full ">
        <div className="w-full md:w-auto flex items-center gap-6">
          <div className="flex flex-col md:w-[152px] w-[50%] gap-2">
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
              value={form.senderCity}
              className={` ${
                errors?.senderCity
                  ? "error-invoice-input-style"
                  : "invoice-input-style"
              }`}
              onChange={handleFormInputChange}
            />
          </div>
          <div className="flex w-[50%] md:w-[152px] flex-col gap-2">
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
              value={form.senderPostCode}
              className={` ${
                errors?.senderPostCode
                  ? "error-invoice-input-style"
                  : "invoice-input-style"
              }`}
              onChange={handleFormInputChange}
            />
          </div>
        </div>
        <div className="flex  basis-full md:basis-auto w-[152px] flex-col gap-2">
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
            value={form.senderCountry}
            className={`${
              errors?.senderCountry
                ? "error-invoice-input-style "
                : "invoice-input-style "
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
