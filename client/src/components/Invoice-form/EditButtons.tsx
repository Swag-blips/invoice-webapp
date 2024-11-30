import Spinner from "../../helpers/Spinner";

type Props = {
  handleEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isEditing: boolean;
};

const EditButtons = ({ isEditing, handleEdit }: Props) => {
  return (
    <div className="flex items-end pr-6 pb-5 shadow-[rgba(0,0,12,0.5)_2px_5px_60px_0px] h-[91px] md:shadow-none md:bg-none md:h-0 dark:shadow-none dark:bg-[#1E2139] bg-white mt-10 md:mt-20 gap-2 justify-end">
      <button className="bg-[#F9FAFE] dark:bg-[#252945]  text-primary-text text-base font-bold h-12 px-6 rounded-3xl tracking-tight text-center">
        cancel
      </button>
      <button
        onClick={handleEdit}
        className="bg-[#7C5DFA] text-white text-base font-bold rounded-3xl h-12 px-6"
      >
        {isEditing ? <Spinner /> : "save changes"}
      </button>
    </div>
  );
};

export default EditButtons;
