import React from "react";

function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id; el.textContent = css; document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-marquee{ --_dur:26s; position:relative; width:100%; overflow:hidden;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);
          mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent); }
.lst-marquee__track{ display:flex; width:max-content; animation: lst-marq var(--_dur) linear infinite; }
.lst-marquee--reverse .lst-marquee__track{ animation-direction:reverse; }
.lst-marquee:hover .lst-marquee__track{ animation-play-state:paused; }
.lst-marquee__group{ display:flex; align-items:center; flex:none; }
.lst-marquee__item{
  display:inline-flex; align-items:center; gap:.9em; padding:0 1.1rem; flex:none;
  font-family:var(--font-display); font-weight:var(--w-semibold);
  font-size:var(--fs-h4); letter-spacing:var(--ls-tight); color:var(--text-primary);
  text-transform:uppercase; white-space:nowrap;
}
.lst-marquee__item:nth-child(even){ color:var(--text-muted); }
.lst-marquee__sep{ color:var(--accent); font-family:var(--font-mono); font-size:1em; }
@keyframes lst-marq{ to{ transform:translateX(-50%); } }
@media (prefers-reduced-motion: reduce){ .lst-marquee__track{ animation:none; } }
`;

/** Infinite horizontal ticker of phrases, separated by an accent mark. */
export function Marquee({ items = [], separator = "—", reverse = false, duration = "26s", className = "", ...rest }) {
  useStyle("lst-marquee", CSS);
  const Group = () => (
    <div className="lst-marquee__group" aria-hidden="true">
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span className="lst-marquee__item">{t}</span>
          <span className="lst-marquee__sep">{separator}</span>
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <div className={`lst-marquee ${reverse ? "lst-marquee--reverse" : ""} ${className}`} {...rest}>
      <div className="lst-marquee__track" style={{ "--_dur": duration }}>
        <Group /><Group />
      </div>
    </div>
  );
}
