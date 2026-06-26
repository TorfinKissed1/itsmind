import React from "react";

/**
 * Reveal — the single entrance primitive for the whole brand. Rise+fade(+de-blur)
 * on scroll-in, shared easing/duration, optional stagger index. Use it (or the raw
 * [data-reveal]/.is-in CSS) for ALL content entrances so motion stays one system.
 *
 * @startingPoint section="Motion" subtitle="Scroll rise+fade reveal wrapper" viewport="700x200"
 */
export interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** element to render (default "div") */
  as?: keyof JSX.IntrinsicElements;
  /** entrance direction (shares timing): up | left | right | scale */
  variant?: "up" | "left" | "right" | "scale";
  /** stagger step — sets --i so siblings cascade */
  index?: number;
  /** play once (default) or replay on re-enter */
  once?: boolean;
  /** IntersectionObserver threshold */
  threshold?: number;
}

export function Reveal(props: RevealProps): JSX.Element;
