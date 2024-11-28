type Props = {
  handleEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const EditButtons = ({ handleEdit }: Props) => {
  return (
    <div className="flex items-end  gap-2 justify-end">
      <button className="bg-[#F9FAFE] dark:bg-[#252945] text-primary-text text-base font-bold h-12 px-6 rounded-3xl tracking-tight text-center">
        cancel
      </button>
      <button
        onClick={handleEdit}
        className="bg-[#7C5DFA] text-white text-base font-bold rounded-3xl h-12 px-6"
      >
        save changes
      </button>
    </div>
  );
};

export default EditButtons;
