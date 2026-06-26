import React from "react";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-ta{ display:flex; flex-direction:column; gap:.5rem; }
.lst-ta__label{
  font-family:var(--font-mono); font-size:var(--fs-mono); letter-spacing:var(--ls-wide);
  text-transform:uppercase; color:var(--text-secondary);
}
.lst-ta__field{
  width:100%; box-sizing:border-box; min-height:7.5rem; resize:vertical;
  background:var(--surface-inset); color:var(--text-primary);
  border:1px solid var(--border); border-radius:var(--radius-md);
  padding:.85rem 1rem; font-family:var(--font-body); font-size:var(--fs-body); line-height:var(--lh-body);
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.lst-ta__field::placeholder{ color:var(--text-muted); }
.lst-ta__field:hover{ border-color:var(--border-strong); }
.lst-ta__field:focus{ outline:none; border-color:var(--accent); box-shadow:var(--glow-inset); background:var(--ink-700); }
`;

/** Labelled multiline input. */
export function Textarea({ label, id, className = "", ...rest }) {
  useStyle("lst-textarea", CSS);
  const fid = id || React.useId();
  return (
    <div className={`lst-ta ${className}`}>
      {label && <label className="lst-ta__label" htmlFor={fid}>{label}</label>}
      <textarea id={fid} className="lst-ta__field" {...rest} />
    </div>
  );
}
