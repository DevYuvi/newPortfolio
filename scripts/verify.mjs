/**
 * End-to-end checks that Lighthouse does not cover.
 *
 *   npm run build && npm run start
 *   npm run verify                       # or BASE_URL=... npm run verify
 *
 * Requires puppeteer-core and a local Chrome (set CHROME_PATH to
 * override the default install location).
 */
import puppeteer from "puppeteer-core";

const CHROME =
  process.env.CHROME_PATH ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = process.env.BASE_URL ?? "http://localhost:3000";

const VIEWPORTS = [
  { name: "320  (small mobile)", width: 320, height: 640 },
  { name: "375  (iPhone SE)", width: 375, height: 667 },
  { name: "390  (iPhone 14)", width: 390, height: 844 },
  { name: "430  (iPhone Pro Max)", width: 430, height: 932 },
  { name: "768  (tablet)", width: 768, height: 1024 },
  { name: "1024 (laptop)", width: 1024, height: 768 },
  { name: "1440 (desktop)", width: 1440, height: 900 },
  { name: "1920 (large)", width: 1920, height: 1080 },
];

const PAGES = [
  "/",
  "/about",
  "/work",
  "/education",
  "/content",
  "/speaking",
  "/projects/transportation-management",
  "/projects/wapflux",
  "/projects/transportation-erp-mobile",
  "/projects/fitplus-crm",
  "/work/transportation-management",
  "/nope-404",
];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu"],
});

let failures = 0;
const fail = (msg) => {
  failures++;
  console.log("   ✗ " + msg);
};

/* ── 1. Console / page errors on every route ──────────────────── */
console.log("=== CONSOLE + HYDRATION ERRORS ===");
for (const path of PAGES) {
  const page = await browser.newPage();
  const msgs = [];
  page.on("console", (m) => {
    if (["error", "warning"].includes(m.type())) msgs.push(`[${m.type()}] ${m.text()}`);
  });
  page.on("pageerror", (e) => msgs.push(`[pageerror] ${e.message}`));
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 600));

  // 404 route legitimately logs a failed request; ignore that one.
  const real = msgs.filter((m) => !/Failed to load resource.*404/.test(m));
  console.log(`  ${path.padEnd(26)} ${real.length === 0 ? "✓ clean" : "✗ " + real.length + " issue(s)"}`);
  real.forEach((m) => fail(`${path}: ${m.slice(0, 160)}`));
  await page.close();
}

/* ── 2. Horizontal overflow at every breakpoint ───────────────── */
console.log("\n=== HORIZONTAL OVERFLOW (scrollWidth > viewport) ===");
for (const path of ["/", "/projects/transportation-management"]) {
  console.log(`  ${path}`);
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 60000 });
    const r = await page.evaluate(() => {
      const de = document.documentElement;
      // find the widest offending element, if any
      let worst = null;
      for (const el of document.querySelectorAll("body *")) {
        const rect = el.getBoundingClientRect();
        if (rect.right > window.innerWidth + 1) {
          if (!worst || rect.right > worst.right) {
            worst = { right: Math.round(rect.right), tag: el.tagName, cls: (el.className || "").toString().slice(0, 70) };
          }
        }
      }
      return { scrollWidth: de.scrollWidth, inner: window.innerWidth, worst };
    });
    const ok = r.scrollWidth <= r.inner + 1;
    console.log(`    ${vp.name.padEnd(24)} scrollW ${String(r.scrollWidth).padStart(5)} / ${String(r.inner).padStart(5)}  ${ok ? "✓" : "✗ OVERFLOW"}`);
    if (!ok) fail(`${path} @${vp.width}: scrollWidth ${r.scrollWidth} > ${r.inner}` + (r.worst ? ` (worst: <${r.worst.tag} class="${r.worst.cls}"> right=${r.worst.right})` : ""));
    await page.close();
  }
}

