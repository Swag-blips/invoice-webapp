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
    <div className="mt-16 flex items-center gap-4 flex-col ">
      {invoiceData?.map((data) => (
        <Link
          to={`/receipt/${data.id}`}
          key={data.id}
          className="bg-white cursor-pointer shadow-sm rounded-[8px]  flex items-center justify-between w-full px-8 h-[72px]"
        >
          <div className="flex items-center gap-10">
            <p className="text-[#0C0E16] text-[15px] font-bold tracking-[-0.25px]">
              <span className="text-[#7E88C3]">#</span>
              {data.id}
            </p>

            <p className="text-[#7E88C3] tracking-[0.1px] text-[13px]">
              <span className="text-[#888EB0]">Due </span>
              {formatDate(data.paymentDue)}
            </p>
            <p className="text-[#858BB2] tracking-[0.1px] text-[13px]">
              {data.clientName}
            </p>
          </div>

          <div className="flex items-center gap-10 justify-center">
            <p className="tetx-[15px] font-bold text-[#0C0E16] leading-[24px]">
              £ {data.total}
            </p>
            <div className="flex items-center gap-5">
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
              <img src={arrowRight} alt="arrow-right" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Invoices;
