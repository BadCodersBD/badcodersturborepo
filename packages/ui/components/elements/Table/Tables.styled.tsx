import styled from "@emotion/styled";
import MuiTableCell, { tableCellClasses } from "@mui/material/TableCell";
import MuiTableHead from "@mui/material/TableHead";
import { visuallyHidden } from "@mui/utils";

import type { Theme } from "../../foundations/theming";

export type TableBorder = "default" | "simple" | undefined;

// TODO - use a theme color, not hardcoded ones
function getBorderColor(theme: Theme, borderDesign: TableBorder) {
  return theme.colors.neutrals[
    borderDesign === "simple" ? "black" : "platinum"
  ];
}

const TableWrapper = styled.div<{ borderTop: TableBorder }>`
  border-top-color: ${({ theme, borderTop }) =>
    borderTop && getBorderColor(theme, borderTop)};
  border-top-style: ${({ borderTop }) => borderTop && "solid"};
  border-top-width: ${({ theme, borderTop }) =>
    borderTop && theme.borders.widths.sm};
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;

const TableHead = styled(MuiTableHead)<{ hidden: boolean }>(
  ({ hidden }) => hidden && { ...visuallyHidden }
);

const TableCell = styled(MuiTableCell)<{
  border: TableBorder;
}>`
  border-bottom-color: ${({ theme, border }) => getBorderColor(theme, border)};
  border-bottom-style: solid;
  border-bottom-width: ${({ theme }) => theme.borders.widths.sm};
  color: inherit;
  font: inherit;
  padding: ${({ theme }) => theme.spacing(0.5, 0.25)};
  &.${tableCellClasses.head} {
    border-bottom-color: ${({ theme }) => theme.elements.heading.color};
    color: ${({ theme }) => theme.elements.heading.color};
  }
`;

export const Styled = {
  TableWrapper,
  TableHead,
  TableCell,
};
