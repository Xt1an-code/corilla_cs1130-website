/* ==========================================================
   CS 1130 Examples: modern theme
   Edit the colors in the two blocks below.
   Light mode = :root   |   Dark mode = the @media block
   ========================================================== */

:root {
  --bg: #050505;
  --card: #0d0d0d;
  --ink: #f5f5f5;
  --mute: #b08a8a;
  --line: #3a0a0a;
  --accent: #ff1a1a;
  --on-accent: #0a0000;
  --hero: #0a0000;
  --hero-2: #3a0808;
  --code-bg: #000000;
  --code: #ff8a8a;
  --ok: #ff5555;
  --shadow: none;
  --glass: rgba(255, 255, 255, .05);
  --glass-line: rgba(255, 60, 60, .3);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, .6);

  box-sizing: border-box;
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  color-scheme: dark;
}



/* ---------- Base ---------- */
html { scroll-padding-top: env(safe-area-inset-top, 0px); }
* { box-sizing: border-box; }

body {
  margin: 0;
  color: var(--ink);
  font: 16px/1.55 "IBM Plex Sans", system-ui, sans-serif;
  background:
    radial-gradient(600px circle at 10% 0%, rgba(255, 0, 0, .30), transparent 60%),
radial-gradient(500px circle at 90% 20%, rgba(180, 0, 0, .25), transparent 60%),
radial-gradient(700px circle at 50% 100%, rgba(255, 0, 0, .18), transparent 60%),
    var(--bg);
  background-attachment: fixed;
}

pre {
  margin: 10px 0 0;
  background: var(--code-bg);
  color: var(--code);
  padding: 14px;
  border-radius: 10px;
  overflow-x: auto;
  font: 15px/1.5 var(--pixel);
  max-width: 100%;
}
.lead { color: var(--mute); margin: 0 0 18px; }

/* ---------- Header and tabs ---------- */
header {
  background: linear-gradient(135deg, var(--hero), var(--hero-2));
  color: #ffffff;
  padding: 28px 20px 24px;
  border-bottom: 4px solid var(--accent);
}
header p { margin: 0 0 20px; max-width: 64ch; color: #c7cdea; }

nav {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 6px;
  background: rgba(255, 255, 255, .12);
  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 20px;
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, .25), inset 0 1px 0 rgba(255, 255, 255, .35);
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
}

nav button {
  flex: 1 1 0;
  min-width: 140px;
  text-align: center;
  font: inherit;
  font-weight: 600;
  color: #ffffff;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 14px;
  padding: 12px 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  transition: transform .2s, border-color .2s;
}
/* the glow that follows your cursor */
nav button::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0;
  transition: opacity .2s;
  background: radial-gradient(120px circle at var(--mx, 50%) var(--my, 50%),
              rgba(255, 255, 255, .45), transparent 70%);
}
nav button:hover { transform: translateY(-2px); border-color: rgba(255, 255, 255, .3); }
nav button:hover::before { opacity: 1; }
nav button[aria-selected="true"] {
  background: rgba(255, 255, 255, .26);
  border-color: rgba(255, 255, 255, .45);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .5);
}

@media (prefers-reduced-motion: reduce) { nav { animation: none; } }

nav button:focus-visible,
.btn:focus-visible,
input:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }

/* ---------- Page content ---------- */
main { padding: 24px 20px 48px; }
section[hidden] { display: none; }

.box {
  background: var(--glass);
  border: 1px solid var(--glass-line);
  border-radius: 20px;
  padding: 18px;
  margin-bottom: 14px;
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  box-shadow: var(--glass-shadow), inset 0 1px 0 rgba(255, 255, 255, .25);
  transition: transform .2s;
}
.box:hover { transform: translateY(-3px); }

.box h3 { margin: 0 0 10px; font-size: 1rem; }

.row { display: flex; gap: 10px; flex-wrap: wrap; align-items: end; }
label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: .9rem;
  color: var(--mute);
  flex: 1 1 150px;
}
input {
  font: inherit;
  color: var(--ink);
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 9px 12px;
  width: 100%;
}
input:focus { border-color: var(--accent); }

