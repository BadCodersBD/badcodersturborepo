import type { Theme } from "../../foundations/theming";
import type { ImageProps } from "../Image";
import { Image } from "../Image";
import { Styled } from "./ImageShaped.styled";

export type ImageShapedProps = ImageProps & {
  shape: keyof Theme["borders"]["radii"];
  border?: {
    width: keyof Theme["borders"]["widths"];
    color: string;
  };
};

export function ImageShaped({
  shape,
  border,
  ...imageProps
}: ImageShapedProps) {
  return (
    <Styled.Wrapper border={border} shape={shape}>
      <Image {...imageProps} alt="akij-image" />
    </Styled.Wrapper>
  );
}
