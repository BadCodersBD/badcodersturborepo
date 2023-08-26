import { Styled } from "../GrandOpening.styled";
import { urlForThumbnail } from "../../utils/cms/imageProcess";
import Image from "next/image";

const BrandProductImage = ({ data, delays }: { data: any; delays: any }) => {
  return (
    <div className="flex flex-wrap items-center justify-around gap-2">
      {data.map((product: any, index: number) => (
        <Styled.ImageContainer
          key={index}
          className="relative h-32 w-32"
          style={{ animationDelay: delays[index] }}
        >
          <Image
            src={urlForThumbnail(product.image.asset._ref)}
            alt={product.item}
            fill
            className="object-contain"
          />
        </Styled.ImageContainer>
      ))}
    </div>
  );
};

export default BrandProductImage;
