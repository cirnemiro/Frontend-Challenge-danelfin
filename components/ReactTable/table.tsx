import Link, { LinkProps } from "next/link";
import * as React from "react";

interface ITableLinkCellProps extends LinkProps {
  children: React.ReactNode;
}

interface ITableImprovementCellProps {
  improvement: number;
  isPercentage?: boolean;
  placeholder?: string;
}

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative min-w-full overflow-auto border-xs border-border-subtle">
    <table ref={ref} className={className} {...props} />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={className} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={className} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={className} {...props} />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr ref={ref} className={className} {...props} />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={className} {...props} />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={className} {...props} />
));
TableCell.displayName = "TableCell";

const TableLinkCell = React.forwardRef<HTMLAnchorElement, ITableLinkCellProps>(
  ({ children, ...props }, ref) => (
    <Link ref={ref} href={props.href} className={""}>
      {children}
    </Link>
  )
);

TableLinkCell.displayName = "TableLinkCell";

const TableImprovementCell = ({
  improvement,
  isPercentage,
  placeholder = "-",
}: ITableImprovementCellProps) => {
  const textClass =
    improvement > 0
      ? "text-content-utility-success"
      : improvement < 0
      ? "text-content-utility-warning"
      : "text-content-text-subtlest";
  return (
    <p className={""}>
      {improvement ? improvement > 0 ? <div>icon</div> : <div>icon</div> : null}
      {improvement
        ? improvement?.toFixed(1) + (isPercentage ? "%" : "")
        : placeholder}
    </p>
  );
};

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={""} {...props} />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableImprovementCell,
  TableLinkCell,
  TableRow,
};
