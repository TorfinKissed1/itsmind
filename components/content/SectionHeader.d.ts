import React from "react";

/**
 * Section header — kicker + display title (+ optional lead). Wrap an emphasized
 * word in <em> to render it in the neon accent with a glow.
 *
 * @startingPoint section="Content" subtitle="Kicker + big display title + lead" viewport="700x300"
 */
export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** two-digit index, e.g. "02" */
  index?: string;
  /** short eyebrow label, e.g. "Что я делаю" */
  kicker?: React.ReactNode;
  /** display headline; may contain <em>…</em> for an accent word */
  title: React.ReactNode;
  /** optional supporting paragraph */
  lead?: React.ReactNode;
  /** widen the title measure */
  wide?: boolean;
}

export function SectionHeader(props: SectionHeaderProps): JSX.Element;
