import React from "react";
import { Tag } from "../core/Tag.jsx";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-svc{
  position:relative; display:flex; flex-direction:column; gap:var(--space-3);
  background:var(--surface-card); border:1px solid var(--border); border-radius:var(--radius-lg);
  padding:var(--space-6); overflow:hidden; min-height:200px;
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out),
              transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.lst-svc::after{ content:""; position:absolute; left:0; right:0; top:0; height:2px;
  background:var(--grad-accent); transform:scaleX(0); transform-origin:left;
  transition: transform var(--dur-slow) var(--ease-out); }
.lst-svc:hover{ border-color:var(--accent); box-shadow:var(--glow-sm); transform:translateY(-3px); background:var(--surface-card-hover); }
.lst-svc:hover::after{ transform:scaleX(1); }
.lst-svc__title{ font-family:var(--font-display); font-weight:var(--w-semibold);
  font-size:var(--fs-h4); line-height:1.1; letter-spacing:var(--ls-tight); color:var(--text-primary); margin:0; }
.lst-svc__desc{ font-family:var(--font-body); font-size:var(--fs-small); line-height:var(--lh-body);
  color:var(--text-secondary); margin:0; }
.lst-svc__foot{ margin-top:auto; display:flex; align-items:baseline; justify-content:space-between; gap:1rem; padding-top:var(--space-3); }
.lst-svc__price{ font-family:var(--font-mono); font-size:var(--fs-small); color:var(--text-primary); }
.lst-svc__price b{ color:var(--accent); font-weight:var(--w-semibold); }
.lst-svc__arrow{ font-family:var(--font-mono); color:var(--text-muted); transition: transform var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out); }
.lst-svc:hover .lst-svc__arrow{ color:var(--accent); transform:translate(3px,-3px); }
`;

/** Service offering card — title, description, price tag, hover top-rule + arrow. */
export function ServiceCard({ title, description, price, tag, href, className = "", ...rest }) {
  useStyle("lst-service-card", CSS);
  const Root = href ? "a" : "div";
  return (
    <Root href={href} className={`lst-svc ${className}`} {...rest}>
      {tag && <Tag variant="accent">{tag}</Tag>}
      <h3 className="lst-svc__title">{title}</h3>
      <p className="lst-svc__desc">{description}</p>
      <div className="lst-svc__foot">
        <span className="lst-svc__price">{price}</span>
        <span className="lst-svc__arrow" aria-hidden="true">↗</span>
      </div>
    </Root>
  );
}
