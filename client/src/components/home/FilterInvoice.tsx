type Props = {
  setIsChecked: (isChecked: boolean) => void;
  isChecked: boolean;
  handleCheck: () => void;
};

const FilterInvoice = ({ setIsChecked, isChecked, handleCheck }: Props) => {
  console.log(isChecked);
  return (
    <div
      className="absolute flex flex-col gap-[15px] pl-6 py-6 top-14 left-[-40px]
     rounded-lg bg-white dark:bg-[#252945] dark:drop-shadow-none drop-shadow-[0_10px_20px_rgba(72,84,159,0.25)] w-[192px] "
    >
      <div className="flex items-center gap-[13px]">
        <input
          name="draft"
          checked={isChecked}
          type="checkbox"
          onChange={handleCheck}
          className=" custom-checked  w-4 h-4 dark:bg-[#1E2139] rounded-[2px] appearance-none bg-[#DFE3FA]"
        />
        <label
          htmlFor="draft"
          className="font-bold  dark:text-white tracking-[-0.25px] "
        >
          Draft
        </label>
      </div>
      <div className="flex items-center gap-[13px]">
        <input
          name="pending"
          id="pending"
          type="checkbox"
          className="w-4 h-4 dark:bg-[#1E2139] rounded-[2px] appearance-none bg-[#DFE3FA]"
        />
        <label
          htmlFor="pending"
          className="font-bold   dark:text-white tracking-[-0.25px] "
        >
          Pending
        </label>
      </div>
      <div className="flex items-center gap-[13px]">
        <input
          name="paid"
          type="checkbox"
          className="w-4 h-4 dark:bg-[#1E2139]   rounded-[2px] appearance-none bg-[#DFE3FA]"
        />
        <label
          htmlFor="paid"
          className="font-bold dark:text-white tracking-[-0.25px] "
        >
          Paid
        </label>
      </div>
    </div>
  );
};

export default FilterInvoice;
