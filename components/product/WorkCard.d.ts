import React from "react";

/**
 * Portfolio / works card — thumbnail of a real site (grayscale at rest, colour on
 * hover), LIVE badge, ↗ open affordance, name + kind + blurb + stack tags. Whole
 * card links out. "Не скриншоты. Сами сайты."
 *
 * @startingPoint section="Product" subtitle="Portfolio work card, live site" viewport="420x420"
 */
export interface WorkCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  name: React.ReactNode;
  /** short kind label, e.g. "Интернет-магазин" */
  kind?: React.ReactNode;
  description?: React.ReactNode;
  /** thumbnail image src */
  image?: string;
  alt?: string;
  /** show the LIVE badge (default true) */
  live?: boolean;
  href?: string;
  /** stack tags, e.g. ["WordPress","WooCommerce"] */
  tags?: React.ReactNode[];
}

export function WorkCard(props: WorkCardProps): JSX.Element;
