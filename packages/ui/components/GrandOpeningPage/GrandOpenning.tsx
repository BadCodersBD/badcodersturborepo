import Product from "ui/components/GrandOpeningPage/productAnimation/Products";
import Brand from "ui/components/GrandOpeningPage/Brand";
import Countdown from "ui/components/GrandOpeningPage/CountDown";

export const GrandOpenning = ({
  productData,
  data,
}: {
  productData: any;
  data: any;
}) => {
  const randomNumberOfProductIndex =
    productData.length < 12
      ? 0
      : Math.floor(Math.random() * (productData.length - 12));

  return (
    <div className="flex h-full w-full flex-col items-center justify-center lg:h-screen">
      <div className="relative grid w-full grid-cols-1 items-center justify-center lg:grid-cols-7">
        <div className="hidden lg:col-span-2 lg:block">
          <Product
            product={productData.slice(
              randomNumberOfProductIndex,
              randomNumberOfProductIndex + 6
            )}
          />
        </div>
        <div className="lg:col-span-3">
          {data.gradientText ? (
            <Brand
              logoUrl={data.logUrl}
              color={data.gradientTextPropertise}
              brandSlugan={data.brandSlugan}
            />
          ) : (
            <Brand
              logoUrl={data.logUrl}
              color={data.color}
              brandSlugan={data.brandSlugan}
            />
          )}
          {/* <Brand
            logoUrl={data.logUrl}
            color={data.color}
            brandSlugan={data.brandSlugan}
          /> */}
        </div>
        <div className="hidden lg:col-span-2 lg:block">
          <Product
            product={productData.slice(
              randomNumberOfProductIndex + 6,
              randomNumberOfProductIndex + 12
            )}
          />
        </div>
      </div>
      <div className="mt-2 w-full">
        <Countdown date={data.date} />
      </div>
    </div>
  );
};

export default GrandOpenning;
