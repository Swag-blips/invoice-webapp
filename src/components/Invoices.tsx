import arrowRight from "/assets/icon-arrow-right.svg";
import data from "../../data.json";
import { InvoicesType } from "../types";
import { useEffect, useState } from "react";
import formatDate from "../utils/formatDate";
import { Link } from "react-router-dom";

const Invoices = () => {
  const [invoiceData, setInvoiceData] = useState<InvoicesType[] | null>(null);

  useEffect(() => {
    setInvoiceData(data);
  }, [data]);

  // const paid = invoiceData?.status === "paid";
  // const draft = invoiceData?.status === "draft";
  // const pending = invoiceData?.status === "pending";

  return (
    <div className="lg:mt-16 mt-8 flex items-center gap-4 flex-col ">
      {invoiceData?.map((data) => (
        <Link
          to={`/receipt/${data.id}`}
          key={data.id}
          className="bg-white cursor-pointer shadow-sm rounded-[8px]  flex items-center justify-between w-full px-6 lg:py-0 py-6 lg:px-8 h-auto lg:h-[72px]"
        >
          <div className="flex text flex-col lg:flex-row lg:items-center lg:gap-10">
            <p className="text-[#0C0E16] text-[15px]   font-bold tracking-[-0.25px]">
              <span className="text-primary-text">#</span>
              {data.id}
            </p>

            <p className="text-primary-text md:mt-0 mt-6  tracking-[0.1px] text-[13px]">
              <span className="text-[#888EB0]">Due </span>
              {formatDate(data.paymentDue)}
            </p>
            <p className="text-secondary-text hidden lg:inline-flex tracking-[0.1px] text-[13px]">
              {data.clientName}
            </p>
            <p className="text-[15px] lg:hidden font-bold text-[#0C0E16] leading-[24px]">
              £ {data.total}
            </p>
          </div>

          <div className="flex items-center flex-col md:flex-row md:gap-10 gap-6 md:justify-center">
            <p className="text-[15px]  hidden lg:inline-flex font-bold text-[#0C0E16] leading-[24px]">
              £ {data.total}
            </p>
            <p className="text-secondary-text lg:hidden racking-[0.1px] text-[13px]">
              {data.clientName}
            </p>
            <div className="flex md:items-center gap-5">
              <div
                className={`flex items-center justify-center gap-2 w-[104px] rounded-[6px] ${
                  data.status === "paid"
                    ? "bg-[#33D69F]"
                    : data.status === "pending"
                    ? "bg-[#FF8F00]"
                    : "bg-[#373B53]"
                }  bg-opacity-[5.71%] h-10`}
              >
                <div
                  className={`w-2 h-2 ${
                    data.status === "paid"
                      ? "bg-[#33D69F]"
                      : data.status === "pending"
                      ? "bg-[#FF8F00]"
                      : "bg-[#373B53]"
                  } rounded-full opacity-100 `}
                />
                <p
                  className={`bg-opacity-[5.71%] ${
                    data.status === "paid"
                      ? "text-[#33D69F]"
                      : data.status === "pending"
                      ? "text-[#FF8F00]"
                      : "text-[#373B53]"
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
      ))}
    </div>
  );
};

export default Invoices;
