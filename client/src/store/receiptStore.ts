import { create } from "zustand";

interface ReceiptStore {
  isOpen: boolean;
  openDeleteModal: boolean;
  setIsOpen: () => void;
  setOpenDeleteModal: () => void;
}

const useReceiptStore = create<ReceiptStore>((set) => ({
  openDeleteModal: false,
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setOpenDeleteModal: () =>
    set((state) => ({ openDeleteModal: !state.openDeleteModal })),
}));

export default useReceiptStore;
