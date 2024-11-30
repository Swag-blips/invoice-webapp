import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../helpers/Spinner";
import useReceiptStore from "../../store/receiptStore";

type Props = {
  handleClose: () => void;
};
const DeleteInvoice = ({ handleClose }: Props) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { setOpenDeleteModal } = useReceiptStore();

  const { mutate: deleteInvoice, isPending } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch(`${API_URL}/api/invoices/${id}`, {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
      } catch (error: any) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      toast.success("Invoice successfully deleted");
      setOpenDeleteModal();
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleDelete = () => {
    deleteInvoice();
  };

  return (
    <div className=" flex items-center justify-center w-screen absolute top-0 left-0  bottom-0 ">
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
