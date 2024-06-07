import { create } from "zustand";

const useCreate = create((set) => {
  return {
    dataCreated: false,
    createLoading: false,

    setDataCreated: () => set(() => ({ dataCreated: true })),
    setNoCreated: () => set(() => ({ dataCreated: false })),
    setCreateLoading: () => set(() => ({ createLoading: true })),
    setNoCreateLoading: () => set(() => ({ createLoading: false })),
  };
});

export default useCreate;
