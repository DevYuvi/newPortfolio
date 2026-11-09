"use client";

import { useEffect } from "react";

/**
 * Universal Reveal Observer
 *
 * Emulates Sarthak Sharma's GSAP ScrollTrigger configuration:
 * Smoothly reveals elements as they approach the viewport so sections
 * are always clearly visible with zero missing or invisible content.
 */
export function RevealObserver() {
  useEffect(() => {
    const SELECTOR =
      "[data-reveal]:not([data-revealed]), [data-editorial-reveal]:not([data-revealed]), .editorial-section:not([data-revealed]), .work-index > a:not([data-revealed]), .case-body > section:not([data-revealed])";

    const revealElement = (el: HTMLElement) => {
      el.setAttribute("data-revealed", "true");
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach(revealElement);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          revealElement(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px 60px 0px", threshold: 0 }
    );

    const observeAll = () => {
      const windowH = window.innerHeight;
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        // If already in or close to viewport, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowH + 100) {
          revealElement(el);
        } else {
          observer.observe(el);
        }
      });
    };

    observeAll();

    // Fallback scroll check to ensure fast scrolls never leave unrevealed elements
    let scrollTicking = false;
    const onScroll = () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          const windowH = window.innerHeight;
          document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= windowH + 60 && rect.bottom >= -50) {
              revealElement(el);
              observer.unobserve(el);
            }
          });
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Re-observe if DOM mutations occur (e.g. page navigation)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
