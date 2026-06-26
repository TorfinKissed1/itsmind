import React from "react";

/**
 * The shared reveal primitive. Wraps children, watches with IntersectionObserver,
 * and applies the brand's rise+fade(+de-blur) entrance once on enter. All variants
 * share timing/easing from motion tokens — only the "from" transform differs, so the
 * whole site reads as ONE reveal system. Base = visible end-state (print/no-JS safe).
 */
export function Reveal({
  children,
  as = "div",
  variant = "up",      // up | left | right | scale
  index = 0,           // stagger step (sets --i)
  once = true,
  threshold = 0.18,
  className = "",
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setShown(true);
          if (once) io.unobserve(e.target);
        } else if (!once) {
          setShown(false);
        }
      });
    }, { threshold, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const Tag = as;
  const attr = variant === "up" ? "" : variant; // [data-reveal] vs [data-reveal="left"] ...
  return (
    <Tag
      ref={ref}
      data-reveal={attr || true}
      className={`${shown ? "is-in" : ""} ${className}`}
      style={{ "--i": index, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
