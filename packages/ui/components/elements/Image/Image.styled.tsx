import styled from "@emotion/styled";

import { splitAspectRatio } from "../../utils/splitAspectRatio";
import type { ImageProps } from "./Image";

const Image = styled.img<Pick<ImageProps, "aspectRatio">>`
  aspect-ratio: ${({ aspectRatio }) =>
    aspectRatio && splitAspectRatio(aspectRatio).join("/")};
  display: block;
  width: 100%;
`;

export const Styled = {
  Image,
};
