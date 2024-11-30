import Spinner from "../../helpers/Spinner";

type Props = {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleMarkAsDraft: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isPending: boolean;
  isSaving: boolean;
};
const ReceiptButtons = ({
  isSaving,
  handleSubmit,
  handleMarkAsDraft,
  isPending,
}: Props) => {
  return (
    <div className="flex dark:bg-[#1E2139]  dark:bg-transparent md:shadow-none bg-white shadow-[rgba(0,0,12,0.5)_2px_5px_60px_0px] md:bg-none  px-6 md:px-0  py-6 md:py-0 md:mb-8 items-center  mt-10 justify-between">
      <button className="bg-[#F9FAFE] text-[#7E88C3] font-bold w-[96px] rounded-3xl h-12">
        Discard
      </button>

      <div className="flex items-center gap-2">
        <button
          onClick={handleMarkAsDraft}
          className="bg-[#373B53] h-12 px-6 rounded-3xl text-[#888EB0] font-bold"
        >
          {isSaving ? <Spinner /> : "Save as Draft"}
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#7C5DFA] h-12 px-6 rounded-3xl text-white font-bold"
        >
          {isPending ? <Spinner /> : "Save & send"}
        </button>
      </div>
    </div>
  );
};

export default ReceiptButtons;
