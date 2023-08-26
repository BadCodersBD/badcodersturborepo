import { type CartType } from "../../../elements/ShoppingCart/CartItem/cartState";

export const CountCartItems = (cartData: CartType[]) => {
  const result = {};
  cartData.forEach((product: CartType) => {
    if (result[product.id]) {
      result[product.id].quantity += product.quantity;
    } else {
      result[product.id] = { ...product, quantity: product.quantity };
    }
  });
  const cartItems = Object.values(result);

  return cartItems;
};
