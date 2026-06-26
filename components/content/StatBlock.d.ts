import React from "react";

/**
 * A single metric: big display value (+ optional accent mark) over a mono label.
 * E.g. "5+ лет", "5.0★ Kwork", "1500₽ в час".
 */
export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** the number / value, e.g. "5+" or "1500₽" */
  value: React.ReactNode;
  /** optional trailing mark rendered in accent, e.g. "★" */
  mark?: React.ReactNode;
  /** mono caption below */
  label: React.ReactNode;
}

export function StatBlock(props: StatBlockProps): JSX.Element;
