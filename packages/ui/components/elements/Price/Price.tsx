import type { WithSpacing } from "../../foundations/spacing";
import type { CustomTypography } from "../../foundations/typography";
import { Typography } from "../Typography";
import { VisuallyHidden } from "../VisuallyHidden";
import { Styled } from "./Price.styled";

export type Sizes = {
  extraSmall: string;
  small: string;
  medium: string;
  mediumBold: string;
  large: string;
  smallBold: string;
};
export type Size = keyof Sizes;

export type PriceRange = {
  minPrice: PriceTypeProps;
  maxPrice: PriceTypeProps;
};
export type PriceVariants = {
  price?: PriceTypeProps;
  priceRange?: PriceRange;
  startingPrice?: string;
  pricePerWeight?: string;
  isVATIncluded?: boolean;
};

export type PriceValue = {
  amount: number;
  centAmount: number;
  formattedPrice: string;
  currencyCode: string;
};

export type PriceTypeProps = PriceValue & {
  formattedWasPrice?: string;
  wasPriceCentAmount?: number;
};

export type PriceProps = WithSpacing<{
  size: Size;
  wasPriceSize?: Size;
  excludedVATLabelSize?: Size;
  priceData: PriceVariants;
  currentPriceInstruction?: string;
  wasPriceInstruction?: string;
  excludedVATLabel?: string;
}>;

const variants: Record<PriceProps["size"], keyof CustomTypography> = {
  extraSmall: "bodyExtraSmall",
  medium: "bodyMedium",
  mediumBold: "h6BoldSans",
  large: "h5BoldSerif",
  smallBold: "bodySmallBoldSans",
  small: "bodySmall",
};

export function Price({
  size,
  wasPriceSize,
  priceData,
  currentPriceInstruction,
  wasPriceInstruction,
  excludedVATLabel,
  excludedVATLabelSize,
  ...props
}: PriceProps) {
  const {
    price,
    priceRange,
    startingPrice,
    pricePerWeight,
    isVATIncluded = true,
  } = priceData;
  const wasPrice = price?.formattedWasPrice;
  const minPrice = priceRange?.minPrice.formattedPrice || price?.formattedPrice;
  const maxPrice =
    priceRange?.maxPrice?.formattedPrice !== minPrice
      ? priceRange?.maxPrice.formattedPrice
      : "";
  const showWasPrice = !startingPrice && !priceRange && wasPrice;
  const isExclVATNewLine =
    showWasPrice ||
    pricePerWeight ||
    startingPrice ||
    (!startingPrice && maxPrice);

  return (
    <Styled.Price {...props} tag="span" variant={variants[size]}>
      {showWasPrice && (
        <VisuallyHidden>{currentPriceInstruction}</VisuallyHidden>
      )}
      <span>{startingPrice || minPrice}</span>
      {!startingPrice && maxPrice && <span> – {maxPrice}</span>}
      {showWasPrice && (
        <>
          <VisuallyHidden>{wasPriceInstruction}</VisuallyHidden>
          <Styled.WasPrice
            variant={wasPriceSize ? variants[wasPriceSize] : variants[size]}
          >
            {wasPrice}
          </Styled.WasPrice>
        </>
      )}
      {pricePerWeight && (
        <Typography display="block" variant="bodyMedium">
          {`(${pricePerWeight})`}
        </Typography>
      )}
      {!isVATIncluded && excludedVATLabel && (
        <Styled.ExclVAT
          display={isExclVATNewLine ? "block" : undefined}
          variant={
            excludedVATLabelSize
              ? variants[excludedVATLabelSize]
              : variants.extraSmall
          }
        >
          {excludedVATLabel}
        </Styled.ExclVAT>
      )}
    </Styled.Price>
  );
}
