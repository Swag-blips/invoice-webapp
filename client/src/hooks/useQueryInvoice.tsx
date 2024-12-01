import { useQuery } from "@tanstack/react-query";
import { InvoicesType } from "../types";
import { useAuth } from "@clerk/clerk-react";

const API_URL = import.meta.env.VITE_API_URL;
export const useFetchInvoice = (id: string | undefined) => {
  const { getToken } = useAuth();

  return useQuery({
    queryKey: ["invoice"],
    retry: false,
    queryFn: async (): Promise<InvoicesType> => {
      const token = await getToken();
      const res = await fetch(`${API_URL}/api/invoices/getInvoice/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = (await res.json()) as InvoicesType;

      if (!res.ok) {
        throw new Error(data.error || "something went wrong");
      }

      return data;
    },
  });
};
