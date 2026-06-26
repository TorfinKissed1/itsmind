import React from "react";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-kicker{
  display:inline-flex; align-items:center; gap:.7em;
  font-family:var(--font-mono); font-size:var(--fs-mono); font-weight:var(--w-medium);
  letter-spacing:var(--ls-kicker); text-transform:uppercase; line-height:1;
  color:var(--text-secondary);
}
.lst-kicker__idx{ color:var(--accent); }
.lst-kicker__rule{ width:2.4em; height:1px; background:var(--border-strong); }
`;

/** Section eyebrow: two-digit index + short label, e.g. "01 Почему сайты молчат". */
export function Kicker({ index, children, rule = false, className = "", ...rest }) {
  useStyle("lst-kicker", CSS);
  return (
    <span className={`lst-kicker ${className}`} {...rest}>
      {index != null && <span className="lst-kicker__idx">{index}</span>}
      {rule && <span className="lst-kicker__rule" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
}
