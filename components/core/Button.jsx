import React from "react";

/* Inject a component's CSS once. Self-contained; references DS custom props. */
function useStyle(id, css) {
  React.useEffect(() => {
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }, [id, css]);
}

const CSS = `
.lst-btn{
  --_bg: transparent; --_fg: var(--text-primary); --_bd: var(--border);
  display:inline-flex; align-items:center; gap:.6em; justify-content:center;
  font-family:var(--font-body); font-weight:var(--w-semibold);
  letter-spacing:var(--ls-wide); line-height:1; white-space:nowrap;
  border:1px solid var(--_bd); background:var(--_bg); color:var(--_fg);
  border-radius:var(--radius-pill); cursor:pointer; text-decoration:none;
  transition: background var(--dur-base) var(--ease-out),
              color var(--dur-base) var(--ease-out),
              border-color var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              transform var(--dur-fast) var(--ease-out);
}
.lst-btn:focus-visible{ outline:none; box-shadow: var(--glow-inset); }
.lst-btn:active{ transform: scale(.97); }
.lst-btn[disabled]{ opacity:.4; pointer-events:none; }
.lst-btn .lst-btn__icon{ display:inline-flex; transition: transform var(--dur-base) var(--ease-out); }

/* sizes */
.lst-btn--sm{ height:var(--control-sm); padding:0 1.1rem; font-size:var(--fs-small); }
.lst-btn--md{ height:var(--control-md); padding:0 1.6rem; font-size:var(--fs-body); }
.lst-btn--lg{ height:var(--control-lg); padding:0 2.1rem; font-size:var(--fs-body-lg); }

/* primary — neon fill, ink text */
.lst-btn--primary{ --_bg:var(--accent); --_fg:var(--accent-contrast); --_bd:var(--accent); }
.lst-btn--primary:hover{ box-shadow:var(--glow-md); transform:translateY(-2px); }
.lst-btn--primary:hover .lst-btn__icon{ transform:translate(3px,-3px); }

/* secondary — ghost outline that lights up */
.lst-btn--secondary{ --_bg:transparent; --_fg:var(--text-primary); --_bd:var(--border-strong); }
.lst-btn--secondary:hover{ --_fg:var(--accent); --_bd:var(--accent); box-shadow:var(--glow-sm); }
.lst-btn--secondary:hover .lst-btn__icon{ transform:translate(3px,-3px); }

/* ghost — text only */
.lst-btn--ghost{ --_bg:transparent; --_fg:var(--text-secondary); --_bd:transparent; padding-left:.6rem; padding-right:.6rem; }
.lst-btn--ghost:hover{ --_fg:var(--accent); }
`;

/**
 * Primary brand button. Pill, three variants, optional trailing mark.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,           // string mark like "→" / "↗" or a node
  as = "button",
  className = "",
  ...rest
}) {
  useStyle("lst-button", CSS);
  const Tag = as;
  return (
    <Tag className={`lst-btn lst-btn--${variant} lst-btn--${size} ${className}`} {...rest}>
      <span>{children}</span>
      {icon != null && <span className="lst-btn__icon" aria-hidden="true">{icon}</span>}
    </Tag>
  );
}
