import { useQuery } from "@tanstack/react-query";
import { InvoicesType } from "../types";

const API_URL = import.meta.env.VITE_API_URL;
export const useFetchInvoice = (id: string | undefined) => {
  return useQuery({
    queryKey: ["invoice"],
    retry: 1,
    queryFn: async (): Promise<InvoicesType> => {
      const res = await fetch(`${API_URL}/api/invoices/getInvoice/${id}`, {
        method: "GET",
        credentials: "include",
      });

      const data = (await res.json()) as InvoicesType;

      if (!res.ok) {
        throw new Error(data.error || "something went wrong");
      }

      return data;
    },
  });
};
