import React from "react";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-card{
  position:relative; display:flex; flex-direction:column; gap:var(--space-4);
  background:var(--surface-card); border:1px solid var(--border);
  border-radius:var(--radius-lg); padding:var(--space-6); overflow:hidden;
  transition: border-color var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.lst-card--hover:hover{
  border-color:var(--accent); box-shadow:var(--glow-sm);
  transform:translateY(-3px); background:var(--surface-card-hover);
}
.lst-card__idx{
  position:absolute; top:var(--space-5); right:var(--space-5);
  font-family:var(--font-mono); font-size:var(--fs-mono); letter-spacing:var(--ls-wide);
  color:var(--text-muted);
}
.lst-card--accent{ border-color:color-mix(in srgb, var(--accent) 35%, transparent); }
.lst-card--accent::before{
  content:""; position:absolute; inset:0; background:var(--grad-spot); opacity:.6; pointer-events:none;
}
.lst-card > *{ position:relative; }
`;

/** Generic surface card — hairline border, hover lift+glow, optional corner index. */
export function Card({ children, index, hover = true, accent = false, className = "", ...rest }) {
  useStyle("lst-card", CSS);
  return (
    <div className={`lst-card ${hover ? "lst-card--hover" : ""} ${accent ? "lst-card--accent" : ""} ${className}`} {...rest}>
      {index != null && <span className="lst-card__idx">{index}</span>}
      {children}
    </div>
  );
}
