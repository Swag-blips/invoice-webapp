import { InvoicesType } from "../../types";

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
          : "bg-draft-status dark:bg-[#DFE3FA] dark:bg-opacity-[5.71%] "
      } rounded-md bg-opacity-[5.71%] h-10`}
    >
      <div
        className={`w-2 h-2  ${
          invoice?.status === "paid"
            ? "bg-paid-status"
            : invoice?.status === "pending"
            ? "bg-pending-status"
            : "bg-draft-status dark:bg-[#DFE3FA] "
        } rounded-full`}
      />
      <p
        className={` ${
          invoice?.status === "paid"
            ? "text-paid-status"
            : invoice?.status === "pending"
            ? "text-pending-status"
            : "text-draft-status dark:text-[#DFE3FA]"
        } font-bold tracking-tight opacity-100`}
      >
        {invoice?.status}
      </p>
    </div>
  );
};

export default StatusButton;
