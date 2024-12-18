import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../helpers/Spinner";

type Props = {
  handleOpen: () => void;
  handleMarkAsPaid: () => void;
  isPending: boolean;
};

const SubmitComponent = ({
  handleOpen,
  handleMarkAsPaid,
  isPending,
}: Props) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/edit-invoice/${id}`);
  };

  return (
    <div className="flex md:hidden dark:bg-[#1E2139] bg-white px-6 ml-[-24px]  justify-center h-[90px] mt-14 items-center gap-2">
      <button
        onClick={handleNavigate}
        className="h-12 px-6 rounded-3xl dark:text-[#DFE3FA] dark:bg-[#252945] bg-[#F9FAFE] font-bold tracking-tight text-[#7E88C3]"
      >
        Edit
      </button>

      <button
        onClick={handleOpen}
        className="h-12 px-6 rounded-3xl  font-bold tracking-tight  bg-error text-white"
      >
        Delete
      </button>
      <button
        onClick={handleMarkAsPaid}
        className="bg-[#7C5DFA] h-12 px-6 rounded-3xl font-bold tracking-tight  text-white "
      >
        {isPending ? <Spinner /> : "Mark as paid"}
      </button>
    </div>
  );
};

export default SubmitComponent;
