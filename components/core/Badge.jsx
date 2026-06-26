import React from "react";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-badge{
  display:inline-flex; align-items:center; gap:.5em;
  font-family:var(--font-mono); font-size:var(--fs-mono); font-weight:var(--w-medium);
  letter-spacing:var(--ls-wide); text-transform:uppercase; line-height:1;
  padding:.5em .9em; border-radius:var(--radius-sm);
  border:1px solid var(--border); color:var(--text-secondary); background:var(--glass);
}
.lst-badge__pulse{ position:relative; width:.5em; height:.5em; border-radius:var(--radius-full); background:var(--accent); box-shadow:var(--glow-sm); }
.lst-badge__pulse::after{ content:""; position:absolute; inset:0; border-radius:inherit; background:var(--accent); animation: ds-pulse var(--dur-ambient) ease-in-out infinite; }
.lst-badge--live{ color:var(--text-primary); }
`;

/** Status badge — e.g. "Беру проекты в работу · отвечаю в течение часа". */
export function Badge({ children, live = false, className = "", ...rest }) {
  useStyle("lst-badge", CSS);
  return (
    <span className={`lst-badge ${live ? "lst-badge--live" : ""} ${className}`} {...rest}>
      {live && <span className="lst-badge__pulse" aria-hidden="true" />}
      {children}
    </span>
  );
}
