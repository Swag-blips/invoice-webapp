import { InvoicesType } from "../types";

type Props = {
  invoice?: InvoicesType;
};
const StatusButton = ({ invoice }: Props) => {
  return (
    <div
      className={`flex items-center justify-center gap-2 w-[104px]  ${
        invoice?.status === "paid"
          ? "bg-[#33D69F]"
          : invoice?.status === "pending"
          ? "bg-[#FF8F00]"
          : "bg-[#373B53]"
      } rounded-md bg-opacity-[5.71%] h-10`}
    >
      <div
        className={`w-2 h-2  ${
          invoice?.status === "paid"
            ? "bg-[#33D69F]"
            : invoice?.status === "pending"
            ? "bg-[#FF8F00]"
            : "bg-[#373B53]"
        } rounded-full`}
      />
      <p
        className={` ${
          invoice?.status === "paid"
            ? "text-[#33D69F]"
            : invoice?.status === "pending"
            ? "text-[#FF8F00]"
            : "text-[#373B53]"
        } font-bold tracking-[-0.25px] opacity-100`}
      >
        {invoice?.status}
      </p>
    </div>
  );
};

export default StatusButton;
