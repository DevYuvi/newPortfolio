"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SignalText } from "@/components/ui/SignalText";
import { site } from "@/data/site";

export function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (contentRef.current && heroRef.current) {
            const heroHeight = heroRef.current.offsetHeight || 800;
            const scrollY = window.scrollY;

            // Start at 25% of hero, end at 100% of hero
            const start = heroHeight * 0.25;
            const end = heroHeight;
            const progress = Math.min(1, Math.max(0, (scrollY - start) / (end - start)));

            const y = progress * -65;
            const opacity = 1 - progress * 0.65; // from 1.0 down to 0.35

            contentRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
            contentRef.current.style.opacity = `${opacity}`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={heroRef} className="hero" id="top">
      <div className="hero-grid" aria-hidden="true"></div>

      <div className="hero-topline">
        <span>
          <i className="live-dot"></i> FULL STACK DEVELOPER · ENGINEER · BUILDER
        </span>
        <span>BASED IN JAIPUR, INDIA · THINKING BEYOND</span>
      </div>

      <div
        ref={contentRef}
        className="hero-content"
        style={{ willChange: "transform, opacity" }}
      >
        <h1>
          <span className="line-mask">
            <span className="reveal-line">
              Yuvraj <em>Singh</em>
            </span>
          </span>
        </h1>

        <div className="hero-description">
          <p>
            I build digital products from interface to API.
            <br className="desktop-break" />
            Full Stack Developer.
          </p>

          <div className="hero-actions">
            <a className="pill-link" href="#work">
              <SignalText>Explore my work</SignalText>
              <ArrowDown className="size-4" />
            </a>

            <a
              className="text-link"
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Start a conversation on WhatsApp"
            >
              <SignalText>Start a conversation</SignalText>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="hero-side-note">
        <span>01 / PRESENCE</span>
        <span>
          REACT & NEXT.JS<br />
          NODE & EXPRESS<br />
          AI-ASSISTED WORKFLOWS
        </span>
      </div>

      <div className="hero-bottom">
        <a href="#about">
          <span className="scroll-line"></span> SCROLL TO DISCOVER{" "}
          <ArrowDown className="size-3 inline ml-1" />
        </a>
        <span>BUILDING AT AUTOMIZE PLUS · 2025</span>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-edition"
        >
          AVAILABLE FOR OPPORTUNITIES ↗
        </a>
      </div>
    </section>
  );
}
