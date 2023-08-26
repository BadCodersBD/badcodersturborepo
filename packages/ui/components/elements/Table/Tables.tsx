import MuiTable from "@mui/material/Table";
import MuiTableBody from "@mui/material/TableBody";
import MuiTableRow from "@mui/material/TableRow";
import type { ReactNode } from "react";

import type { CustomTypography } from "../../foundations/typography";
import { Typography } from "../Typography";
import { VisuallyHidden } from "../VisuallyHidden";
import type { TableBorder } from "./Tables.styled";
import { Styled } from "./Tables.styled";

type BaseTableProps = { children: ReactNode };

export type TableProps = BaseTableProps & {
  borderTop?: TableBorder;
  caption?: string;
};

export function Tables({ borderTop, caption, children, ...props }: TableProps) {
  return (
    <Styled.TableWrapper borderTop={borderTop}>
      <MuiTable {...props}>
        {caption && <VisuallyHidden tag="caption">{caption}</VisuallyHidden>}
        {children}
      </MuiTable>
    </Styled.TableWrapper>
  );
}

export type TableHeadProps = BaseTableProps & {
  hidden?: boolean;
};

export function TableHead({
  hidden = false,
  children,
  ...props
}: TableHeadProps) {
  return (
    <Styled.TableHead {...props} hidden={hidden}>
      {children}
    </Styled.TableHead>
  );
}

export type TableBodyProps = BaseTableProps;

export function TableBody({ children, ...props }: TableBodyProps) {
  return <MuiTableBody {...props}>{children}</MuiTableBody>;
}

export type TableRowProps = BaseTableProps;

export function TableRow({ children, ...props }: TableRowProps) {
  return <MuiTableRow {...props}>{children}</MuiTableRow>;
}

export type TableCellProps = BaseTableProps & {
  align?: "left" | "center" | "right";
  border?: TableBorder;
  typography?: keyof CustomTypography;
};

export function TableCell({
  align = "left",
  border = "default",
  typography,
  children,
  ...props
}: TableCellProps) {
  return (
    <Styled.TableCell {...props} align={align} border={border}>
      {typography ? (
        <Typography variant={typography}>{children}</Typography>
      ) : (
        children
      )}
    </Styled.TableCell>
  );
}
