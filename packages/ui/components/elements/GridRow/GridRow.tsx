import type { GridProps as MuiGridProps } from "@mui/material/Grid";
import MuiGrid from "@mui/material/Grid";

import type { SpacingFactor } from "../../foundations/spacing";
import { useTheme } from "../../foundations/theming";

type GridRowProps = Pick<
  MuiGridProps,
  "alignItems" | "children" | "justifyContent"
> & {
  /**
   * The semantic HTML tag to use when rendering the component.
   */
  tag?: "div" | "ol" | "ul";
  /**
   * Defines the vertical space between GridColumn elements.
   */
  rowSpacing?: SpacingFactor;
};

export function GridRow({
  tag = "div",
  alignItems,
  justifyContent,
  rowSpacing,
  children,
  ...props
}: GridRowProps) {
  const { grid } = useTheme();
  return (
    <MuiGrid
      alignItems={alignItems}
      columnSpacing={grid?.gutter?.spacing}
      component={tag}
      container
      justifyContent={justifyContent}
      rowSpacing={rowSpacing}
      {...props}
    >
      {children}
    </MuiGrid>
  );
}
