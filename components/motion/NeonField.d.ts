import React from "react";

/**
 * Ambient "living" background: two slow drifting neon glow blobs over a faint
 * masked grid + grain + vignette. The brand's signature dark-canvas atmosphere.
 * Position inside a `position:relative` section; lay content above it (z-index).
 */
export interface NeonFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** show the faint grid (default true) */
  grid?: boolean;
  /** show grain overlay (default true) */
  grain?: boolean;
  /** show vignette (default true) */
  vignette?: boolean;
}

export function NeonField(props: NeonFieldProps): JSX.Element;
