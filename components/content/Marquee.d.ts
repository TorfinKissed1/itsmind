import React from "react";

/**
 * Infinite scrolling ticker of phrases (services, values), separated by an
 * accent mark. Pauses on hover; respects reduced-motion.
 */
export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** phrases to scroll */
  items: React.ReactNode[];
  /** separator between phrases (default "—") */
  separator?: React.ReactNode;
  /** scroll right-to-left? set true to reverse */
  reverse?: boolean;
  /** CSS duration for one loop, e.g. "26s" */
  duration?: string;
}

export function Marquee(props: MarqueeProps): JSX.Element;
