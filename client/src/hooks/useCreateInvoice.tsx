import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useReceiptStore from "../store/receiptStore";
import { useAuth } from "@clerk/clerk-react";

const useCreateInvoice = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const { setIsOpen: setInvoiceFormOpen } = useReceiptStore();
  const createInvoice = (
    form: any,
    selectedOption: any,
    startDate: any,
    itemFields: any
  ) => {
    const queryClient = useQueryClient();
    const { userId } = useAuth();
    const { mutate: createInvoice, isPending } = useMutation({
      mutationFn: async () => {
        try {
          const res = await fetch(`${API_URL}/api/invoices/${userId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              ...form,
              selectedOption,
              startDate,
              itemFields,
            }),
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.error || "Something went wrong");
          }
          return data;
        } catch (error: any) {
          throw new Error(error);
        }
      },

      onSuccess: () => {
        toast.success("Invoice created successfully");
        setInvoiceFormOpen();
        queryClient.invalidateQueries({ queryKey: ["invoices"] });
      },

      onError: (error) => {
        toast.error(error?.message);
      },
    });
    return { createInvoice, isPending };
  };
};

export default useCreateInvoice;
