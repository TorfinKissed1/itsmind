import React from "react";

/**
 * Labelled text input — dark inset field, mono label, neon focus glow.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** mono uppercase label above the field */
  label?: React.ReactNode;
  /** helper / error text below */
  hint?: React.ReactNode;
  /** error styling */
  error?: boolean;
}

export function Input(props: InputProps): JSX.Element;
