import React from "react";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-stat{ display:flex; flex-direction:column; gap:.35rem; }
.lst-stat__val{
  font-family:var(--font-display); font-weight:var(--w-bold);
  font-size:var(--fs-h3); line-height:1; letter-spacing:var(--ls-tight);
  color:var(--text-primary);
}
.lst-stat__val .lst-stat__mark{ color:var(--accent); }
.lst-stat__label{
  font-family:var(--font-mono); font-size:var(--fs-mono); letter-spacing:var(--ls-wide);
  text-transform:uppercase; color:var(--text-secondary);
}
`;

/** Big number + label, e.g. "5+ лет в коммерческом коде". */
export function StatBlock({ value, mark, label, className = "", ...rest }) {
  useStyle("lst-stat", CSS);
  return (
    <div className={`lst-stat ${className}`} {...rest}>
      <div className="lst-stat__val">
        {value}{mark != null && <span className="lst-stat__mark">{mark}</span>}
      </div>
      <div className="lst-stat__label">{label}</div>
    </div>
  );
}
