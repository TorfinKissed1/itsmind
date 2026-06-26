import React from "react";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-acc{ border-top:1px solid var(--border); }
.lst-acc__item{ border-bottom:1px solid var(--border); }
.lst-acc__btn{
  width:100%; display:flex; align-items:center; justify-content:space-between; gap:1rem;
  background:none; border:none; cursor:pointer; text-align:left;
  padding:1.4rem 0; color:var(--text-primary);
  font-family:var(--font-body); font-weight:var(--w-medium); font-size:var(--fs-body-lg);
  transition: color var(--dur-base) var(--ease-out);
}
.lst-acc__btn:hover{ color:var(--accent); }
.lst-acc__sign{ flex:none; width:1.4em; height:1.4em; position:relative; color:var(--accent); }
.lst-acc__sign::before,.lst-acc__sign::after{
  content:""; position:absolute; inset:0; margin:auto; background:currentColor;
  transition: transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out);
}
.lst-acc__sign::before{ width:100%; height:2px; }
.lst-acc__sign::after{ width:2px; height:100%; }
.lst-acc__item--open .lst-acc__sign::after{ transform:scaleY(0); opacity:0; }
.lst-acc__panel{ overflow:hidden; display:grid; grid-template-rows:0fr;
  transition: grid-template-rows var(--dur-slow) var(--ease-out); }
.lst-acc__item--open .lst-acc__panel{ grid-template-rows:1fr; }
.lst-acc__inner{ min-height:0; }
.lst-acc__body{
  padding:0 0 1.5rem; max-width:62ch;
  font-family:var(--font-body); font-size:var(--fs-body); line-height:var(--lh-body);
  color:var(--text-secondary);
}
`;

/** FAQ-style accordion. Single-open by default. */
export function Accordion({ items = [], allowMultiple = false, defaultOpen = 0, className = "", ...rest }) {
  useStyle("lst-accordion", CSS);
  const [open, setOpen] = React.useState(() => new Set(defaultOpen == null ? [] : [defaultOpen]));
  const toggle = React.useCallback((i) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  }, [allowMultiple]);
  return (
    <div className={`lst-acc ${className}`} {...rest}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} className={`lst-acc__item ${isOpen ? "lst-acc__item--open" : ""}`}>
            <button className="lst-acc__btn" aria-expanded={isOpen} onClick={() => toggle(i)}>
              <span>{it.q}</span>
              <span className="lst-acc__sign" aria-hidden="true" />
            </button>
            <div className="lst-acc__panel"><div className="lst-acc__inner">
              <div className="lst-acc__body">{it.a}</div>
            </div></div>
          </div>
        );
      })}
    </div>
  );
}
