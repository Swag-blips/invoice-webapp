import arrowRight from "/assets/icon-arrow-right.svg";
import { InvoicesType } from "../../types";
import { Link } from "react-router-dom";
import generateTotal from "../../utils/total";
import formatDate from "../../utils/validateDate";

type Props = {
  data: InvoicesType;
};

const AllInvoices = ({ data }: Props) => {
  return (
    <Link
      to={`/invoice/${data.invoiceId}`}
      className="bg-white dark:bg-[#1E2139] cursor-pointer dark:shadow-none shadow-sm rounded-[8px]  flex items-center justify-between w-full px-6 lg:py-0 py-6 lg:px-8 h-auto lg:h-[72px]"
    >
      <div className="flex text flex-col md:flex-row md:items-center md:gap-10">
        <p className="text-neutral dark:text-white text-base   font-bold tracking-tight">
          <span className="text-primary-text">#</span>
          {data.invoiceId}
        </p>

        <p className="text-primary-text dark:text-[#DFE3FA] md:mt-0 mt-6  tracking-[0.1px] text-sm">
          <span className="text-[#888EB0] dark:text-[#DFE3FA]">Due </span>
          {formatDate(data.startDate, data.selectedOption)}
        </p>
        <p className="text-secondary-text dark:text-[#DFE3FA] hidden lg:inline-flex tracking-[0.1px] text-sm">
          {data.clientName || "unknown"}
        </p>
        <p className="text-base lg:hidden dark:text-white font-bold text-neutral leading-[24px]">
          £ {generateTotal(data.itemFields)}.00
        </p>
      </div>
      <div className="flex items-center flex-col md:flex-row md:gap-10 gap-6 md:justify-center">
        <p className="text-base dark:text-white  hidden lg:inline-flex font-bold text-neutral leading-[24px]">
          £ {generateTotal(data.itemFields)}.00
        </p>
        <p className="text-secondary-text ml-auto text-right dark:text-white lg:hidden racking-[0.1px] text-sm">
          {data.clientName || "unknown"}
        </p>
        <div className="flex md:items-center gap-5">
          <div
            className={`flex items-center justify-center gap-2 w-[104px] rounded-[6px] ${
              data.status === "paid"
                ? "bg-paid-status"
                : data.status === "pending"
                ? "bg-pending-status"
                : "bg-draft-status dark:bg-[#DFE3FA] "
            }  bg-opacity-[5.71%] dark:bg-opacity-[5.71%] h-10`}
          >
            <div
              className={`w-2 h-2 ${
                data.status === "paid"
                  ? "bg-paid-status"
                  : data.status === "pending"
                  ? "bg-pending-status"
                  : "bg-draft-status dark:bg-[#DFE3FA] "
              } rounded-full opacity-100 `}
            />
            <p
              className={`bg-opacity-[5.71%] ${
                data.status === "paid"
                  ? "text-paid-status"
                  : data.status === "pending"
                  ? "text-pending-status"
                  : "text-draft-status dark:text-[#DFE3FA]"
              } font-bold opacity-100`}
            >
              {data.status}
            </p>
          </div>
          <img
            src={arrowRight}
            className="hidden lg:inline-flex "
            alt="arrow-right"
          />
        </div>
      </div>
    </Link>
  );
};

export default AllInvoices;
