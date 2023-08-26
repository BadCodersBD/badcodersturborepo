export type ShoppingCartProps = {
  open: boolean;
  triger: boolean;
};

export type QuantityProps = {
  price: number;
  mrpPrice?: number;
  quantity: number;
  image: string;
};

export interface CartItemProps extends ProductProps {
  serial?: number;
  quantity: number;
  removeProduct: (id: string) => void;
  totalFunction: (price: number) => void;
  IncreaseQty: (index: number) => void;
  DecreaseQty: (index: number) => void;
  countSubtotal?: (_id: string, subtotal: number, serial: number) => void;
}

export type ProductProps = {
  packSize?: string;
  _id?: string;
  item?: string;
  itemType?: string;
  uom?: string;
  price?: number;
  image?: string;
  quantity?: number;
  mrpPrice?: number;
};

export type productCountType = {
  single: number;
  multi: number;
};

export type ShoppingCartProp = {
  handleLoginClick?: () => void;
  cartData?: ProductProps[];
  ecom?: boolean;
  setEcomTotal: any;
};
