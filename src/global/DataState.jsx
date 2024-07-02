import { create } from "zustand";

const useCreate = create((set) => ({
  dataCreated: false,
  createLoading: false,
  tableData: [],
  search: "",
  searchActive: false,
  rawData: [],
  dataLoading: false,

  setRawData: (data) => set({ rawData: data }),
  setDataLoading: () => set({ dataLoading: true }),
  setDataNoLoading: () => set({ dataLoading: false }),
  setTableData: (data) => set({ tableData: data }),
  setDataCreated: () => set({ dataCreated: true }),
  setNoCreated: () => set({ dataCreated: false }),
  setCreateLoading: () => set({ createLoading: true }),
  setNoCreateLoading: () => set({ createLoading: false }),
  setSearch: (data) => set({ search: data }),
  openSearch: () => set({ searchActive: true }),
  closeSearch: () => set({ searchActive: false }),
}));

export default useCreate;
