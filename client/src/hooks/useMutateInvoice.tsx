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
  const { getToken } = useAuth();
  return useMutation({
    mutationFn: async () => {
      const token = await getToken();
      try {
        const res = await fetch(`${API_URL}/api/invoices/${userId}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
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
  const { setIsOpen: setInvoiceFormOpen, isOpen } = useReceiptStore();
  const queryClient = useQueryClient();
  const { getToken } = useAuth();
  return useMutation({
    mutationFn: async () => {
      const token = await getToken();
      try {
        const res = await fetch(`${API_URL}/api/invoices/${invoiceId}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
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
      if (isOpen) {
        setInvoiceFormOpen();
      }

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
  const { getToken } = useAuth();
  return useMutation({
    mutationFn: async () => {
      const token = await getToken();
      try {
        const res = await fetch(`${API_URL}/api/invoices/mark/${id}`, {
          method: "PUT",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

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

export const useSaveAsDraft = (
  form: FormType,
  selectedOption: string | null,
  startDate: Date | null,
  itemFields: ItemFields[]
) => {
  const queryClient = useQueryClient();
  const { userId } = useAuth();

  const { isOpen, setIsOpen: setInvoiceFormOpen } = useReceiptStore();
  const { getToken } = useAuth();

  return useMutation({
    mutationFn: async () => {
      try {
        const token = await getToken();
        const res = await fetch(`${API_URL}/api/invoices/draft/${userId}`, {
          method: "POST",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            selectedOption,
            startDate,
            itemFields,
          }),
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "An error occured");
        }
      } catch (error: any) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      toast.success("Invoice created as draft");
      if (isOpen) {
        setInvoiceFormOpen();
      }

      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
};

export const useDeleteInvoice = (id: string | undefined) => {
  const { setOpenDeleteModal } = useReceiptStore();
  const queryClient = useQueryClient();
  const { getToken } = useAuth();
  return useMutation({
    mutationFn: async () => {
      const token = await getToken();
      try {
        const res = await fetch(`${API_URL}/api/invoices/${id}`, {
          method: "DELETE",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
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
      toast.success("Invoice successfully deleted");
      setOpenDeleteModal();
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
