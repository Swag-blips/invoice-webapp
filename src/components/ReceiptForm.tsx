const ReceiptForm = () => {
  return (
    <div className="w-[719px] dark:bg-[#141625] hidden no-scrollbar lg:flex z-10 absolute  overflow-y-auto bg-white h-screen ">
      <div className="ml-[159px] mt-[59px]">
        <h1 className="font-bold dark:text-white text-[24px] text-[#0C0E16] tracking-[-0.5px]">
          New invoice
        </h1>

        <form className="mt-[46px] w-[504px] text-left">
          <div className="flex flex-col  gap-6">
            <h2 className="text-[15px] font-bold text-[#7C5DFA]">Bill From</h2>
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
                  id="postCode0"
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
          </div>
          <div className="flex flex-col mt-12 gap-6">
            <h2 className="text-[15px] font-bold text-[#7C5DFA]">Bill To</h2>
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
                  id="postCode0"
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

            <div className="flex gap-6 mt-12 items-center">
              <div className="flex  w-[240px] flex-col gap-2">
                <label htmlFor="invoiceDate" className="label-text">
                  Invoice Date
                </label>
                <input
                  type="text"
                  className="receipt-input-style"
                  name="invoiceDate"
                  id="invoiceDate"
                />
              </div>
              <div className="flex  w-[240px] flex-col gap-2">
                <label htmlFor="paymentTerms" className="label-text">
                  Payment Terms
                </label>
                <input
                  type="text"
                  className="receipt-input-style"
                  name="paymentTerms"
                  id="paymentTerms"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="projectDescription" className="label-text">
                Project Description
              </label>
              <input
                type="text"
                name="projectDescription"
                id="projectDescription"
                className="receipt-input-style"
              />
            </div>

            <div>
              <h2 className="text-[#777F98] font-bold text-[18px]">
                Item List
              </h2>

              <div className="grid  mt-[13px] grid-cols-2">
                <div>
                  <h3 className="label-text">Item Name</h3>
                </div>

                <div className="flex items-center gap-6">
                  <h3 className="label-text">Qty</h3>
                  <h3 className="label-text">Price</h3>
                  <h3 className="label-text">Total</h3>
                </div>
              </div>

              <button className="w-full dark:bg-[#252945] rounded-3xl font-bold mt-4 h-12 bg-[#F9FAFE] text-[#7E88C3]">
                + Add new item
              </button>
            </div>
            <div className="flex mb-8 items-center  mt-12 justify-between">
              <button className="bg-[#F9FAFE] text-[#7E88C3] font-bold w-[96px] rounded-3xl h-12">
                Discard
              </button>

              <div className="flex items-center gap-2">
                <button className="bg-[#373B53] h-12 px-6 rounded-3xl text-[#888EB0] font-bold">
                  Save as Draft
                </button>
                <button className="bg-[#7C5DFA] h-12 px-6 rounded-3xl text-white font-bold">
                  Save & send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReceiptForm;
