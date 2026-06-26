import React from "react";

/** Labelled multiline input, matching Input's dark/neon styling. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
}

export function Textarea(props: TextareaProps): JSX.Element;
