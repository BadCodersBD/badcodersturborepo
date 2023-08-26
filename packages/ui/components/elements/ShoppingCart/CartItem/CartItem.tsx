import { useState } from "react";
import Image from "next/image";
import QuantityCount from "./QuantityCount";
import type { CartItemProps } from "../../../../types/ShoppingCart";
import { Styled } from "../ShoppingCart.styled";
import { useThemeContext } from "ui/components/contexts/ThemeContext";
import useProductCount from "../../../utils/cms/ShoppingCart/useProductCount";
import { GenericSpinner } from "ui/components/elements/GenericSpinner/GenericSpinner";
import { useEffect } from "react";

const CartItem = ({
  packSize,
  serial,
  _id,
  item,
  image,
  uom,
  price,
  mrpPrice,
  removeProduct,
  quantity,
  totalFunction,
  IncreaseQty,
  DecreaseQty,
}: CartItemProps) => {
  const [isClickedDelete, setIsClickedDelete] = useState(false);

  const { value, productCount } = useProductCount(quantity, uom);

  const { isDarkMode } = useThemeContext();
  const [subTotal, setSubTotal] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    price !== undefined && setSubTotal(quantity * price);
  }, [price, quantity]);

  const handleIncrementQty = (index: number) => {
    IncreaseQty(index);
    totalFunction(price);
  };

  const handleDecrementQty = (index: number) => {
    if (quantity > 1) {
      DecreaseQty(index);
      totalFunction(-price);
    }
  };

  return (
    <Styled.CartItemGridRow tag="div" columnSpacing={0}>
      <Styled.CartItemGridColumn xs={3} sm={3} lg={3}>
        <div className="relative -ml-4 h-20 w-20 lg:ml-0">
          <Image
            placeholder="blur"
            blurDataURL="/blur-image.png"
            src={image !== undefined ? image : "/blur-image.png"}
            alt={`${item}`}
            fill
            className="object-contain"
          />
        </div>
      </Styled.CartItemGridColumn>
      <Styled.CartItemGridColumn xs={3} sm={6} lg={6}>
        <div className="flex flex-col py-2 text-start text-sm md:text-sm">
          <div className="font-semibold">
            {item}{" "}
            <span className="border border-green-500 px-1 text-xs font-bold text-green-500 opacity-60">
              {packSize}
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:gap-2">
            {productCount.multi > 0 && (
              <QuantityCount
                price={price}
                quantity={productCount.multi}
                image="/multiBottle.png"
              />
            )}
            {productCount.single < 24 && (
              <QuantityCount
                price={price}
                quantity={productCount.single}
                image="/singleBottle.png"
              />
            )}
          </div>
          <div className="my-1 flex items-center gap-2">
            <p className="font-semibold">MRP Price:</p>
            <p className="font-semibold flex gap-2">
              <span className="text-red-500 line-through">৳ {mrpPrice}</span>
              <span>{price}</span>
            </p>
          </div>
          <Styled.DeleteAnimationButton
            href="#"
            className={isClickedDelete ? "active" : ""}
            onClick={() => {
              setLoading(true);
              setIsClickedDelete(true);
              setTimeout(() => {
                removeProduct(_id);
                setLoading(false);
              }, 1000);
            }}
          >
            {loading ? <GenericSpinner diameter={35} /> : ""}
            <span></span>
            <text>Delete</text>
          </Styled.DeleteAnimationButton>
        </div>
      </Styled.CartItemGridColumn>
      <Styled.CartItemGridColumn xs={6} sm={3} lg={3}>
        <div className="flex flex-col items-center pb-2">
          <div className="flex items-end justify-end gap-2 whitespace-nowrap pb-2 text-xs">
            <span className="text-sm">SubTotal: </span>
            <p className="font-semibold">
              <span className="mx-1 text-green-500">৳</span>
              {subTotal}
            </p>
          </div>
          <Styled.CustomNumberInput isDarkMode={isDarkMode}>
            <div
              className="value-button"
              id="decrease"
              onClick={() => handleDecrementQty(serial)}
            >
              -
            </div>
            <input
              type="number"
              id="number"
              value={quantity}
              onChange={(e: React.SyntheticEvent) => {
                e.preventDefault();
              }}
            />
            <div
              className="value-button"
              id="increase"
              onClick={() => handleIncrementQty(serial)}
            >
              +
            </div>
          </Styled.CustomNumberInput>
        </div>
      </Styled.CartItemGridColumn>
    </Styled.CartItemGridRow>
  );
};

export default CartItem;
