const ReceiptButtons = () => {
  return (
    <div className="flex bg-white md:bg-none px-6 md:px-0  py-6 md:py-0 mb-8 items-center  mt-12 justify-between">
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
  );
};

export default ReceiptButtons;
