import type { GridProps as MuiGridProps } from "@mui/material/Grid";
import MuiGrid from "@mui/material/Grid";

export type FourColumnGridSpan = boolean | "auto" | 3 | 6 | 9 | 12;
export type TwelveColumnGridSpan =
  | FourColumnGridSpan
  | 1
  | 2
  | 4
  | 5
  | 7
  | 8
  | 10
  | 11;

export type GridColumnProps = Pick<MuiGridProps, "children"> & {
  /**
   * The semantic HTML tag to use when rendering the component.
   */
  tag?: "div" | "li" | "nav";
  /**
   * If number, the number of columns to span for the xs breakpoint and upward.
   * If 'auto', the width matches the content.
   * If true, the width grows to use the space available in the row.
   * @default false
   */
  xs?: FourColumnGridSpan;
  /**
   * If number, the number of columns to span for the sm breakpoint and upward.
   * If 'auto', the width matches the content.
   * If true, the width grows to use the space available in the row.
   * @default false
   */
  sm?: FourColumnGridSpan;
  /**
   * If number, the number of columns to span for the md breakpoint and upward.
   * If 'auto', the width matches the content.
   * If true, the width grows to use the space available in the row.
   * @default false
   */
  md?: FourColumnGridSpan;
  /**
   * If number, the number of columns to span for the lg breakpoint and upward.
   * If 'auto', the width matches the content.
   * If true, the width grows to use the space available in the row.
   * @default false
   */
  lg?: TwelveColumnGridSpan;
  /**
   * If number, the number of columns to span for the xl breakpoint and upward.
   * If 'auto', the width matches the content.
   * If true, the width grows to use the space available in the row.
   * @default false
   */
  xl?: TwelveColumnGridSpan;
};

export function GridColumn({
  tag = "div",
  sm,
  md,
  lg,
  xl,
  xs,
  children,
  ...props
}: GridColumnProps) {
  return (
    <MuiGrid
      component={tag}
      item
      lg={lg}
      md={md}
      sm={sm}
      xl={xl}
      xs={xs}
      {...props}
    >
      {children}
    </MuiGrid>
  );
}
