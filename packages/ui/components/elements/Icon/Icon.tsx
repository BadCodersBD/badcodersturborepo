import type { Property } from "csstype";

import type { iconSizes } from "./Icon.styled";
import { Styled } from "./Icon.styled";
import { useTitleId } from "./useTitleId";

const ICONS_SPRITE = "/icons.svg";
const ICON_BASE_DIMENSION = 24;

export const iconNames = [
  "accessories",
  "add",
  "addFilled",
  "arrowDown",
  "arrowLeft",
  "arrowRight",
  "arrowUp",
  "bagEmpty",
  "bagFilled",
  "calendarAdded",
  "calendarEmpty",
  "call",
  "change",
  "chat",
  "checkmark",
  "chevronDown",
  "chevronLeft",
  "chevronRight",
  "chevronUp",
  "close",
  "collapse",
  "customPackaging",
  "designYourOwn",
  "ecoFriendly",
  "edit",
  "expand",
  "external",
  "facebook",
  "filter",
  "flagAustria",
  "flagBelgium",
  "flagDenmark",
  "flagFrance",
  "flagGermany",
  "flagIreland",
  "flagItaly",
  "flagLuxembourg",
  "flagNetherlands",
  "flagPoland",
  "flagSpain",
  "flagSwitzerland",
  "flagUkraine",
  "flagUnitedKingdom",
  "flagUnitedStates",
  "gift",
  "heartEmpty",
  "heartFilled",
  "hide",
  "info",
  "inspiration",
  "instagram",
  "location",
  "marker",
  "menu",
  "mixYourFlavors",
  "mLetter",
  "order",
  "pause",
  "person",
  "pinterest",
  "play",
  "remove",
  "reset",
  "ruler",
  "save",
  "search",
  "share",
  "shipping",
  "show",
  "shuffle",
  "snowflake",
  "subtract",
  "subtractFilled",
  "text",
  "thumbsDown",
  "thumbsUp",
  "twitter",
  "upload",
  "warning",
  "youtube",
] as const;

export type IconName = typeof iconNames[number];
export type IconSize = keyof typeof iconSizes;

export type IconProps = {
  /**
   * The name of the icon.
   */
  name: IconName;
  /**
   * The title of the icon.
   */
  title?: string;
  /**
   * DEPRECATED: DON'T USE
   */
  color?: Property.Color;
  /**
   * The size of the icon.
   */
  size?: IconSize;
  /**
   * The size of the icon.
   */
  hidden?: boolean;
};

/**
 * Icon element to show regular icons in customizable variants.
 * Some icons are dependent on IconDefinitions, so that should be included (once) in the page if Icon is used.
 */
export function Icon({
  title,
  name,
  color = "currentColor",
  size = "medium",
  hidden,
}: IconProps) {
  const titleId = useTitleId(title);

  // Note: In case the Design Your Own icon is requested, it will show an icon source outside of the icons sprite, since it gave cross browser rendering issues when used within the sprite.
  const iconSource = <use xlinkHref={`${ICONS_SPRITE}#${name}`} />;

  const nonImageRole = hidden ? "presentation" : undefined;

  return (
    <Styled.Icon
      aria-hidden={title ? undefined : true}
      aria-labelledby={titleId}
      color={color}
      fill="none"
      focusable={false}
      height={ICON_BASE_DIMENSION}
      role={title ? "img" : nonImageRole}
      size={size}
      viewBox={`0 0 ${ICON_BASE_DIMENSION} ${ICON_BASE_DIMENSION}`}
      width={ICON_BASE_DIMENSION}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {title && <title id={titleId}>{title}</title>}
      {iconSource}
    </Styled.Icon>
  );
}
