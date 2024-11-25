import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { options } from "../../utils/options";
import iconCalendar from "/assets/icon-calendar.svg";
import chevronDown from "/assets/icon-arrow-down.svg";
type Props = {
  toggle: () => void;
  handleSelectedOption: (option: string) => () => void;
  selectedOption: string | null;
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const InvoiceDate = ({
  toggle,
  handleSelectedOption,
  selectedOption,
  startDate,
  setStartDate,
  isOpen,
}: Props) => {
  return (
    <div className="flex gap-6 mt-12 items-center">
      <div className="flex  w-[240px] flex-col gap-2">
        <label htmlFor="invoiceDate" className="label-text">
          Invoice Date
        </label>
        <div className="relative">
          <DatePicker
            selected={startDate}
            className="receipt-input-style pl-6 font-bold "
            onChange={(date) => setStartDate(date)}
          />
          <img
            src={iconCalendar}
            alt="calendar"
            className="absolute right-14 translate-y-[-2rem]"
          />
        </div>
      </div>
      <div className="flex  w-[240px] flex-col gap-2">
        <label htmlFor="paymentTerms" className="label-text">
          Payment Terms
        </label>
        <div onClick={toggle} className="relative">
          <input
            type="text"
            className="receipt-input-style dark:text-white  text-neutral font-bold pl-2"
            value={selectedOption || "Net 30 Days"}
            name="paymentTerms"
            id="paymentTerms"
            readOnly
          />
          <img
            src={chevronDown}
            alt="chevron-down"
            className="absolute right-4 translate-y-[-1.5rem]"
          />
          {isOpen && (
            <div className="w-[240px] bg-white dark:bg-[#252945] rounded-lg absolute top-16  dark:drop-shadow-none drop-shadow-[0_10px_20px_rgba(72,84,159,0.25)] ">
              <ul className="">
                {options.map((option) => (
                  <>
                    <li
                      key={option}
                      onClick={handleSelectedOption(option)}
                      className="text-neutral mt-4 font-bold tracking-[0.25px] dark:text-white mb-4 ml-6 hover:text-[#7C5DFA] text-base"
                    >
                      {option}
                    </li>
                    <div
                      className={`h-[1px] last:hidden dark:bg-[#1E2139] w-full bg-[#DFE3FA]`}
                    />
                  </>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoiceDate;