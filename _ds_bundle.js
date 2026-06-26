/* @ds-bundle: {"format":3,"namespace":"LstmindDesignSystem_9805c3","components":[{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Marquee","sourcePath":"components/content/Marquee.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/forms/Accordion.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NeonField","sourcePath":"components/motion/NeonField.jsx"},{"name":"Reveal","sourcePath":"components/motion/Reveal.jsx"},{"name":"ServiceCard","sourcePath":"components/product/ServiceCard.jsx"},{"name":"WorkCard","sourcePath":"components/product/WorkCard.jsx"}],"sourceHashes":{"components/content/Card.jsx":"fad12f270994","components/content/Marquee.jsx":"e23e2a49cf55","components/content/SectionHeader.jsx":"0c9fa1aead1d","components/content/StatBlock.jsx":"84f7df4eff0b","components/core/Badge.jsx":"22825f5fe382","components/core/Button.jsx":"1bcbdb9458cf","components/core/Kicker.jsx":"41ccb01c38cc","components/core/Tag.jsx":"e9013f54399e","components/forms/Accordion.jsx":"889d86ff2702","components/forms/Input.jsx":"be3ef7711612","components/forms/Textarea.jsx":"6c8fae6f01e2","components/motion/NeonField.jsx":"700b25dc99f9","components/motion/Reveal.jsx":"2ca3c905a481","components/product/ServiceCard.jsx":"628b4e9be14c","components/product/WorkCard.jsx":"b03a15266d8f","ui_kits/website/app.jsx":"c23da42e739b","ui_kits/website/data.js":"d1c10e775acd","ui_kits/website/parts1.jsx":"0f1fdcf87e45","ui_kits/website/parts2.jsx":"1bf63bb6a89d","ui_kits/website/parts3.jsx":"e7d79346d0c6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LstmindDesignSystem_9805c3 = window.LstmindDesignSystem_9805c3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
.lst-card{
  position:relative; display:flex; flex-direction:column; gap:var(--space-4);
  background:var(--surface-card); border:1px solid var(--border);
  border-radius:var(--radius-lg); padding:var(--space-6); overflow:hidden;
  transition: border-color var(--dur-base) var(--ease-out),
              box-shadow var(--dur-base) var(--ease-out),
              transform var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out);
}
.lst-card--hover:hover{
  border-color:var(--accent); box-shadow:var(--glow-sm);
  transform:translateY(-3px); background:var(--surface-card-hover);
}
.lst-card__idx{
  position:absolute; top:var(--space-5); right:var(--space-5);
  font-family:var(--font-mono); font-size:var(--fs-mono); letter-spacing:var(--ls-wide);
  color:var(--text-muted);
}
.lst-card--accent{ border-color:color-mix(in srgb, var(--accent) 35%, transparent); }
.lst-card--accent::before{
  content:""; position:absolute; inset:0; background:var(--grad-spot); opacity:.6; pointer-events:none;
}
.lst-card > *{ position:relative; }
`;

/** Generic surface card — hairline border, hover lift+glow, optional corner index. */
function Card({
  children,
  index,
  hover = true,
  accent = false,
  className = "",
  ...rest
}) {
  useStyle("lst-card", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lst-card ${hover ? "lst-card--hover" : ""} ${accent ? "lst-card--accent" : ""} ${className}`
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    className: "lst-card__idx"
  }, index), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Marquee({
  items = [],
  separator = "—",
  reverse = false,
  duration = "26s",
  className = "",
  ...rest
}) {
  useStyle("lst-marquee", CSS);
  const Group = () => /*#__PURE__*/React.createElement("div", {
    className: "lst-marquee__group",
    "aria-hidden": "true"
  }, items.map((t, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "lst-marquee__item"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "lst-marquee__sep"
  }, separator))));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lst-marquee ${reverse ? "lst-marquee--reverse" : ""} ${className}`
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lst-marquee__track",
    style: {
      "--_dur": duration
    }
  }, /*#__PURE__*/React.createElement(Group, null), /*#__PURE__*/React.createElement(Group, null)));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
.lst-stat{ display:flex; flex-direction:column; gap:.35rem; }
.lst-stat__val{
  font-family:var(--font-display); font-weight:var(--w-bold);
  font-size:var(--fs-h3); line-height:1; letter-spacing:var(--ls-tight);
  color:var(--text-primary);
}
.lst-stat__val .lst-stat__mark{ color:var(--accent); }
.lst-stat__label{
  font-family:var(--font-mono); font-size:var(--fs-mono); letter-spacing:var(--ls-wide);
  text-transform:uppercase; color:var(--text-secondary);
}
`;

/** Big number + label, e.g. "5+ лет в коммерческом коде". */
function StatBlock({
  value,
  mark,
  label,
  className = "",
  ...rest
}) {
  useStyle("lst-stat", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lst-stat ${className}`
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lst-stat__val"
  }, value, mark != null && /*#__PURE__*/React.createElement("span", {
    className: "lst-stat__mark"
  }, mark)), /*#__PURE__*/React.createElement("div", {
    className: "lst-stat__label"
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
.lst-badge{
  display:inline-flex; align-items:center; gap:.5em;
  font-family:var(--font-mono); font-size:var(--fs-mono); font-weight:var(--w-medium);
  letter-spacing:var(--ls-wide); text-transform:uppercase; line-height:1;
  padding:.5em .9em; border-radius:var(--radius-sm);
  border:1px solid var(--border); color:var(--text-secondary); background:var(--glass);
}
.lst-badge__pulse{ position:relative; width:.5em; height:.5em; border-radius:var(--radius-full); background:var(--accent); box-shadow:var(--glow-sm); }
.lst-badge__pulse::after{ content:""; position:absolute; inset:0; border-radius:inherit; background:var(--accent); animation: ds-pulse var(--dur-ambient) ease-in-out infinite; }
.lst-badge--live{ color:var(--text-primary); }
`;

/** Status badge — e.g. "Беру проекты в работу · отвечаю в течение часа". */
function Badge({
  children,
  live = false,
  className = "",
  ...rest
}) {
  useStyle("lst-badge", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `lst-badge ${live ? "lst-badge--live" : ""} ${className}`
  }, rest), live && /*#__PURE__*/React.createElement("span", {
    className: "lst-badge__pulse",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  // string mark like "→" / "↗" or a node
  as = "button",
  className = "",
  ...rest
}) {
  useStyle("lst-button", CSS);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `lst-btn lst-btn--${variant} lst-btn--${size} ${className}`
  }, rest), /*#__PURE__*/React.createElement("span", null, children), icon != null && /*#__PURE__*/React.createElement("span", {
    className: "lst-btn__icon",
    "aria-hidden": "true"
  }, icon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
.lst-kicker{
  display:inline-flex; align-items:center; gap:.7em;
  font-family:var(--font-mono); font-size:var(--fs-mono); font-weight:var(--w-medium);
  letter-spacing:var(--ls-kicker); text-transform:uppercase; line-height:1;
  color:var(--text-secondary);
}
.lst-kicker__idx{ color:var(--accent); }
.lst-kicker__rule{ width:2.4em; height:1px; background:var(--border-strong); }
`;

/** Section eyebrow: two-digit index + short label, e.g. "01 Почему сайты молчат". */
function Kicker({
  index,
  children,
  rule = false,
  className = "",
  ...rest
}) {
  useStyle("lst-kicker", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `lst-kicker ${className}`
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    className: "lst-kicker__idx"
  }, index), rule && /*#__PURE__*/React.createElement("span", {
    className: "lst-kicker__rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SectionHeader({
  index,
  kicker,
  title,
  lead,
  wide = false,
  className = "",
  ...rest
}) {
  useStyle("lst-section-header", CSS);
  return /*#__PURE__*/React.createElement("header", _extends({
    className: `lst-sh ${wide ? "lst-sh--wide" : ""} ${className}`
  }, rest), (kicker || index) && /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    index: index
  }, kicker), /*#__PURE__*/React.createElement("h2", {
    className: "lst-sh__title"
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    className: "lst-sh__lead"
  }, lead));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
.lst-tag{
  display:inline-flex; align-items:center; gap:.4em;
  font-family:var(--font-mono); font-size:var(--fs-mono); font-weight:var(--w-medium);
  letter-spacing:var(--ls-wide); text-transform:uppercase; line-height:1;
  padding:.45em .8em; border-radius:var(--radius-pill);
  border:1px solid var(--border); color:var(--text-secondary); background:transparent;
  transition: color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
}
.lst-tag--solid{ background:var(--surface-inset); color:var(--text-primary); border-color:transparent; }
.lst-tag--accent{ color:var(--accent); border-color:color-mix(in srgb, var(--accent) 45%, transparent); background:var(--accent-wash); }
.lst-tag__dot{ width:.45em; height:.45em; border-radius:var(--radius-full); background:currentColor; }
`;

/** Small mono category chip (tech stack, filters). */
function Tag({
  children,
  variant = "default",
  dot = false,
  className = "",
  ...rest
}) {
  useStyle("lst-tag", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `lst-tag lst-tag--${variant} ${className}`
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "lst-tag__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = 0,
  className = "",
  ...rest
}) {
  useStyle("lst-accordion", CSS);
  const [open, setOpen] = React.useState(() => new Set(defaultOpen == null ? [] : [defaultOpen]));
  const toggle = React.useCallback(i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  }, [allowMultiple]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lst-acc ${className}`
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `lst-acc__item ${isOpen ? "lst-acc__item--open" : ""}`
    }, /*#__PURE__*/React.createElement("button", {
      className: "lst-acc__btn",
      "aria-expanded": isOpen,
      onClick: () => toggle(i)
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      className: "lst-acc__sign",
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      className: "lst-acc__panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lst-acc__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lst-acc__body"
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Input({
  label,
  hint,
  error = false,
  id,
  className = "",
  ...rest
}) {
  useStyle("lst-input", CSS);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    className: `lst-field ${error ? "lst-field--err" : ""} ${className}`
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lst-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    className: "lst-input"
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    className: "lst-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Textarea({
  label,
  id,
  className = "",
  ...rest
}) {
  useStyle("lst-textarea", CSS);
  const fid = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    className: `lst-ta ${className}`
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lst-ta__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: "lst-ta__field"
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/motion/NeonField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function NeonField({
  grid = true,
  grain = true,
  vignette = true,
  className = "",
  ...rest
}) {
  useStyle("lst-neon-field", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `lst-field-bg ds-ambient ${className}`,
    "aria-hidden": "true"
  }, rest), grid && /*#__PURE__*/React.createElement("div", {
    className: "lst-field-bg__grid"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lst-field-bg__blob lst-field-bg__blob--a"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lst-field-bg__blob lst-field-bg__blob--b"
  }), grain && /*#__PURE__*/React.createElement("div", {
    className: "lst-field-bg__grain"
  }), vignette && /*#__PURE__*/React.createElement("div", {
    className: "lst-field-bg__vig"
  }));
}
Object.assign(__ds_scope, { NeonField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/NeonField.jsx", error: String((e && e.message) || e) }); }

// components/motion/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The shared reveal primitive. Wraps children, watches with IntersectionObserver,
 * and applies the brand's rise+fade(+de-blur) entrance once on enter. All variants
 * share timing/easing from motion tokens — only the "from" transform differs, so the
 * whole site reads as ONE reveal system. Base = visible end-state (print/no-JS safe).
 */
function Reveal({
  children,
  as = "div",
  variant = "up",
  // up | left | right | scale
  index = 0,
  // stagger step (sets --i)
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
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          if (once) io.unobserve(e.target);
        } else if (!once) {
          setShown(false);
        }
      });
    }, {
      threshold,
      rootMargin: "0px 0px -8% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);
  const Tag = as;
  const attr = variant === "up" ? "" : variant; // [data-reveal] vs [data-reveal="left"] ...
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    "data-reveal": attr || true,
    className: `${shown ? "is-in" : ""} ${className}`,
    style: {
      "--i": index,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/motion/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/product/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ServiceCard({
  title,
  description,
  price,
  tag,
  href,
  className = "",
  ...rest
}) {
  useStyle("lst-service-card", CSS);
  const Root = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Root, _extends({
    href: href,
    className: `lst-svc ${className}`
  }, rest), tag && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    variant: "accent"
  }, tag), /*#__PURE__*/React.createElement("h3", {
    className: "lst-svc__title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "lst-svc__desc"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "lst-svc__foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lst-svc__price"
  }, price), /*#__PURE__*/React.createElement("span", {
    className: "lst-svc__arrow",
    "aria-hidden": "true"
  }, "\u2197")));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/product/WorkCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function WorkCard({
  name,
  kind,
  description,
  image,
  alt = "",
  live = true,
  href,
  tags = [],
  className = "",
  ...rest
}) {
  useStyle("lst-work-card", CSS);
  return /*#__PURE__*/React.createElement("a", _extends({
    className: `lst-work ${className}`,
    href: href,
    target: "_blank",
    rel: "noreferrer"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "lst-work__media"
  }, image ? /*#__PURE__*/React.createElement("img", {
    className: "lst-work__img",
    src: image,
    alt: alt,
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "lst-work__img"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lst-work__tint"
  }), live && /*#__PURE__*/React.createElement("span", {
    className: "lst-work__live"
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    variant: "accent",
    dot: true
  }, "LIVE")), /*#__PURE__*/React.createElement("span", {
    className: "lst-work__open",
    "aria-hidden": "true"
  }, "\u2197")), /*#__PURE__*/React.createElement("div", {
    className: "lst-work__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lst-work__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "lst-work__name"
  }, name), kind && /*#__PURE__*/React.createElement("span", {
    className: "lst-work__kind"
  }, kind)), description && /*#__PURE__*/React.createElement("p", {
    className: "lst-work__desc"
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "lst-work__tags"
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i
  }, t)))));
}
Object.assign(__ds_scope, { WorkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/WorkCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* lstmind UI kit — App shell + mount. */
const {
  useState: useStateApp
} = React;
function App() {
  const [loaded, setLoaded] = useStateApp(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "kit"
  }, /*#__PURE__*/React.createElement(Preloader, {
    onDone: () => setLoaded(true)
  }), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement("main", {
    "aria-hidden": !loaded ? "true" : "false"
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Strip, null), /*#__PURE__*/React.createElement(Problem, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Works, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* lstmind website content (RU). Plain global — no module syntax. */
window.LST_DATA = {
  nav: [{
    href: "#services",
    label: "Услуги"
  }, {
    href: "#process",
    label: "Подход"
  }, {
    href: "#works",
    label: "Работы"
  }, {
    href: "#faq",
    label: "FAQ"
  }],
  preloaderLines: ["ЗАГРУЗКА ПОРТФОЛИО", "ЧИСТЫЙ КОД, БЕЗ ШАБЛОНОВ", "СОБИРАЮ ПЕРВЫЙ ЭКРАН", "ПОЧТИ ГОТОВО"],
  stats: [{
    value: "5+",
    label: "лет в коммерческом коде"
  }, {
    value: "Под ключ",
    label: "от лендинга до магазина"
  }, {
    value: "5.0",
    mark: "★",
    label: "высший рейтинг на Kwork"
  }, {
    value: "1500₽",
    label: "в час · по проекту фикс"
  }],
  marquee: ["Сайты под ключ", "Спасение чужих сайтов", "Интернет-магазины", "Ускорение", "WooCommerce", "Вёрстка по Figma", "Миграции"],
  problems: [{
    n: "01",
    t: "Грузится вечность",
    d: "5 секунд загрузки — и половина посетителей ушла к конкуренту. Google это видит и опускает сайт в выдаче."
  }, {
    n: "02",
    t: "Непонятно, что продаёшь",
    d: "На первом экране каша вместо оффера. Человек не понял за пять секунд — закрыл вкладку и не вернулся."
  }, {
    n: "03",
    t: "Собран на шаблоне",
    d: "Тормозит, разъезжается на телефоне, у соседа точно такой же. Шаблон видно сразу — и доверие тает."
  }],
  services: [{
    tag: "под ключ",
    t: "Сайт под ключ",
    d: "Не шаблон. Собираю под твою задачу — от структуры до релиза. Дизайн, который продаёт, и код, который не тормозит.",
    p: ["от ", "15 000 ₽", " · под ключ"]
  }, {
    t: "Интернет-магазин",
    d: "WooCommerce под ключ: каталог, фильтры, оплата. Перенесу товары, настрою под рекламу — покупатель доходит до корзины.",
    p: ["от ", "35 000 ₽"]
  }, {
    t: "Спасение сайта",
    d: "Достался кривой сайт? Починю вёрстку, уберу баги, доделаю что бросил прошлый. На копии, с откатом — твой прод цел.",
    p: ["от ", "1 500 ₽/час"]
  }, {
    t: "Ускорение сайта",
    d: "Медленный сайт теряет до половины заявок. Разгоняю до зелёного PageSpeed: картинки, кэш, чистка лишнего.",
    p: ["аудит ", "бесплатно"]
  }, {
    t: "Вёрстка по Figma",
    d: "Пиксель-в-пиксель из макета. Адаптив, чистый код, кроссбраузер. Без «почти как в дизайне» — точно как в дизайне.",
    p: ["от ", "1 500 ₽", " / экран"]
  }, {
    t: "Миграции и хостинг",
    d: "Перенос между хостингами и доменами без простоя. SSL, почта, домен — всё настрою, сайт не упадёт ни на минуту.",
    p: ["от ", "1 500 ₽"]
  }],
  process: [{
    n: "01",
    t: "Разбор задачи",
    d: "Созвон на 30 минут: что продаём, кому, какой бюджет и срок. Без этого любой дизайн — пальцем в небо."
  }, {
    n: "02",
    t: "Смета и сроки",
    d: "Фикс-цена и дедлайн до старта. Ты знаешь, за что платишь — доп.хотелки обсуждаем заранее, без сюрпризов по деньгам."
  }, {
    n: "03",
    t: "Дизайн + код",
    d: "Делаю сам, не передаю по цепочке фрилансеров. Каждый блок — под результат, а не «чтобы было красиво»."
  }, {
    n: "04",
    t: "Не трогаю твой прод",
    d: "Работаю на копии с бэкапом. Рабочий сайт не задену, пока новое не готово, не проверено и не одобрено тобой."
  }, {
    n: "05",
    t: "Запуск + поддержка",
    d: "Заливаю, проверяю на трёх устройствах, отдаю все доступы. Месяц после релиза правлю мелочи бесплатно."
  }],
  works: [{
    href: "https://www.skazpokrayu.ru/",
    img: "../../assets/imagery/abstract-ink.jpg",
    name: "Сказ по краю",
    kind: "Магазин",
    d: "Интернет-магазин премиальных арт-объектов ручной работы. Каталог с фильтрами, корзина, оформление заказа под ключ.",
    tags: ["WordPress", "WooCommerce", "Каталог + фильтры"]
  }, {
    href: "https://tksibstar.com/",
    img: "../../assets/imagery/neon-banner.jpg",
    name: "СибСтар",
    kind: "Сайт с нуля",
    d: "Сайт транспортной компании с нуля: грузоперевозки по России, расчёт заявки, галерея. Быстрая чистая вёрстка.",
    tags: ["Вёрстка", "Формы заявок", "SEO-база"]
  }, {
    href: "https://wellevent.ru/",
    img: "../../assets/imagery/work-tex-3.jpg",
    name: "Well Event",
    kind: "Кейтеринг",
    d: "Сайт кейтеринг-сервиса: услуги, портфолио, расчёт стоимости мероприятия. Адаптив и заявки прямо с первого экрана.",
    tags: ["Лендинг", "Портфолио", "Форма расчёта"]
  }, {
    href: "https://skazpokrayu.online/",
    img: "../../assets/imagery/work-tex-4.jpg",
    name: "Сказ по краю — бренд",
    kind: "Webflow",
    d: "Бренд-лендинг авторской керамики на Webflow: редакторская типографика, иллюстрации, плавные анимации.",
    tags: ["Webflow", "Брендинг", "Анимации"]
  }],
  faq: [{
    q: "Сколько стоит лендинг?",
    a: "Простой лендинг — от 15 000 ₽ за 5–7 дней (3–4 экрана, кастом-дизайн, форма заявок в Telegram). Стандартный, с анимацией и проработкой — 25–50k за 7–14 дней. Точную смету называю после короткого разбора задачи. Мелкие доработки — 1 500 ₽/час."
  }, {
    q: "Делаешь мобильную вёрстку?",
    a: "Любой сайт собираю mobile-first — большинство клиентов заходят с телефона. Проверяю на трёх устройствах, тач-цели удобные, ничего не разъезжается. Адаптив входит в цену, а не «за отдельные деньги»."
  }, {
    q: "Как происходит оплата?",
    a: "По проекту — обычно 50% предоплата, 50% после сдачи; на крупных делим на этапы. По часовым задачам — по факту в конце недели. Работаю как самозанятый, чек дам. Никакой оплаты «вслепую»."
  }, {
    q: "Срочные сроки берёшь?",
    a: "Берусь — со срочной наценкой. Если горит, найду способ успеть: расставлю приоритеты, при необходимости подключу проверенных ребят. Наценку и реальный срок назову сразу, без сюрпризов."
  }, {
    q: "Делаешь ли SEO?",
    a: "Базовое SEO — всегда и по умолчанию: чистый код, скорость, корректные мета-теги, структура, sitemap. Полное продвижение (семантика, тексты, ссылки) — отдельная история, подскажу стратегию или возьму отдельно."
  }, {
    q: "Поддержка после релиза?",
    a: "Месяц после сдачи правлю мелочи и баги бесплатно. Дальше — по часам или на абонентке, как удобнее. Я не из тех, кто пропадает после оплаты: отвечу и через полгода."
  }],
  contactLinks: [{
    href: "https://t.me/lstmind",
    label: "Telegram",
    meta: "@lstmind",
    mark: "↗"
  }, {
    href: "mailto:lstmind@yandex.ru",
    label: "Почта",
    meta: "lstmind@yandex.ru",
    mark: "@"
  }, {
    href: "https://kwork.ru/user/lstmind",
    label: "Kwork",
    meta: "Профиль · 5.0★",
    mark: "✦"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/parts1.jsx
try { (() => {
/* lstmind UI kit — Preloader, Nav, Hero. Exports to window. */
const {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo
} = React;
const DS = window.LstmindDesignSystem_9805c3;
const {
  Badge,
  Button,
  StatBlock,
  Marquee,
  Reveal,
  NeonField
} = DS;
const D = window.LST_DATA;

/* ---------- Preloader: counter + drawn neon mark + rotating narration ---------- */
const Preloader = memo(function Preloader({
  onDone
}) {
  const [pct, setPct] = useState(0);
  const [line, setLine] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 9 + 3;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 520);
        setTimeout(() => onDone && onDone(), 1180);
      }
      setPct(Math.floor(p));
    }, 130);
    return () => clearInterval(id);
  }, [onDone]);
  useEffect(() => {
    const idx = Math.min(D.preloaderLines.length - 1, Math.floor(pct / (100 / D.preloaderLines.length)));
    setLine(idx);
  }, [pct]);
  const pad = String(pct).padStart(3, "0");
  return /*#__PURE__*/React.createElement("div", {
    className: "pl",
    "data-done": done
  }, /*#__PURE__*/React.createElement(NeonField, {
    grid: false
  }), /*#__PURE__*/React.createElement("div", {
    className: "pl__inner"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "pl__mark",
    viewBox: "0 0 100 100",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "44",
    strokeWidth: "1.5",
    strokeOpacity: "0.25",
    style: {
      strokeDasharray: 276,
      strokeDashoffset: 276 - 276 * pct / 100,
      transition: "stroke-dashoffset .2s linear"
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 64 V36 M30 64 H52 M62 36 V64 M62 36 L78 64 M62 64 L78 36",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      filter: "drop-shadow(0 0 8px var(--accent-glow))"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "pl__count"
  }, pad, /*#__PURE__*/React.createElement("sup", null, "%")), /*#__PURE__*/React.createElement("div", {
    className: "pl__bar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: pct + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "pl__line"
  }, /*#__PURE__*/React.createElement("span", {
    key: line
  }, D.preloaderLines[line]))));
});

/* ---------- Nav: glass-on-scroll ---------- */
const Nav = memo(function Nav() {
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav",
    "data-stuck": stuck
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__logo",
    href: "#top"
  }, "lstmind", /*#__PURE__*/React.createElement("b", null, ".")), /*#__PURE__*/React.createElement("ul", {
    className: "nav__links"
  }, D.nav.map(n => /*#__PURE__*/React.createElement("li", {
    key: n.href
  }, /*#__PURE__*/React.createElement("a", {
    href: n.href
  }, n.label)))), /*#__PURE__*/React.createElement("div", {
    className: "nav__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "https://t.me/lstmind",
    target: "_blank",
    variant: "secondary",
    size: "sm",
    icon: "\u2197"
  }, "Telegram")));
});

/* ---------- Hero ---------- */
const Hero = memo(function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement(NeonField, null), /*#__PURE__*/React.createElement("div", {
    className: "hero__monolith",
    "aria-hidden": "true"
  }, "lstmind"), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero__grid"
  }, /*#__PURE__*/React.createElement(Reveal, {
    index: 0
  }, /*#__PURE__*/React.createElement(Badge, {
    live: true
  }, "\u0411\u0435\u0440\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0432 \u0440\u0430\u0431\u043E\u0442\u0443 \xB7 \u043E\u0442\u0432\u0435\u0447\u0430\u044E \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0430\u0441\u0430")), /*#__PURE__*/React.createElement(Reveal, {
    index: 1
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "\u0414\u0435\u043B\u0430\u044E \u0441\u0430\u0439\u0442\u044B,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "ghost"
  }, "\u0427\u0443\u0436\u0438\u0435 \u2014 \u0447\u0438\u043D\u044E."))), /*#__PURE__*/React.createElement(Reveal, {
    index: 2
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero__lead"
  }, "\u042F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A, \u0430 \u043D\u0435 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u043D\u0430 \u043A\u043E\u043B\u0435\u043D\u043A\u0435. \u0421\u043E\u0431\u0438\u0440\u0430\u044E \u0441 \u043D\u0443\u043B\u044F \u0438 \u0441\u043F\u0430\u0441\u0430\u044E \u0447\u0443\u0436\u043E\u0435: ", /*#__PURE__*/React.createElement("b", null, "\u0447\u0438\u0441\u0442\u044B\u0439 \u043A\u043E\u0434, \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C, \u043D\u043E\u043B\u044C \xAB\u043F\u043E\u0447\u0442\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442\xBB"), ". \u0421\u0430\u0439\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043D\u0435 \u0441\u0442\u044B\u0434\u043D\u043E \u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0432 \u0440\u0435\u043A\u043B\u0430\u043C\u0443 \u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0443.")), /*#__PURE__*/React.createElement(Reveal, {
    index: 3,
    className: "hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#contact",
    variant: "primary",
    size: "lg",
    icon: "\u2192"
  }, "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#works",
    variant: "secondary",
    size: "lg",
    icon: "\u2198"
  }, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u043A\u0430\u0436\u0438 \u0440\u0430\u0431\u043E\u0442\u044B")), /*#__PURE__*/React.createElement(Reveal, {
    index: 4,
    className: "hero__stats"
  }, D.stats.map((s, i) => /*#__PURE__*/React.createElement(StatBlock, {
    key: i,
    value: s.value,
    mark: s.mark,
    label: s.label
  })))));
});
Object.assign(window, {
  Preloader,
  Nav,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts2.jsx
try { (() => {
/* lstmind UI kit — Problem, Services, Process. Exports to window. */
const DS2 = window.LstmindDesignSystem_9805c3;
const {
  SectionHeader,
  Card,
  ServiceCard,
  Reveal: Reveal2,
  Marquee: Marquee2
} = DS2;
const D2 = window.LST_DATA;

/* ---------- Marquee strip ---------- */
const Strip = React.memo(function Strip() {
  return /*#__PURE__*/React.createElement("div", {
    className: "strip"
  }, /*#__PURE__*/React.createElement(Marquee2, {
    items: D2.marquee,
    separator: "\u2014",
    duration: "34s"
  }));
});

/* ---------- Problem ---------- */
const Problem = React.memo(function Problem() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "problem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal2, null, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "01",
    kicker: "\u041F\u043E\u0447\u0435\u043C\u0443 \u0441\u0430\u0439\u0442\u044B \u043C\u043E\u043B\u0447\u0430\u0442",
    wide: true,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u041A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u2014 ", /*#__PURE__*/React.createElement("em", null, "\u043D\u0435 \u0437\u043D\u0430\u0447\u0438\u0442"), " \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0449\u0438\u0439"),
    lead: "\u041C\u043E\u0436\u043D\u043E \u0432\u0431\u0443\u0445\u0430\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438 \u0432 \u0441\u0430\u0439\u0442 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u043E\u043B\u044C \u0437\u0430\u044F\u0432\u043E\u043A. \u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043E \u0432\u0438\u043D\u043E\u0432\u0430\u0442\u044B \u0442\u0440\u0438 \u0432\u0435\u0449\u0438."
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      marginTop: "var(--space-8)"
    }
  }, D2.problems.map((p, i) => /*#__PURE__*/React.createElement(Reveal2, {
    key: p.n,
    variant: "up",
    index: i
  }, /*#__PURE__*/React.createElement(Card, {
    index: p.n,
    style: {
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--fs-h4)",
      letterSpacing: "var(--ls-tight)",
      margin: "0 0 4px"
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      lineHeight: "var(--lh-body)",
      margin: 0,
      fontSize: "var(--fs-small)"
    }
  }, p.d))))), /*#__PURE__*/React.createElement(Reveal2, {
    index: 1
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-7)",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--fs-h3)",
      letterSpacing: "var(--ls-tight)",
      color: "var(--text-primary)"
    }
  }, "\u042F \u0434\u0435\u043B\u0430\u044E \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442 \u2014 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      textShadow: "var(--glow-text)"
    }
  }, "\u0431\u044B\u0441\u0442\u0440\u043E, \u043F\u043E\u043D\u044F\u0442\u043D\u043E, \u043F\u043E\u0434 \u0442\u0435\u0431\u044F.")))));
});

