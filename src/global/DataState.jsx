import { create } from "zustand";

const useCreate = create((set) => ({
  dataCreated: false,
  createLoading: false,
  tableData: [],

  setTableData: (data) => set({ tableData: data }),
  setDataCreated: () => set({ dataCreated: true }),
  setNoCreated: () => set({ dataCreated: false }),
  setCreateLoading: () => set({ createLoading: true }),
  setNoCreateLoading: () => set({ createLoading: false }),
}));

export default useCreate;
