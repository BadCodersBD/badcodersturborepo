import type { ButtonUnstyledProps } from "@mui/base";
import { ButtonUnstyled } from "@mui/base";
import type { ReactElement } from "react";

import type { WithSpacing } from "../../foundations/spacing";
import type { IconProps } from "../Icon";

export type LinkProps = Pick<
  ButtonUnstyledProps,
  "children" | "disabled" | "href" | "onClick"
> &
  WithSpacing<{
    variant?: "primary" | "secondary" | "tertiary";
    alwaysOpenInNewTab?: boolean;
    /**
     * Optional: When a link is used inline, it will use a different appearance.
     */
    inline?: boolean;
    icon?: IconProps["name"];
    iconSize?: IconProps["size"];
    iconPosition?: "before" | "after";
    onFocus?: () => void;
  }>;

export function Link({ children }: LinkProps): ReactElement {
  const renderLink = <ButtonUnstyled>{children}</ButtonUnstyled>;

  return renderLink;
}
