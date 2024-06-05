import { create } from "zustand";

const useCreate = create((set) => {
  return {
    dataCreated: false,
    createLoading: false,

    setDataCreated: () => set(() => ({ dataCreated: true })),
    setNoCreated: () => set(() => ({ dataCreated: false })),
    setCreateLoading: () => set(() => ({ dataCreated: true })),
    setNoCreateLoading: () => set(() => ({ dataCreated: false })),
  };
});

export default useCreate;
