type Props = {
  handleFormInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  senderStreetAddress: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;
};

const BillFrom = ({
  handleFormInputChange,
  senderCity,
  senderCountry,
  senderPostCode,
  senderStreetAddress,
}: Props) => {
  return (
    <div className="flex flex-col  gap-6">
      <h2 className="text-base font-bold text-[#7C5DFA]">Bill From</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="senderStreetAddress" className="label-text">
          Street Address
        </label>
        <input
          type="text"
          name="senderStreetAddress"
          id="senderStreetAddress"
          className="receipt-input-style"
        />
      </div>

      <div className="flex items-center gap-6 w-full ">
        <div className="flex flex-col w-[152px] gap-2">
          <label htmlFor="senderCity" className="label-text">
            City
          </label>
          <input
            type="text"
            name="senderCity"
            id="senderCity"
            className="receipt-input-style"
          />
        </div>
        <div className="flex  w-[152px] flex-col gap-2">
          <label htmlFor="senderPostCode" className="label-text">
            Post code
          </label>
          <input
            type="text"
            name="senderPostCode"
            id="senderPostCode"
            className="receipt-input-style"
          />
        </div>
        <div className="flex  w-[152px] flex-col gap-2">
          <label htmlFor="senderCountry" className="label-text">
            Country
          </label>
          <input
            type="text"
            className="receipt-input-style"
            name="senderCountry"
            id="senderCountry"
          />
        </div>
      </div>
    </div>
  );
};

export default BillFrom;
