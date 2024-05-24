import { create } from "zustand";

const useCreate = create((set) => {
  return {
    dataCreated: false,

    setDataCreated: () => set(() => ({ dataCreated: true })),
    setNoCreated: () => set(() => ({ dataCreated: false })),
  };
});

export default useCreate;
