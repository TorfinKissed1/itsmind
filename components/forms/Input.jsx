import React from "react";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-field{ display:flex; flex-direction:column; gap:.5rem; }
.lst-field__label{
  font-family:var(--font-mono); font-size:var(--fs-mono); letter-spacing:var(--ls-wide);
  text-transform:uppercase; color:var(--text-secondary);
}
.lst-input{
  width:100%; height:var(--control-lg); box-sizing:border-box;
  background:var(--surface-inset); color:var(--text-primary);
  border:1px solid var(--border); border-radius:var(--radius-md);
  padding:0 1rem; font-family:var(--font-body); font-size:var(--fs-body);
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.lst-input::placeholder{ color:var(--text-muted); }
.lst-input:hover{ border-color:var(--border-strong); }
.lst-input:focus{ outline:none; border-color:var(--accent); box-shadow:var(--glow-inset); background:var(--ink-700); }
.lst-field--err .lst-input{ border-color:var(--err); }
.lst-field__hint{ font-size:var(--fs-caption); color:var(--text-muted); }
.lst-field--err .lst-field__hint{ color:var(--err); }
`;

/** Labelled text input. Underline-dark field that lights to accent on focus. */
export function Input({ label, hint, error = false, id, className = "", ...rest }) {
  useStyle("lst-input", CSS);
  const fid = id || React.useId();
  return (
    <div className={`lst-field ${error ? "lst-field--err" : ""} ${className}`}>
      {label && <label className="lst-field__label" htmlFor={fid}>{label}</label>}
      <input id={fid} className="lst-input" {...rest} />
      {hint && <span className="lst-field__hint">{hint}</span>}
    </div>
  );
}
