import type { Breakpoint } from "../../foundations/breakpoints";
import type { AspectRatio } from "../../../types/AspectRatio";
import type { TwelveColumnGridSpan } from "../GridColumn";
import { Styled } from "./Image.styled";
import { usePictureTagSources } from "./usePictureTagSources";

export type ContextlessImageProps = Pick<ImageProps, "alt"> & { href: string };

export type ImageProps = {
  /**
   * If set, will use this "img" react component instead of defining its own.
   */
  component?: React.ElementType<JSX.IntrinsicElements["img"]>;
  /**
   * The picture tag sources; list containing properties: "media", "srcSet" (list containing properties: "url" & "width"), "span" & "type".
   */
  sources: Array<ImageSource>;
  alt: string;
  lazy?: boolean;
  aspectRatio?: AspectRatio;
  onLoad?: () => void;
};

export type ImageSource = SpanImageSource | SizesImageSource;

type SpanImageSource = SharedImageSource & {
  /**
   * If set, will calculate the source tag 'sizes' attribute based on the width of the span in the grid system.
   */
  span?: Extract<TwelveColumnGridSpan, number>;
};

type SizesImageSource = SharedImageSource & {
  /**
   * If set, will pass the value (in px) to the source tag 'sizes' attribute.
   */
  sizes: string;
};

type SharedImageSource = {
  /**
   * If set, will provide the source tag 'media' attribute with a min-width media query for the specified breakpoint.
   */
  mediaMinWidth?: Breakpoint;
  /**
   * The srcset entries that will be used in the source tag 'srcset' attribute.
   */
  srcSet: Array<ImageSourceSrcSetEntry>;
  /**
   * If set, will pass the value to the source tag 'type' attribute.
   */
  type?: string;
};

type ImageSourceSrcSetEntry = {
  src: string;
  width: number;
};

export function Image({
  component,
  sources,
  alt,
  lazy = true,
  ...props
}: ImageProps) {
  const { htmlSources, fallbackSrc } = usePictureTagSources(sources);

  const ImageComponent = component ?? Styled.Image;

  return (
    <picture>
      {/* <Image {...props} alt={alt ?? ""} src={fallbackSrc} /> */}
    </picture>
  );
}

export function isSizesImageSource(
  source: ImageSource
): source is SizesImageSource {
  return !!(source as SizesImageSource).sizes;
}
