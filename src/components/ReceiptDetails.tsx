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
          <p className="text-[#0C0E16] text-[15px] font-bold tracking-tight">
            <span className="text-primary-text">#</span>
            {invoice?.id}
          </p>
          <p className="font-medium text-base text-left text-primary-text">
            {invoice?.description}
          </p>
          <div className="md:hidden mt-5 text-primary-text tracking-[-0.1px] text-base font-medium flex-col text-left ">
            <p>{invoice?.senderAddress.street}</p>
            <p>{invoice?.senderAddress.city}</p>
            <p>{invoice?.senderAddress.postCode}</p>
            <p>{invoice?.senderAddress.country}</p>
          </div>
        </div>
        <div className="md:flex  hidden text-primary-text tracking-[-0.1px] text-base font-medium flex-col  text-right ">
          <p>{invoice?.senderAddress.street}</p>
          <p>{invoice?.senderAddress.city}</p>
          <p>{invoice?.senderAddress.postCode}</p>
          <p>{invoice?.senderAddress.country}</p>
        </div>
      </div>
      <div className="flex mt-7 md:mt-0 items-start gap-16 md:gap-[117px]">
        <div className="flex flex-col justify-center gap-8">
          <div className=" flex flex-col gap-2">
            <p className="text-primary-text text-base font-medium">
              Invoice Date
            </p>
            <p className="font-bold text-[#0C0E16] text-[15px] tracking-tight">
              {invoice?.createdAt && formatDate(invoice?.createdAt)}
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <p className="text-primary-text text-base font-medium">
              Payment due
            </p>
            <p className="font-bold text-[#0C0E16] text-[15px] tracking-tight">
              {invoice?.paymentDue && formatDate(invoice?.paymentDue)}
            </p>
          </div>

          <div className="flex md:hidden flex-col ">
            <p className="text-primary-text tracking-[-0.1px] text-base font-medium">
              Sent to
            </p>
            <p className="font-bold   text-[#0C0E16] text-[15px] tracking-tight">
              {invoice?.clientEmail}
            </p>
          </div>
        </div>

        <div>
          <p className="text-primary-text text-base font-medium">Bill To</p>
          <p className="font-bold mt-[13px] text-[#0C0E16] text-[15px] tracking-tight">
            {invoice?.clientName}
          </p>
          <div className="flex mt-2 text-primary-text tracking-[-0.1px] text-base font-medium flex-col  text-left ">
            <p>{invoice?.clientAddress.street}</p>
            <p>{invoice?.clientAddress.city}</p>
            <p>{invoice?.clientAddress.postCode}</p>
            <p>{invoice?.clientAddress.country}</p>
          </div>
        </div>

        <div className="hidden md:flex flex-col ">
          <p className="text-primary-text tracking-[-0.1px] text-base font-medium">
            Sent to
          </p>
          <p className="font-bold   text-[#0C0E16] text-[15px] tracking-tight">
            {invoice?.clientEmail}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReceiptDetails;
