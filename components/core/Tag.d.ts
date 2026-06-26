import React from "react";

/**
 * Small mono chip for tech-stack / category labels (WordPress, WooCommerce…).
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** default outline · solid fill · accent neon */
  variant?: "default" | "solid" | "accent";
  /** show a leading status dot */
  dot?: boolean;
}

export function Tag(props: TagProps): JSX.Element;
