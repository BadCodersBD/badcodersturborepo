import { atom } from "recoil";

export const modalOpenState = atom({
  key: "modalOpenState",
  default: {
    open: false,
    modalName: "",
  },
});
