import moment from "moment";
import { InvoicesType } from "../../types";

type Props = {
  invoice?: InvoicesType;
};

const InvoiceDetails = ({ invoice }: Props) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <div className="flex flex-col md:gap-2 ">
          <p className="text-neutral text-base dark:text-white font-bold tracking-tight">
            <span className="text-primary-text">#</span>
            {invoice?.invoiceId}
          </p>
          <p className="font-medium text-sm text-left dark:text-[#DFE3FA] text-primary-text">
            {invoice?.projectDescription}
          </p>
          <div className="md:hidden mt-5 dark:text-[#DFE3FA]  text-primary-text tracking-[-0.1px] text-sm font-medium flex-col text-left ">
            <p>{invoice?.senderStreetAddress}</p>
            <p>{invoice?.senderCity}</p>
            <p>{invoice?.senderPostCode}</p>
            <p>{invoice?.senderCountry}</p>
          </div>
        </div>
        <div className="md:flex dark:text-[#DFE3FA]  hidden text-primary-text tracking-[-0.1px] text-sm font-medium flex-col  text-right ">
          <p>{invoice?.senderStreetAddress}</p>
          <p>{invoice?.senderCity}</p>
          <p>{invoice?.senderPostCode}</p>
          <p>{invoice?.senderCountry}</p>
        </div>
      </div>
      <div className="flex mt-7 md:mt-5 items-start gap-16 md:gap-[117px]">
        <div className="flex flex-col justify-center gap-8">
          <div className=" flex flex-col gap-2">
            <p className="text-primary-text dark:text-[#DFE3FA] text-sm font-medium">
              Invoice Date
            </p>
            <p className="font-bold dark:text-white text-neutral text-base tracking-tight">
              {invoice?.startDate &&
                moment(invoice?.startDate).format("Do MMMM YYYY")}
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <p className="text-primary-text text-sm dark:text-[#DFE3FA] font-medium">
              Payment due
            </p>
            <p className="font-bold dark:text-white text-neutral text-base tracking-tight">
              {invoice?.startDate &&
                moment(invoice?.startDate).format("Do MMMM YYYY")}
            </p>
          </div>

          <div className="flex md:hidden flex-col ">
            <p className="text-primary-text tracking-[-0.1px] text-sm font-medium">
              Sent to
            </p>
            <p className="font-bold  dark:text-white text-neutral text-base tracking-tight">
              {invoice?.clientEmail}
            </p>
          </div>
        </div>

        <div className="">
          <p className="text-primary-text text-sm font-medium dark:text-[#DFE3FA]">
            Bill To
          </p>
          <p className="font-bold mt-[13px] dark:text-white text-neutral text-base tracking-tight">
            {invoice?.clientName}
          </p>
          <div className="flex mt-2 dark:text-[#DFE3FA] text-primary-text tracking-[-0.1px] text-sm font-medium flex-col  text-left ">
            <p>{invoice?.clientStreetAddress}</p>
            <p>{invoice?.clientCity}</p>
            <p>{invoice?.clientPostCode}</p>
            <p>{invoice?.clientCountry}</p>
          </div>
        </div>

        <div className="hidden md:flex flex-col ">
          <p className="text-primary-text dark:text-[#DFE3FA] tracking-[-0.1px] text-sm font-medium">
            Sent to
          </p>
          <p className="font-bold dark:text-white text-neutral text-base tracking-tight">
            {invoice?.clientEmail}
          </p>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetails;
