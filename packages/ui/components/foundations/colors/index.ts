function toRgbValues(hexCode: string) {
  return hexCode
    .match(/[0-9abcdef]{2}/gi)!
    .map((d) => +`0x${d}`)
    .join(", ");
}
export const colors = {
  asRgb: (hexCode: string) => `rgb(${toRgbValues(hexCode)})`,
  asRgba: (hexCode: string, opacity: number) =>
    `rgba(${toRgbValues(hexCode)}, ${opacity})`,
  primary: {
    green: "#00954D",
    blue: "#0056A4",
    red: "#E92525",
    black: "#151616",
    white: "#FFFFFF",
  },
  secondary: {
    yellow: "#F4C70A",
    brown: "#943C15",
    red: "#D20F0F",
    orange: "#F6580B",
    medium_dark_green: "#327832",
    light_green: "#51FF0D",
    light_yellow: "#FFFF00",
  },
  neutrals: {
    full_white: "#ffffff",
    light_white: "#EAEAEA",
    gray_white: "#D2D2D2",
    full_black: "#000000",
    medium_black: "#111212",
    gray_black: "#333333",
    light_black: "#696969",
    gray98: "#fafafa",
    light_grayish: "#64748b",
    gray7: "#404040",
  },
  productColor: {
    clemon_bg: "#1A8928",
    frutika_bg: "#FE671D",
    shake_bg: "#A71375",
    rivera_bg: "#009A8E",
    speed_bg: "#1C1C1E",
    frutika_grape: "#A058A4",
    naga_mojo: "#F0542A",
    mojo_cola: "#E92525",
    mojo_zero: "#2A2A2A",
    turbo_bg: "#0C6AD0",
    houston_bg: "#0EB04F",
    frutika_mango: "#FE671D",
  },
  tertiary: {
    lightYellow: "#fff2b6",
    lightOrange: "#ffd0b1",
    lightRed: "#ffc3c2",
    lightBlue: "#d4ebff",
    lightBrown: "#f7d3b7",
    lightTeal: "#b8edeb",
    lightGreen: "#caffda",
    lightPurple: "#e3e0ff",
    lightPink: "#ffd8fc",
  },
};
