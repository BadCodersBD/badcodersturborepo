import { atom } from "recoil";

export type CartType = {
  id: string;
  ItemID: string;
  price: string;
  quantity: number;
  packSize: string;
  isCan?: boolean;
  flovour?: string;
  subTotal: number | 0;
};
export const cartState = atom({
  key: "cartState",
  default: [] as CartType[],
});