/* ---------- Services ---------- */
const Services = React.memo(function Services() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head-row"
  }, /*#__PURE__*/React.createElement(Reveal2, null, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "02",
    kicker: "\u0427\u0442\u043E \u044F \u0434\u0435\u043B\u0430\u044E",
    wide: true,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u041E\u0442 \u0442\u043E\u0447\u0435\u0447\u043D\u043E\u0439 \u043F\u0440\u0430\u0432\u043A\u0438 \u0434\u043E ", /*#__PURE__*/React.createElement("em", null, "\u0441\u0430\u0439\u0442\u0430 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447")),
    lead: "\u0411\u0435\u0440\u0443\u0441\u044C \u0438 \u0437\u0430 \u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0441 \u043D\u0443\u043B\u044F, \u0438 \u0437\u0430 \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u044B\u0435 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0438. \u0421\u0442\u0435\u043A \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u044E \u043F\u043E\u0434 \u0437\u0430\u0434\u0430\u0447\u0443 \u0438 \u0431\u044E\u0434\u0436\u0435\u0442, \u0430 \u043D\u0435 \u043F\u043E\u0434 \u043C\u043E\u0434\u0443. \u0421\u0442\u0430\u0432\u043A\u0430 1500 \u20BD/\u0447\u0430\u0441, \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u2014 \u0444\u0438\u043A\u0441-\u0441\u043C\u0435\u0442\u0430 \u043F\u043E\u0441\u043B\u0435 \u0440\u0430\u0437\u0431\u043E\u0440\u0430."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid-svc"
  }, D2.services.map((s, i) => /*#__PURE__*/React.createElement(Reveal2, {
    key: s.t,
    variant: "up",
    index: i % 3
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    tag: s.tag,
    title: s.t,
    description: s.d,
    price: /*#__PURE__*/React.createElement(React.Fragment, null, s.p[0], /*#__PURE__*/React.createElement("b", null, s.p[1]), s.p[2])
  }))))));
});

