import React from "react";
import { Kicker } from "../core/Kicker.jsx";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-sh{ display:flex; flex-direction:column; gap:var(--space-4); max-width:30ch; }
.lst-sh--wide{ max-width:46ch; }
.lst-sh__title{
  font-family:var(--font-display); font-weight:var(--w-bold);
  font-size:var(--fs-h2); line-height:var(--lh-heading); letter-spacing:var(--ls-tight);
  color:var(--text-primary); margin:0; text-wrap:balance;
}
.lst-sh__title em{ font-style:normal; color:var(--accent); text-shadow:var(--glow-text); }
.lst-sh__lead{
  font-family:var(--font-body); font-size:var(--fs-lead); line-height:var(--lh-body);
  color:var(--text-secondary); margin:0; max-width:52ch;
}
`;

/**
 * Section header: kicker (index + label) over a big display title and an
 * optional lead. Emphasize a word by wrapping it in <em>.
 */
export function SectionHeader({ index, kicker, title, lead, wide = false, className = "", ...rest }) {
  useStyle("lst-section-header", CSS);
  return (
    <header className={`lst-sh ${wide ? "lst-sh--wide" : ""} ${className}`} {...rest}>
      {(kicker || index) && <Kicker index={index}>{kicker}</Kicker>}
      <h2 className="lst-sh__title">{title}</h2>
      {lead && <p className="lst-sh__lead">{lead}</p>}
    </header>
  );
}
