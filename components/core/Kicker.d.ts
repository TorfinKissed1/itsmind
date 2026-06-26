import React from "react";

/**
 * Section eyebrow — the brand's signature two-digit index + short label
 * ("01 Почему сайты молчат"). Index renders in the accent colour.
 */
export interface KickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** two-digit index, e.g. "01" */
  index?: string;
  /** show a short rule between index and label */
  rule?: boolean;
}

export function Kicker(props: KickerProps): JSX.Element;
