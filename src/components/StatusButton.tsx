import { InvoicesType } from "../types";

type Props = {
  invoice?: InvoicesType;
};
const StatusButton = ({ invoice }: Props) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 w-[104px]  ${
        invoice?.status === "paid"
          ? "bg-paid-status"
          : invoice?.status === "pending"
          ? "bg-pending-status"
          : "bg-draft-status"
      } rounded-md bg-opacity-[5.71%] h-10`}
    >
      <div
        className={`w-2 h-2  ${
          invoice?.status === "paid"
            ? "bg-paid-status"
            : invoice?.status === "pending"
            ? "bg-pending-status"
            : "bg-draft-status"
        } rounded-full`}
      />
      <p
        className={` ${
          invoice?.status === "paid"
            ? "text-paid-status"
            : invoice?.status === "pending"
            ? "text-pending-status"
            : "text-draft-status"
        } font-bold tracking-[-0.25px] opacity-100`}
      >
        {invoice?.status}
      </p>
    </div>
  );
};

export default StatusButton;
