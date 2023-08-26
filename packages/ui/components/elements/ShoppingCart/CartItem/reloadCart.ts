import { atom } from "recoil";


export const reloadCartState = atom({
  key: "reloadCartState",
  default: false as boolean,
});