/* ---------- Process ---------- */
const Process = React.memo(function Process() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "process"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal2, null, /*#__PURE__*/React.createElement(SectionHeader, {
    index: "03",
    kicker: "\u041A\u0430\u043A \u044F \u0440\u0430\u0431\u043E\u0442\u0430\u044E",
    wide: true,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u041E\u0434\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A. ", /*#__PURE__*/React.createElement("em", null, "\u041D\u0438\u043A\u0430\u043A\u0438\u0445 \u0441\u044E\u0440\u043F\u0440\u0438\u0437\u043E\u0432")),
    lead: "\u0411\u0435\u0437 \u043F\u0438\u043D\u0433-\u043F\u043E\u043D\u0433\u0430 \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430\u043C\u0438 \u0438 \u0431\u0435\u0437 \xAB\u043E\u0439, \u044D\u0442\u043E \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\xBB. \u041F\u044F\u0442\u044C \u0448\u0430\u0433\u043E\u0432 \u043E\u0442 \u0437\u0430\u0434\u0430\u0447\u0438 \u0434\u043E \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430."
  })), /*#__PURE__*/React.createElement("div", {
    className: "steps",
    style: {
      marginTop: "var(--space-8)"
    }
  }, D2.process.map((s, i) => /*#__PURE__*/React.createElement(Reveal2, {
    key: s.n,
    variant: "left",
    index: i,
    as: "div",
    className: "step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step__num"
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "step__title"
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "step__desc"
  }, s.d)))))));
});
Object.assign(window, {
  Strip,
  Problem,
  Services,
  Process
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/parts3.jsx
try { (() => {
/* lstmind UI kit — Works, Faq, Contact, Footer. Exports to window. */
const DS3 = window.LstmindDesignSystem_9805c3;
const {
  SectionHeader: SH3,
  WorkCard,
  Accordion,
  Input,
  Textarea,
  Button: Btn3,
  Reveal: R3,
  Marquee: Mq3
} = DS3;
const D3 = window.LST_DATA;
const {
  useState: uS
} = React;

/* ---------- Works ---------- */
const Works = React.memo(function Works() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "works"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "head-row"
  }, /*#__PURE__*/React.createElement(R3, null, /*#__PURE__*/React.createElement(SH3, {
    index: "04",
    kicker: "\u0420\u0430\u0431\u043E\u0442\u044B",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u041D\u0435 \u0441\u043A\u0440\u0438\u043D\u0448\u043E\u0442\u044B. ", /*#__PURE__*/React.createElement("em", null, "\u0421\u0430\u043C\u0438 \u0441\u0430\u0439\u0442\u044B.")),
    lead: "\u041E\u0442\u043A\u0440\u043E\u0439 \u043B\u044E\u0431\u043E\u0439 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0438 \u043F\u043E\u0442\u044B\u043A\u0430\u0439 \u0440\u0443\u043A\u0430\u043C\u0438 \u2014 \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0447\u0438\u0435 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0432 \u043F\u0440\u043E\u0434\u0435, \u0430 \u043D\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid-2"
  }, D3.works.map((w, i) => /*#__PURE__*/React.createElement(R3, {
    key: w.name,
    variant: "up",
    index: i % 2
  }, /*#__PURE__*/React.createElement(WorkCard, {
    href: w.href,
    image: w.img,
    name: w.name,
    kind: w.kind,
    description: w.d,
    tags: w.tags,
    alt: w.name
  }))))));
});

/* ---------- FAQ ---------- */
const Faq = React.memo(function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-aside"
  }, /*#__PURE__*/React.createElement(R3, null, /*#__PURE__*/React.createElement(SH3, {
    index: "05",
    kicker: "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u041E\u0442\u0432\u0435\u0447\u0430\u044E ", /*#__PURE__*/React.createElement("em", null, "\u0437\u0430\u0440\u0430\u043D\u0435\u0435"))
  })), /*#__PURE__*/React.createElement(R3, {
    index: 1
  }, /*#__PURE__*/React.createElement("div", {
    className: "faq-rating"
  }, /*#__PURE__*/React.createElement("b", null, "5.0\u2605"), /*#__PURE__*/React.createElement("span", null, "\u0432\u044B\u0441\u0448\u0438\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \xB7 28 \u043E\u0442\u0437\u044B\u0432\u043E\u0432"), /*#__PURE__*/React.createElement("a", {
    href: "https://kwork.ru/user/lstmind",
    target: "_blank",
    rel: "noreferrer"
  }, "\u0447\u0438\u0442\u0430\u0442\u044C \u043D\u0430 Kwork \u2192")))), /*#__PURE__*/React.createElement(R3, {
    variant: "right"
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: D3.faq.map(f => ({
      q: f.q,
      a: f.a
    })),
    defaultOpen: 0
  })))));
});

