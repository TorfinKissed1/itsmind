import React from "react";

/**
 * Generic surface card — ink fill, hairline border, optional corner index,
 * hover lift + neon glow. The base container for content blocks.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** corner index, e.g. "01" */
  index?: string;
  /** enable hover lift+glow (default true) */
  hover?: boolean;
  /** add a faint neon spotlight + accent border */
  accent?: boolean;
}

export function Card(props: CardProps): JSX.Element;
