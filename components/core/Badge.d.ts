import React from "react";

/**
 * Availability / status badge with an optional pulsing neon dot.
 * Used for "Беру проекты в работу · отвечаю в течение часа".
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** show pulsing accent dot */
  live?: boolean;
}

export function Badge(props: BadgeProps): JSX.Element;
