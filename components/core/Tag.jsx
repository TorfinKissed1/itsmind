import React from "react";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-tag{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-mono); font-size:var(--fs-mono); font-weight:var(--w-medium);
  letter-spacing:var(--ls-wide); text-transform:uppercase; line-height:1;
  padding:.45em .8em; border-radius:var(--radius-pill);
  border:1px solid var(--border); color:var(--text-secondary); background:transparent;
  transition: color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.lst-tag--solid{ background:var(--surface-inset); color:var(--text-primary); border-color:transparent; }
.lst-tag--accent{ color:var(--accent); border-color:color-mix(in srgb, var(--accent) 45%, transparent); background:var(--accent-wash); }
.lst-tag__dot{ width:.45em; height:.45em; border-radius:var(--radius-full); background:currentColor; }
`;

/** Small mono category chip (tech stack, filters). */
export function Tag({ children, variant = "default", dot = false, className = "", ...rest }) {
  useStyle("lst-tag", CSS);
  return (
    <span className={`lst-tag lst-tag--${variant} ${className}`} {...rest}>
      {dot && <span className="lst-tag__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
