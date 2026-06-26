import React from "react";

export interface AccordionItem {
  q: React.ReactNode;
  a: React.ReactNode;
}

/**
 * FAQ accordion — animated +/− toggle, smooth grid-rows expand. Single-open
 * by default; set allowMultiple to keep several open.
 *
 * @startingPoint section="Forms" subtitle="FAQ accordion with neon toggle" viewport="700x340"
 */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** allow multiple panels open at once */
  allowMultiple?: boolean;
  /** index open on mount, or null for all closed */
  defaultOpen?: number | null;
}

export function Accordion(props: AccordionProps): JSX.Element;
