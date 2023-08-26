import { Styled } from "./AddToCart.styled";
import Image from "next/image";
import { Icon } from "ui/components/elements/Icon";
import { toast } from "react-hot-toast";
import { urlForThumbnail } from "../../utils/cms/imageProcess";

type Props = {
  image: string;
  name?: string;
  price: string;
  prodRefId: string;
  top: number;
  left: number;
  stock?: boolean;
  value?: number;
  minimumquantity?: number;
  handleAddItemClick: (id: string) => void;
};

export const AddToCart = ({
  name,
  image,
  price = "50",
  prodRefId = "Id",
  top = 0,
  left = 0,
  handleAddItemClick,
  stock,
  value,
}: Props) => {
  const notify = () =>
    toast.success(
      <div className="relative flex h-auto items-center justify-between gap-2 rounded-xl bg-white  p-2">
        <Image
          width={30}
          height={30}
          src={urlForThumbnail(image)}
          alt={"mjgjmm"}
        />
        {name} added to the cart
      </div>,
      { position: "top-right" }
    );

  return (
    <>
      <Styled.Button
        onClick={(e) => {
          e.preventDefault();
          if (stock) {
            handleAddItemClick(prodRefId);
            notify();
          } else {
            toast.error(
              <div className="relative flex h-auto items-center justify-between gap-2 rounded-xl bg-white  p-2">
                <Image
                  width={30}
                  height={30}
                  src={urlForThumbnail(image)}
                  alt={"mjgjmm"}
                />
                {name} is out of stock
              </div>,
              { position: "top-center" }
            );
          }
        }}
        style={{ top: top, left: left }}
      >
        <Styled.Price>
          <div className="flex flex-row items-center justify-center">
            <Image
              src="/assets/TakaSymbol.svg"
              width={10}
              height={10}
              style={{ width: "0.75rem", height: "0.75rem" }}
              alt="Taka Symbol"
            />
            <span className="p-1 ">{price}</span>
          </div>
        </Styled.Price>
        <Styled.ShoppingCart>
          <Icon title="add to cart" name="bagEmpty" size="small" />
        </Styled.ShoppingCart>
        <Styled.Buy>Add to cart</Styled.Buy>
      </Styled.Button>
    </>
  );
};
