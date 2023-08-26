import Image from "next/image";
import { DiscountStyleDefault } from "./Discount.Style";
import { useTranslation } from "next-i18next";

type Props = {
  title: string;
  discount: number;
};

const DiscountDefault = ({ title, discount }: Props) => {
  const { t } = useTranslation("ProductWidget");

  return (
    <div className={"absolute right-2 top-2"}>
      <Image
        src="https://i.ibb.co/ydCY54w/discount2.png"
        width={70}
        height={70}
        alt={title}
      />
      <DiscountStyleDefault>
        <div className="flex font-semibold leading-none">
          <h2 className="-mt-2 text-3xl">{t(discount)}</h2>
          <p className="text-xs leading-3">
            {t(`%`)}
            <br /> {t(`OFF`)}
          </p>
        </div>
        <p className="-mt-[0.06rem] ml-2 text-[0.50rem] font-semibold">
          {t(`Discount`)}
        </p>
      </DiscountStyleDefault>
    </div>
  );
};

export default DiscountDefault;