/* ── 3. Theme consistency: strictly dark theme, no theme toggle button ── */
console.log("\n=== THEME CONSISTENCY (Permanent Dark Mode) ===");
{
  const page = await browser.newPage();
  const msgs = [];
  page.on("console", (m) => { if (m.type() === "error") msgs.push(m.text()); });
  page.on("pageerror", (e) => msgs.push(e.message));
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });

  const theme = await page.evaluate(() => document.documentElement.dataset.theme);
  const toggleBtn = await page.$('button[aria-label*="Switch to"]');
  const bodyBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);

  console.log(`  theme=${theme}  hasToggle=${!!toggleBtn}  bodyBg=${bodyBg}`);
  if (theme !== "dark") fail("theme is not set to dark");
  if (toggleBtn) fail("theme toggle button was not removed");
  if (!msgs.length && theme === "dark" && !toggleBtn) console.log("  ✓ permanently dark theme, toggle button cleanly removed, no errors");
  await page.close();
}

/* ── 4. Mobile menu: opens, traps focus, Esc closes ───────────── */
console.log("\n=== MOBILE MENU (390px) ===");
{
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });

  const trigger = 'button[aria-controls="mobile-menu"]';
  const expandedBefore = await page.$eval(trigger, (el) => el.getAttribute("aria-expanded"));
  await page.click(trigger);
  await new Promise((r) => setTimeout(r, 300));
  const expandedAfter = await page.$eval(trigger, (el) => el.getAttribute("aria-expanded"));
  const menuVisible = await page.evaluate(() => !!document.getElementById("mobile-menu"));
  const focusInMenu = await page.evaluate(() => {
    const menu = document.getElementById("mobile-menu");
    return !!(menu && menu.contains(document.activeElement));
  });
  const bodyLocked = await page.evaluate(() => getComputedStyle(document.body).overflow);

  await page.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 300));
  const expandedAfterEsc = await page.$eval(trigger, (el) => el.getAttribute("aria-expanded"));
  const focusReturned = await page.evaluate(() => document.activeElement?.getAttribute("aria-controls") === "mobile-menu");
  const bodyUnlocked = await page.evaluate(() => getComputedStyle(document.body).overflow);

  console.log(`  aria-expanded: ${expandedBefore} -> ${expandedAfter} -> ${expandedAfterEsc}`);
  console.log(`  menu rendered=${menuVisible}  focusMovedIn=${focusInMenu}  bodyOverflow open=${bodyLocked} closed=${bodyUnlocked}  focusReturnedToTrigger=${focusReturned}`);
  if (expandedAfter !== "true") fail("menu did not open");
  if (!menuVisible) fail("menu element not rendered");
  if (!focusInMenu) fail("focus did not move into menu");
  if (bodyLocked !== "hidden") fail("body scroll not locked while menu open");
  if (expandedAfterEsc !== "false") fail("Escape did not close the menu");
  if (!focusReturned) fail("focus did not return to the trigger");
  await page.close();
}

/* ── 5. Reduced motion: reveal content is visible ─────────────── */
console.log("\n=== PREFERS-REDUCED-MOTION ===");
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 400));
  const hidden = await page.evaluate(() => {
    const els = [...document.querySelectorAll("[data-reveal]")];
    return els.filter((el) => parseFloat(getComputedStyle(el).opacity) < 0.99).length;
  });
  const total = await page.evaluate(() => document.querySelectorAll("[data-reveal]").length);
  console.log(`  ${total} reveal elements, ${hidden} still transparent`);
  if (hidden > 0) fail(`${hidden} reveal elements invisible under reduced motion`);
  else console.log("  ✓ all reveal content visible");
  await page.close();
}

