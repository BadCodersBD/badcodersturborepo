import { createContext, useContext } from "react";

import type { AspectRatio } from "../../types/AspectRatio";

export type ImageMediaParams = {
  /**
   * The width to set the image to (in px).
   */
  width: number;
  /**
   * If set, will modify the image aspect ratio.
   */
  aspectRatio?: AspectRatio;
  /**
   * If set, will specify the mime type the image should be returned as.
   */
  format?: "webp";
  /**
   * Decides how the image behaves when resized.
   * In CSS object-fit terms, 'crop' is equivalent to 'cover', and 'middle-center' is equivalent to 'contain'
   * @default 'crop'
   */
  scaleMode?: "crop" | "middle-center";
};

export type FormatImageUrl = (
  imageUrl: string,
  params: ImageMediaParams
) => string;

const FormatImageUrlContext = createContext<FormatImageUrl>(() => "");

export const FormatImageUrlProvider = FormatImageUrlContext.Provider;

export function useFormatImageUrl() {
  return useContext(FormatImageUrlContext);
}
