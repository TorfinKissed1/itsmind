import React from "react";

declare type ButtonVariant = "primary" | "secondary" | "ghost";
declare type ButtonSize = "sm" | "md" | "lg";

/**
 * Primary brand button — neon pill with three variants and an optional
 * trailing typographic mark (→ ↗). Hover lifts + glows; press shrinks.
 *
 * @startingPoint section="Core" subtitle="Neon pill button, 3 variants" viewport="700x200"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** primary = neon fill · secondary = ghost outline · ghost = text only */
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** trailing mark, e.g. "→" or "↗", or any node */
  icon?: React.ReactNode;
  /** render as a different element, e.g. "a" */
  as?: keyof JSX.IntrinsicElements;
  disabled?: boolean;
}

export function Button(props: ButtonProps): JSX.Element;
