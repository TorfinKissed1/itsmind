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
.lst-work{
  position:relative; display:block; text-decoration:none; color:inherit;
  border:1px solid var(--border); border-radius:var(--radius-lg); overflow:hidden;
  background:var(--surface-card);
  transition: border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out);
}
.lst-work:hover{ border-color:var(--accent); box-shadow:var(--glow-md); transform:translateY(-4px); }
.lst-work__media{ position:relative; aspect-ratio:16/10; overflow:hidden; background:var(--ink-700); }
.lst-work__img{ width:100%; height:100%; object-fit:cover; display:block;
  filter:grayscale(1) contrast(1.05) brightness(.8); transform:scale(1.02);
  transition: filter var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out); }
.lst-work:hover .lst-work__img{ filter:grayscale(0) contrast(1.05) brightness(1); transform:scale(1.06); }
.lst-work__tint{ position:absolute; inset:0; background:
  linear-gradient(180deg, transparent 35%, color-mix(in srgb, var(--bg-base) 88%, transparent)),
  radial-gradient(80% 60% at 70% 10%, var(--accent-wash), transparent 60%);
  pointer-events:none; }
.lst-work__live{ position:absolute; top:var(--space-4); left:var(--space-4); z-index:2; }
.lst-work__open{ position:absolute; top:var(--space-4); right:var(--space-4); z-index:2;
  width:38px; height:38px; display:grid; place-items:center; border-radius:var(--radius-full);
  background:var(--glass-strong); border:1px solid var(--border); color:var(--text-primary);
  font-family:var(--font-mono); transition: background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out); }
.lst-work:hover .lst-work__open{ background:var(--accent); color:var(--accent-contrast); transform:translate(2px,-2px); }
.lst-work__body{ padding:var(--space-5); display:flex; flex-direction:column; gap:var(--space-3); }
.lst-work__head{ display:flex; align-items:baseline; justify-content:space-between; gap:1rem; }
.lst-work__name{ font-family:var(--font-display); font-weight:var(--w-semibold); font-size:var(--fs-h4); letter-spacing:var(--ls-tight); margin:0; }
.lst-work__kind{ font-family:var(--font-mono); font-size:var(--fs-mono); letter-spacing:var(--ls-wide); text-transform:uppercase; color:var(--accent); }
.lst-work__desc{ font-family:var(--font-body); font-size:var(--fs-small); line-height:var(--lh-body); color:var(--text-secondary); margin:0; }
.lst-work__tags{ display:flex; gap:.5rem; flex-wrap:wrap; margin-top:var(--space-2); }
`;

/** Portfolio card — real-site thumbnail (duotone→color on hover), LIVE badge, stack tags. */
export function WorkCard({ name, kind, description, image, alt = "", live = true, href, tags = [], className = "", ...rest }) {
  useStyle("lst-work-card", CSS);
  return (
    <a className={`lst-work ${className}`} href={href} target="_blank" rel="noreferrer" {...rest}>
      <div className="lst-work__media">
        {image
          ? <img className="lst-work__img" src={image} alt={alt} loading="lazy" />
          : <div className="lst-work__img" />}
        <div className="lst-work__tint" />
        {live && <span className="lst-work__live"><Tag variant="accent" dot>LIVE</Tag></span>}
        <span className="lst-work__open" aria-hidden="true">↗</span>
      </div>
      <div className="lst-work__body">
        <div className="lst-work__head">
          <h3 className="lst-work__name">{name}</h3>
          {kind && <span className="lst-work__kind">{kind}</span>}
        </div>
        {description && <p className="lst-work__desc">{description}</p>}
        {tags.length > 0 && (
          <div className="lst-work__tags">
            {tags.map((t, i) => <Tag key={i}>{t}</Tag>)}
          </div>
        )}
      </div>
    </a>
  );
}