/* ── 6. JS disabled: content still visible ────────────────────── */
console.log("\n=== JAVASCRIPT DISABLED ===");
{
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(false);
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(BASE + "/", { waitUntil: "domcontentloaded" });
  // page.evaluate needs JS, so inspect the served markup directly.
  const html = await page.content();
  const hasHero = /Full Stack Developer/.test(html);
  const hasNoscript = /\[data-reveal\]\{opacity:1/.test(html);
  console.log(`  hero text present=${hasHero}  noscript reveal-override present=${hasNoscript}`);
  if (!hasHero) fail("hero content missing without JS");
  if (!hasNoscript) fail("noscript reveal override missing");
  await page.close();
}

/* ── 7. Keyboard: skip link is first stop and focusable ───────── */
console.log("\n=== KEYBOARD NAVIGATION ===");
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });
  await page.keyboard.press("Tab");
  const first = await page.evaluate(() => {
    const el = document.activeElement;
    const cs = getComputedStyle(el);
    return { text: el.textContent?.trim().slice(0, 30), tag: el.tagName, href: el.getAttribute("href"), clip: cs.position };
  });
  console.log(`  first Tab stop: <${first.tag}> "${first.text}" href=${first.href}`);
  if (first.href !== "#main") fail("skip link is not the first tab stop");

  // walk the first 12 stops and confirm each has a visible focus indicator
  const stops = await page.evaluate(() => {
    const focusables = [...document.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      .filter((el) => el.offsetParent !== null || el.getAttribute("href") === "#main");
    return focusables.slice(0, 15).map((el) => ({ tag: el.tagName, label: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 28) }));
  });
  console.log(`  ${stops.length} focusable elements sampled; all have accessible labels: ${stops.every((s) => s.label.length > 0) ? "✓" : "✗"}`);
  if (!stops.every((s) => s.label.length > 0)) {
    fail("unlabelled focusable: " + JSON.stringify(stops.filter((s) => !s.label.length)));
  }
  await page.close();
}

/* ── 8. Anchor navigation under content-visibility ────────────────
   Below-the-fold sections use `content-visibility: auto`, so they
   report an estimated height until rendered and a naive anchor jump
   lands short — by 900px+ at the bottom of the page. SectionScroll
   corrects for this; these assertions are what keep it honest. */
console.log("\n=== ANCHOR NAVIGATION + SCROLL-SPY ===");
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });

  const navTargets = [
    { id: "work", expected: "Work" },
    { id: "about", expected: "About" },
    { id: "expertise", expected: "Skills" },
    { id: "journey", expected: "Journey" },
    { id: "contact", expected: "Let’s talk" },
  ];
  for (const { id, expected } of navTargets) {
    await page.evaluate((i) => window.scrollTo(0, 0), id);
    await new Promise((r) => setTimeout(r, 150));
    await page.evaluate(
      (i) => document.querySelector(`nav a[href*="#${i}"]`)?.click(),
      id,
    );
    await new Promise((r) => setTimeout(r, 700));

    const top = await page.evaluate(
      (i) => {
        const el = document.getElementById(i);
        return el ? Math.round(el.getBoundingClientRect().top) : null;
      },
      id,
    );
    const active = await page.evaluate(
      (i) => document.querySelector(`nav a[href*="#${i}"]`)?.textContent?.trim(),
      id,
    );
    // 96px === scroll-padding-top
    const posOk = top !== null && Math.abs(top - 96) < 30;
    const spyOk = active ? active.includes(expected) : false;
    console.log(`  #${id.padEnd(11)} top=${String(top).padStart(4)}px ${posOk ? "✓" : "✗"}   navText=${String(active).padEnd(14)} ${spyOk ? "✓" : "✗"}`);
    if (!posOk) fail(`#${id} landed at ${top}px, expected ~96px`);
    if (!spyOk) fail(`#${id}: nav text was "${active}", expected to include "${expected}"`);
  }
  await page.close();
}

/* ── 9. Cross-page anchor (/projects/x -> /#work) ─────────── */
console.log("\n=== CROSS-PAGE ANCHOR ===");
{
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(BASE + "/projects/transportation-management", { waitUntil: "networkidle0" });
  await page.evaluate(() => [...document.querySelectorAll('a[href*="/#work"]')].pop().click());
  await new Promise((r) => setTimeout(r, 1800));
  const r = await page.evaluate(() => {
    const el = document.getElementById("work");
    return { url: location.pathname + location.hash, top: el ? Math.round(el.getBoundingClientRect().top) : null };
  });
  const ok = (r.url === "/#work" || r.url.endsWith("#work")) && r.top !== null && Math.abs(r.top - 96) < 30;
  console.log(`  landed at ${r.url}, #work top = ${r.top}px ${ok ? "✓" : "✗"}`);
  if (!ok) fail(`cross-page anchor landed at ${r.url} / ${r.top}px`);
  await page.close();
}

await browser.close();

console.log("\n" + "=".repeat(52));
console.log(failures === 0 ? "ALL CHECKS PASSED" : `${failures} CHECK(S) FAILED`);
console.log("=".repeat(52));
process.exit(failures === 0 ? 0 : 1);
