import arrowRight from "/assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import Empty from "./Empty";
import { Loader } from "lucide-react";
import generateTotal from "../../utils/total";
import { InvoicesType } from "../../types";
import formatDate from "../../utils/validateDate";
import AllInvoices from "./AllInvoices";

type Props = {
  invoices: InvoicesType[] | undefined;
  isLoading: boolean;
};

const Invoices = ({ invoices, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-[50px]">
        <Loader className="size-6 text-[#4b2ec0] animate-spin" />
      </div>
    );
  }

  return (
    <div className="lg:mt-16 mt-8 flex items-center gap-4 flex-col ">
      {invoices?.length ? (
        invoices?.map((data: InvoicesType) => (
          <AllInvoices key={data._id} data={data} />
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Invoices;
