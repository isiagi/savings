import { create } from "zustand";

const useStore = create((set) => ({
  modalState: {},
  addModalState: false,
  editModalState: false,
  openModal: false,
  openAddModal: () => set(() => ({ addModalState: true })),
  closeAddModal: () => set({ addModalState: false }),
  openEditModal: () => set(() => ({ editModalState: true })),
  closeEditModal: () => set({ editModalState: false }),
  setModalState: (data) => set({ modalState: data }),
  setOpenModal: () => set({ openModal: true }),
  setCloseModal: () => set({ openModal: false }),
}));

export default useStore;