/* ---------- Contact ---------- */
const Contact = React.memo(function Contact() {
  const [sent, setSent] = uS(false);
  const submit = React.useCallback(e => {
    e.preventDefault();
    setSent(true);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(R3, {
    variant: "scale"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact"
  }, /*#__PURE__*/React.createElement(NeonFieldSafe, null), /*#__PURE__*/React.createElement("div", {
    className: "contact__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SH3, {
    index: "06",
    kicker: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438 ", /*#__PURE__*/React.createElement("em", null, "\u0437\u0430\u0434\u0430\u0447\u0443")),
    lead: "\u041E\u043F\u0438\u0448\u0438 \u0432 \u0434\u0432\u0443\u0445 \u0441\u043B\u043E\u0432\u0430\u0445, \u0447\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u2014 \u043E\u0442\u0432\u0435\u0447\u0443 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0430\u0441\u0430 \u0438 \u0441\u043A\u0430\u0436\u0443 \u0447\u0435\u0441\u0442\u043D\u043E, \u0447\u0442\u043E \u0441\u0442\u043E\u0438\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0438 \u0441\u043A\u043E\u043B\u044C\u043A\u043E. \u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F, \u0431\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432."
  }), /*#__PURE__*/React.createElement("div", {
    className: "contact__links"
  }, D3.contactLinks.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    className: "contact__link",
    href: l.href,
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React.createElement("b", null, l.label), /*#__PURE__*/React.createElement("span", null, l.meta, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, l.mark)))))), /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement("div", {
    className: "form",
    style: {
      minHeight: 260,
      justifyContent: "center",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--fs-h3)",
      letterSpacing: "var(--ls-tight)"
    }
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u0443\u0448\u043B\u0430 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)",
      textShadow: "var(--glow-text)"
    }
  }, "\u0432 Telegram")), /*#__PURE__*/React.createElement("p", {
    className: "form__note"
  }, "\u041E\u0442\u0432\u0435\u0447\u0443 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0430\u0441\u0430. \u0411\u0435\u0437 \u0441\u043F\u0430\u043C\u0430 \u0438 \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A."), /*#__PURE__*/React.createElement(Btn3, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443")) : /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442",
    placeholder: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u041A\u0430\u043A \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F",
    placeholder: "Telegram / \u043F\u043E\u0447\u0442\u0430 / \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
    required: true
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "\u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C",
    placeholder: "\u041B\u0435\u043D\u0434\u0438\u043D\u0433 \u0434\u043B\u044F \u0441\u0442\u0443\u0434\u0438\u0438, \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043D\u0430 WooCommerce, \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u044C \u0441\u0430\u0439\u0442\u2026",
    rows: 3
  }), /*#__PURE__*/React.createElement(Btn3, {
    variant: "primary",
    size: "lg",
    icon: "\u2192",
    as: "button",
    type: "submit"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("span", {
    className: "form__note"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u0434\u0451\u0442 \u043C\u043D\u0435 \u0432 Telegram. \u0411\u0435\u0437 \u0441\u043F\u0430\u043C\u0430 \u0438 \u0440\u0430\u0441\u0441\u044B\u043B\u043E\u043A."))))))));
});

/* NeonField may not exist in older bundles — guard. */
function NeonFieldSafe() {
  const NF = DS3.NeonField;
  return NF ? /*#__PURE__*/React.createElement(NF, {
    grain: false
  }) : null;
}

/* ---------- Footer ---------- */
const Footer = React.memo(function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(R3, null, /*#__PURE__*/React.createElement(Mq3, {
    items: ["Результат", "Скорость", "Чистый код", "Под ключ"],
    separator: "\u25CF",
    reverse: true,
    duration: "22s"
  })), /*#__PURE__*/React.createElement("div", {
    className: "footer__top",
    style: {
      marginTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "footer__mega"
  }, "lstmind", /*#__PURE__*/React.createElement("b", null, ".")), /*#__PURE__*/React.createElement("p", {
    className: "works-note",
    style: {
      alignSelf: "flex-end"
    }
  }, "\u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u0441\u043E\u0431\u0440\u0430\u043D \u043D\u0430 Next.js \u0431\u0435\u0437 \u0448\u0430\u0431\u043B\u043E\u043D\u043E\u0432 \u2014 \u0438 \u043E\u043D \u0442\u043E\u0436\u0435 \u043C\u043E\u0439 \u043A\u0435\u0439\u0441.")), /*#__PURE__*/React.createElement("div", {
    className: "footer__meta"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " lstmind \xB7 \u0410\u043B\u0435\u043A\u0441\u0435\u0439"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://t.me/lstmind",
    target: "_blank",
    rel: "noreferrer"
  }, "Telegram"), /*#__PURE__*/React.createElement("a", {
    href: "https://kwork.ru/user/lstmind",
    target: "_blank",
    rel: "noreferrer"
  }, "Kwork"), /*#__PURE__*/React.createElement("a", {
    href: "#top"
  }, "\u041D\u0430\u0432\u0435\u0440\u0445 \u2191")))));
});
Object.assign(window, {
  Works,
  Faq,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/parts3.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NeonField = __ds_scope.NeonField;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.WorkCard = __ds_scope.WorkCard;

})();
