import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../helpers/Spinner";
import { useDeleteInvoice } from "../../hooks/useMutateInvoice";

type Props = {
  handleClose: () => void;
};
const DeleteInvoice = ({ handleClose }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { mutateAsync: deleteInvoice, isPending } = useDeleteInvoice(id);
  const handleDelete = async () => {
    const toDelete = await deleteInvoice();

    if (toDelete) {
      navigate("/");
    }
  };

  return (
    <div className=" flex items-center justify-center w-screen fixed top-0 left-0  bottom-0 ">
      <div className="bg-white dark:bg-[#1E2139] pt-[50px] z-50 w-[327px] md:w-[480px] h-[249px] px-8 rounded-[8px]">
        <h1 className="text-2xl dark:text-white text-neutral font-bold">
          Confirm Deletion
        </h1>
        <p className="text-[#888EB0] text-sm font-medium mt-[12px]">
          Are you sure you want to delete invoice #{id}? This action cannot be
          undone.
        </p>

        <div className="flex items-end mt-[14px] gap-2 justify-end">
          <button
            onClick={handleClose}
            className="bg-[#F9FAFE] dark:bg-[#252945] text-primary-text text-base font-bold h-12 px-6 rounded-3xl tracking-tight text-center"
          >
            cancel
          </button>
          <button
            onClick={handleDelete}
            className="bg-error text-white text-base font-bold rounded-3xl h-12 px-6"
          >
            {isPending ? <Spinner /> : "delete"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteInvoice;
