import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useReceiptStore from "../store/receiptStore";
import { useAuth } from "@clerk/clerk-react";
import { FormType, ItemFields } from "../types";

const API_URL = import.meta.env.VITE_API_URL;
export const useCreateInvoice = (
  form: FormType,
  selectedOption: string | null,
  startDate: Date | null,
  itemFields: ItemFields[]
) => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();
  const { setIsOpen: setInvoiceFormOpen } = useReceiptStore();

  return useMutation({
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
};

export const useEditInvoice = (
  invoiceId: string | undefined,
  form: FormType,
  selectedOption: string | null,
  startDate: Date | null,
  itemFields: ItemFields[]
) => {
  const { setIsOpen: setInvoiceFormOpen } = useReceiptStore();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch(`${API_URL}/api/invoices/${invoiceId}`, {
          method: "PUT",
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
      toast.success("Invoice edited successfully");
      setInvoiceFormOpen();
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoice"] });
    },

    onError: (error) => {
      toast.error(error?.message);
    },
  });
};

export const useMarkInvoice = (id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      try {
        let res = await fetch(`${API_URL}/api/invoices/mark/${id}`, {
          method: "PUT",
          credentials: "include",
        });

        let data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
      } catch (error: any) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      toast.success("Invoice marked as paid");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      queryClient.invalidateQueries({ queryKey: ["invoice"] });
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
};
