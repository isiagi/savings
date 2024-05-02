import { create } from "zustand";

const useStore = create((set) => ({
  addModalState: false,
  editModalState: false,
  openAddModal: () => set(() => ({ addModalState: true })),
  closeAddModal: () => set({ addModalState: false }),
  openEditModal: () => set(() => ({ editModalState: true })),
  closeEditModal: () => set({ editModalState: false }),
}));

export default useStore;