/* ---------- Buttons ---------- */
.btn {
  font: inherit;
  font-weight: 600;
  background: var(--accent);
  color: var(--on-accent);
  border: 0;
  border-radius: 8px;
  padding: 9px 16px;
  cursor: pointer;
  transition: filter .15s, transform .1s;
}
.btn:hover { filter: brightness(1.1); }
.btn.ghost {
  background: rgba(255, 255, 255, .06);
  color: var(--ink);
  border: 1px solid var(--glass-line);
  border-radius: 14px;
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  box-shadow: 0 6px 20px rgba(0, 0, 0, .35), inset 0 1px 0 rgba(255, 120, 120, .3);
}
.btn.ghost:hover {
  background: rgba(255, 26, 26, .18);
  border-color: var(--accent);
  box-shadow: 0 0 20px rgba(255, 26, 26, .5), inset 0 1px 0 rgba(255, 150, 150, .4);
  transform: translateY(-2px);
}

/* ---------- Results, table, code ---------- */
output {
  display: block;
  margin-top: 10px;
  min-height: 1.5em;
  font-weight: 600;
  color: var(--ok);
}
output.err { color: #ef4444; }
output div { font-weight: 400; color: var(--ink); }

table { border-collapse: collapse; width: 100%; font-size: .9rem; }
th, td { text-align: left; padding: 8px; border-bottom: 1px solid var(--line); }
.scroll { overflow-x: auto; }

pre {
  margin: 12px 0 0;
  background: rgba(0, 0, 0, .45);
  color: var(--code);
  padding: 16px;
  border: 1px solid var(--glass-line);
  border-radius: 16px;
  overflow-x: auto;
  font: 15px/1.5 var(--pixel, monospace);
  max-width: 100%;
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  box-shadow: var(--glass-shadow), inset 0 1px 0 rgba(255, 120, 120, .25);
}

footer {
  text-align: center;
  color: var(--mute);
  font-size: .85rem;
  padding: 0 20px 32px;
}
/* ---------- Opening animation ---------- */
#intro {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity .6s, visibility .6s;
  animation: introfail .1s 6s forwards;   /* safety: it hides itself after 6 seconds */
}
#intro.done { opacity: 0; visibility: hidden; }

#intro-text {
  font: 600 clamp(1.2rem, 4vw, 2rem)/1.4 var(--pixel, monospace);
  color: var(--accent);
  letter-spacing: .08em;
  text-shadow: 0 0 14px rgba(255, 26, 26, .9);
}
#intro-text::after {
  content: "█";
  margin-left: 4px;
  animation: introblink .7s steps(1) infinite;
}
@keyframes introblink { 50% { opacity: 0; } }
@keyframes introfail { to { opacity: 0; visibility: hidden; } }

/* page slides up after the intro */
body.loaded header { animation: rise .8s ease both; }
body.loaded main   { animation: rise .8s .2s ease both; }
@keyframes rise {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  #intro { display: none; }
  body.loaded header, body.loaded main { animation: none; }
}
/* ---------- Tab switch animation ---------- */
section:not([hidden]) {
  animation: tabIn .4s ease backwards;
}
section:not([hidden]) h2 {
  animation: flicker .5s ease backwards;
}
section:not([hidden]) .box {
  animation: boxIn .5s ease backwards;
}
section:not([hidden]) .box:nth-of-type(1) { animation-delay: .10s; }
section:not([hidden]) .box:nth-of-type(2) { animation-delay: .20s; }
section:not([hidden]) .box:nth-of-type(3) { animation-delay: .30s; }
section:not([hidden]) .box:nth-of-type(4) { animation-delay: .40s; }
section:not([hidden]) .box:nth-of-type(5) { animation-delay: .50s; }

@keyframes tabIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes boxIn {
  from { opacity: 0; transform: translateY(24px) scale(.97); }
  to   { opacity: 1; transform: none; }
}
@keyframes flicker {
  0%   { opacity: 0; }
  20%  { opacity: 1; }
  30%  { opacity: .3; }
  45%  { opacity: 1; }
  60%  { opacity: .5; }
  100% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  section:not([hidden]),
  section:not([hidden]) h2,
  section:not([hidden]) .box { animation: none; }
}
pre:not([hidden]) { animation: codeIn .35s ease backwards; }
@keyframes codeIn {
  from { opacity: 0; transform: translateY(12px) scale(.98); }
  to   { opacity: 1; transform: none; }
}
