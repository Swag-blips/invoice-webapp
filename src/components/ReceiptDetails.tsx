import { InvoicesType } from "../types";
import formatDate from "../utils/formatDate";

type Props = {
  invoice?: InvoicesType;
};

const ReceiptDetails = ({ invoice }: Props) => {
  return (
    <>
      <div className="flex items-start justify-between">
        <div className="flex flex-col md:gap-2 ">
          <p className="text-[#0C0E16] text-[15px] dark:text-white font-bold tracking-tight">
            <span className="text-primary-text">#</span>
            {invoice?.id}
          </p>
          <p className="font-medium text-sm text-left dark:text-[#DFE3FA] text-primary-text">
            {invoice?.description}
          </p>
          <div className="md:hidden mt-5 dark:text-[#DFE3FA]  text-primary-text tracking-[-0.1px] text-sm font-medium flex-col text-left ">
            <p>{invoice?.senderAddress.street}</p>
            <p>{invoice?.senderAddress.city}</p>
            <p>{invoice?.senderAddress.postCode}</p>
            <p>{invoice?.senderAddress.country}</p>
          </div>
        </div>
        <div className="md:flex dark:text-[#DFE3FA]  hidden text-primary-text tracking-[-0.1px] text-sm font-medium flex-col  text-right ">
          <p>{invoice?.senderAddress.street}</p>
          <p>{invoice?.senderAddress.city}</p>
          <p>{invoice?.senderAddress.postCode}</p>
          <p>{invoice?.senderAddress.country}</p>
        </div>
      </div>
      <div className="flex mt-7 md:mt-0 items-start gap-16 md:gap-[117px]">
        <div className="flex flex-col justify-center gap-8">
          <div className=" flex flex-col gap-2">
            <p className="text-primary-text dark:text-[#DFE3FA] text-sm font-medium">
              Invoice Date
            </p>
            <p className="font-bold dark:text-white text-[#0C0E16] text-[15px] tracking-tight">
              {invoice?.createdAt && formatDate(invoice?.createdAt)}
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <p className="text-primary-text text-sm dark:text-[#DFE3FA] font-medium">
              Payment due
            </p>
            <p className="font-bold dark:text-white text-[#0C0E16] text-[15px] tracking-tight">
              {invoice?.paymentDue && formatDate(invoice?.paymentDue)}
            </p>
          </div>

          <div className="flex md:hidden flex-col ">
            <p className="text-primary-text tracking-[-0.1px] text-sm font-medium">
              Sent to
            </p>
            <p className="font-bold dark:text-white  text-[#0C0E16] text-[15px] tracking-tight">
              {invoice?.clientEmail}
            </p>
          </div>
        </div>

        <div>
          <p className="text-primary-text text-sm font-medium dark:text-[#DFE3FA]">
            Bill To
          </p>
          <p className="font-bold mt-[13px] dark:text-white text-[#0C0E16] text-[15px] tracking-tight">
            {invoice?.clientName}
          </p>
          <div className="flex mt-2 dark:text-[#DFE3FA] text-primary-text tracking-[-0.1px] text-sm font-medium flex-col  text-left ">
            <p>{invoice?.clientAddress.street}</p>
            <p>{invoice?.clientAddress.city}</p>
            <p>{invoice?.clientAddress.postCode}</p>
            <p>{invoice?.clientAddress.country}</p>
          </div>
        </div>

        <div className="hidden md:flex flex-col ">
          <p className="text-primary-text dark:text-[#DFE3FA] tracking-[-0.1px] text-sm font-medium">
            Sent to
          </p>
          <p className="font-bold dark:text-white text-[#0C0E16] text-[15px] tracking-tight">
            {invoice?.clientEmail}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReceiptDetails;
