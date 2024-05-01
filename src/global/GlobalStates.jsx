import { create } from "zustand";

const useStore = create((set) => ({
  addModalState: false,
  openAddModal: () => set(() => ({ addModalState: true })),
  closeAddModal: () => set({ addModalState: false }),
}));

export default useStore;
