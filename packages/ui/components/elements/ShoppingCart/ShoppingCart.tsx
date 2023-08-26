import { useState, useEffect, useCallback, useMemo } from "react";
import { Styled } from "./ShoppingCart.styled";
import { type CartType, cartState } from "./CartItem/cartState";
import { useRecoilState } from "recoil";
import CartItem from "./CartItem/CartItem";
import { fetchProducts } from "../../utils/cms/fetchProducts";
import { urlForThumbnail } from "../../utils/cms/imageProcess";
import type {
  ProductProps,
  ShoppingCartProp,
} from "../../../types/ShoppingCart";
import Cookies from "universal-cookie";
import { useThemeContext } from "ui/components/contexts/ThemeContext";
import { CountCartItems } from "../../utils/cms/ShoppingCart/cartItemCount";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { reloadCartState } from "./CartItem/reloadCart";
import { GenericSpinner } from "../GenericSpinner/GenericSpinner";

interface filteredItemProps extends ProductProps {
  id: string;
  singleQty: number;
  caseQty: number;
  quantity: number;
  subTotal: number;
}

const ShoppingCart = ({
  handleLoginClick,
  cartData,
  ecom,
  setEcomTotal,
}: ShoppingCartProp) => {
  const [cart, setCart] = useRecoilState(cartState);
  const [loading, setLoading] = useState<boolean>(false);
  const [Reloadcart, setReloadCart] = useRecoilState(reloadCartState);
  const cartItems = CountCartItems(cart);
  const [CartItems, setCartItems] = useState<CartType[]>(
    cartItems as CartType[]
  );

  const [cartItemsData, setCartItemsData] = useState<
    ProductProps[] | CartType[]
  >([]);

  const [products, setProducts] = useState<ProductProps[]>([]);

  const [filteredCartItems, setFilteredCartItems] = useState<
    filteredItemProps[]
  >([]);

  const { isDarkMode } = useThemeContext();
  const cookies = new Cookies();
  const [total, setTotal] = useState<number>(0);
  const { data: session } = useSession();
  const router = useRouter();

  const setCookies = () => {
    if (session) {
      cookies.set("cartItems", filteredCartItems);
      cookies.set("session", session.user);
      router.push("/payment-gateway");
    } else {
      handleLoginClick();
    }
  };

  const getProducts = async () => {
    try {
      const products = await fetchProducts();
      setProducts(products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
    if (ecom && cartData !== undefined) {
      setCartItemsData(cartData);
    } else {
      setCartItemsData(CartItems);
    }
  }, [cartData, ecom]);

  const removeProduct = (id: string) => {
    const newFilteredCart = filteredCartItems.filter((item) => item.id !== id);
    setFilteredCartItems(newFilteredCart);
    cookies.set("cartItems", newFilteredCart);
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    setReloadCart(!Reloadcart);
  };

  const totalFunction = (price: number) => {
    if (price !== undefined) {
      setTotal((prev: number) => prev + price);
      if (ecom) {
        setEcomTotal((prev: number) => prev + price);
      }
    }
  };

  const memorizedFilter = useCallback(() => {
    if (cartItemsData === undefined) {
      return;
    }
    const FilteredItems = cartItemsData.map((item) => {
      const prod = products.find((p) => p._id === item.id);
      if (prod !== undefined) {
        return {
          packSize: prod.packSize,
          singleQty: item.quantity,
          caseQty: Math.floor(item.quantity / parseInt(prod.uom, 10)),
          item: prod.item,
          id: prod._id,
          itemType: prod.itemType,
          price: prod.price,
          mrpPrice: prod.mrpprice,
          image: urlForThumbnail(prod.image),
          uom: prod.uom,
          key: prod._id,
          quantity: item.quantity,
          subTotal: prod.price * item.quantity,
        };
      }
    });

    setFilteredCartItems(FilteredItems as filteredItemProps[]);
  }, [products]);

  const initialValueTotal = filteredCartItems.reduce((acc, item) => {
    return item !== undefined ? acc + item.subTotal : 0;
  }, 0);

  useMemo(() => {
    setTotal(initialValueTotal);
    if (ecom) {
      setEcomTotal(initialValueTotal);
    }
  }, [ecom, initialValueTotal]);

  useEffect(() => {
    memorizedFilter();
    if (ecom) {
      setEcomTotal(total);
    }
  }, [memorizedFilter]);

  const IncreaseQty = (index: number) => {
    const newCart = [...filteredCartItems];
    newCart[index].quantity = newCart[index].quantity + 1;
    setFilteredCartItems(newCart);
    cookies.set("cartItems", newCart);
    setReloadCart(!Reloadcart);
  };
  const DecreaseQty = (index: number) => {
    const newCart = [...filteredCartItems];
    if (newCart[index].quantity > 0) {
      newCart[index].quantity = newCart[index].quantity - 1;
      setFilteredCartItems(newCart);
      cookies.set("cartItems", newCart);
      setReloadCart(!Reloadcart);
    }
  };
  return (
    <Styled.ShoppingCartContainer
      ecom={ecom}
      isDarkMode={isDarkMode ? "true" : "false"}
    >
      <Styled.Heading>My Cart</Styled.Heading>
      <Styled.CartWrapper>
        {filteredCartItems.length > 0 ? (
          filteredCartItems.map((product, index) => (
            <CartItem
              packSize={product?.packSize}
              serial={index}
              IncreaseQty={IncreaseQty}
              DecreaseQty={DecreaseQty}
              quantity={product?.quantity && product?.quantity}
              item={product?.item}
              _id={product?.id}
              removeProduct={removeProduct}
              itemType={product?.itemType}
              price={product?.price}
              mrpPrice={product?.mrpPrice}
              image={product?.image}
              uom={product?.uom}
              key={`${index}`}
              totalFunction={totalFunction}
            />
          ))
        ) : (
          <div className="grid justify-items-center">
            <Image
              src={"/empty-cart.gif"}
              alt={"avllogo"}
              height={200}
              width={200}
            />
            <span className="text-lg  md:text-2xl">Your Cart Is Empty!</span>
          </div>
        )}
        {total < 500 && (
          <div className="p-4 text-lg font-semibold text-red-500">
            Note: Minimum order 500 taka
          </div>
        )}
        <p className="text-sm text-green-400">Free Delivery</p>
        {cart.length > 0 ? (
          ecom ? (
            <div className="bg-black text-white">৳. {total}</div>
          ) : (
            <div className="sticky bottom-0 top-0 mx-1 pt-5">
              <div
                className={`w-full p-2 text-end text-lg font-bold ${
                  isDarkMode ? "bg-neutral-900" : "bg-white"
                }`}
              >
                Total: &nbsp; ৳. {total}
              </div>
              <button
                className={`registerButton flex justify-between shadow-white ${
                  total < 500
                    ? "cursor-not-allowed bg-gray-400"
                    : "hover:bg-green-700"
                } `}
                onClick={() => {
                  setLoading(true);
                  setCookies();
                }}
                disabled={total < 500}
                aria-label="Checkout button checkoutBtn"
              >
                <div className="relative flex-grow text-lg  font-bold">
                  <div className="absolute right-40">
                    {loading ? <GenericSpinner diameter={40} /> : ""}
                  </div>
                  Checkout
                </div>
              </button>
            </div>
          )
        ) : null}
      </Styled.CartWrapper>
    </Styled.ShoppingCartContainer>
  );
};

export default ShoppingCart;
//admin update
//admin update
