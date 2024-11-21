import { create } from "zustand";

interface ReceiptStore {
  isOpen: boolean;
  setIsOpen: () => void;
}

const useReceiptStore = create<ReceiptStore>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useReceiptStore;
