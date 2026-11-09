"use client";

import { useEffect } from "react";

/** Must match `scroll-padding-top` in globals.css. */
const NAV_OFFSET = 96;

/**
 * Corrects in-page anchor scrolling.
 *
 * Sections below the fold use `content-visibility: auto`, so until
 * they are rendered the browser lays them out at their estimated
 * `contain-intrinsic-size` rather than their real height. A single
 * scroll therefore lands short, and the error compounds with every
 * un-rendered section between here and the target — measured at over
 * 900px by the time you reach the last section.
 *
 * The fix is to re-target on successive frames: each scroll renders
 * more of the page, so the computed position converges on the truth,
 * normally within two or three frames (~30ms, imperceptible).
 *
 * One delegated listener covers every in-page link on the site —
 * navbar, hero CTA, footer — so no other component needs to know
 * this is happening.
 */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  let previous = Number.NaN;
  let frames = 0;

  const step = () => {
    const target = Math.max(
      0,
      el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET,
    );

    // Converged, or a safety valve so this can never spin.
    if (Math.abs(target - previous) < 1 || frames > 30) return;

    previous = target;
    frames += 1;
    // "instant" overrides the CSS `scroll-behavior: smooth`, which
    // would otherwise animate against each correction.
    window.scrollTo({ top: target, behavior: "instant" });
    requestAnimationFrame(step);
  };

  step();
}

export function SectionScroll() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      // Let the browser handle modified clicks (new tab, download…).
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = (event.target as HTMLElement | null)?.closest("a");
      const href = link?.getAttribute("href");
      if (!href) return;

      const match = /^(?:\/)?#(.+)$/.exec(href);
      if (!match) return;

      // A "/#section" link from a project page is a real navigation.
      if (href.startsWith("/#") && window.location.pathname !== "/") return;

      const id = match[1]!;
      // The skip link targets #main, which is not a deferred section
      // and must keep its native focus behaviour.
      if (id === "main") return;

      const el = document.getElementById(id);
      if (!el) return;

      event.preventDefault();
      history.pushState(null, "", `/#${id}`);
      scrollToSection(id);
    }

    document.addEventListener("click", onClick);

    // Arriving with a hash already in the URL (e.g. from a project
    // page) hits the same estimation problem, so correct once on load.
    if (window.location.hash.length > 1) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      requestAnimationFrame(() => scrollToSection(id));
    }

    const updateScrollProgress = () => {
      const bar = document.getElementById("scroll-progress");
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return null;
}
