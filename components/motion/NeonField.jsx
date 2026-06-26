import React from "react";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-field-bg{ position:absolute; inset:0; overflow:hidden; pointer-events:none; z-index:0; }
.lst-field-bg__blob{
  position:absolute; border-radius:var(--radius-full); filter:blur(60px);
  background:radial-gradient(circle at 50% 50%, var(--accent-glow), transparent 70%);
  animation: ds-drift var(--dur-ambient) var(--ease-in-out) infinite; will-change:transform;
}
.lst-field-bg__blob--a{ width:46vmax; height:46vmax; top:-18vmax; left:-10vmax; opacity:.5; }
.lst-field-bg__blob--b{ width:34vmax; height:34vmax; bottom:-14vmax; right:-8vmax; opacity:.35; animation-duration:calc(var(--dur-ambient) * 1.4); animation-direction:reverse; }
.lst-field-bg__grid{
  position:absolute; inset:0; opacity:.5;
  background-image:
    linear-gradient(var(--line-soft) 1px, transparent 1px),
    linear-gradient(90deg, var(--line-soft) 1px, transparent 1px);
  background-size: 64px 64px;
  -webkit-mask-image: radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 80%);
          mask-image: radial-gradient(120% 100% at 50% 0%, #000 30%, transparent 80%);
}
.lst-field-bg__grain{
  position:absolute; inset:0; opacity:.05; mix-blend-mode:overlay;
  background-image: var(--noise-url); background-size:140px 140px;
}
.lst-field-bg__vig{ position:absolute; inset:0; background:var(--grad-vignette); }
@media (prefers-reduced-motion: reduce){ .lst-field-bg__blob{ animation:none; } }
`;

/**
 * Ambient "living" background — two drifting neon glow blobs over a faint masked
 * grid, grain and vignette. Absolutely positioned; place inside a relative section.
 */
export function NeonField({ grid = true, grain = true, vignette = true, className = "", ...rest }) {
  useStyle("lst-neon-field", CSS);
  return (
    <div className={`lst-field-bg ds-ambient ${className}`} aria-hidden="true" {...rest}>
      {grid && <div className="lst-field-bg__grid" />}
      <div className="lst-field-bg__blob lst-field-bg__blob--a" />
      <div className="lst-field-bg__blob lst-field-bg__blob--b" />
      {grain && <div className="lst-field-bg__grain" />}
      {vignette && <div className="lst-field-bg__vig" />}
    </div>
  );
}
