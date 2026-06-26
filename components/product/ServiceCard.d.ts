import React from "react";

/**
 * Service offering card — title + blurb + price, with the brand's hover top-rule
 * draw and arrow nudge. Used in the services grid ("Сайт под ключ", "Ускорение"…).
 * Price may contain a <b> for the accent number, e.g. "от <b>15 000 ₽</b>".
 *
 * @startingPoint section="Product" subtitle="Service offering card with price" viewport="380x240"
 */
export interface ServiceCardProps extends React.HTMLAttributes<HTMLElement> {
  title: React.ReactNode;
  description: React.ReactNode;
  /** price line; wrap the figure in <b> for accent */
  price?: React.ReactNode;
  /** optional accent tag, e.g. "под ключ" */
  tag?: React.ReactNode;
  /** renders as <a> when provided */
  href?: string;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
