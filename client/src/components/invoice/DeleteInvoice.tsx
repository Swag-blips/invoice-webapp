import { useParams } from "react-router-dom";

type Props = {
  handleClose: () => void;
};
const DeleteInvoice = ({ handleClose }: Props) => {
  const { id } = useParams();
  return (
    <div className=" flex items-center justify-center w-screen absolute top-0 left-0  bottom-0 ">
      <div className="bg-white pt-[50px] z-50 w-[480px] h-[249px] px-8 rounded-[8px]">
        <h1 className="text-2xl text-neutral font-bold">Confirm Deletion</h1>
        <p className="text-[#888EB0] text-sm font-medium mt-[12px]">
          Are you sure you want to delete invoice #{id}? This action cannot be
          undone.
        </p>

        <div className="flex items-end mt-[14px]  gap-2 justify-end">
          <button
            onClick={handleClose}
            className="bg-[#F9FAFE] dark:bg-[#252945] text-primary-text text-base font-bold h-12 px-6 rounded-3xl tracking-tight text-center"
          >
            cancel
          </button>
          <button className="bg-error text-white text-base font-bold rounded-3xl h-12 px-6">
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteInvoice;
