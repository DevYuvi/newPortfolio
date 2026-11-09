"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function SceneBackdrop() {
  const backdropRef = useRef<HTMLDivElement>(null);
  const fallbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let currentScrollY = 0;

    const updateScroll = () => {
      currentScrollY = window.scrollY;
      const fadeThreshold = 550;

      const opacity = Math.max(0, 0.92 * (1 - currentScrollY / fadeThreshold));
      const translateY = currentScrollY * 0.16;
      const scale = Math.max(0.92, 1 - currentScrollY * 0.00028);

      if (fallbackRef.current) {
        fallbackRef.current.style.opacity = `${opacity}`;
        fallbackRef.current.style.transform = `translate(-50%, ${translateY}px) scale(${scale})`;
      }

      if (backdropRef.current) {
        backdropRef.current.style.visibility = currentScrollY > 750 ? "hidden" : "visible";
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={backdropRef} className="scene-backdrop" aria-hidden="true">
      <div
        ref={fallbackRef}
        className="artifact-fallback"
        style={{
          willChange: "transform, opacity",
          WebkitMaskImage: "linear-gradient(to bottom, #000 50%, transparent 94%)",
          maskImage: "linear-gradient(to bottom, #000 50%, transparent 94%)",
          position: "relative",
          top: "20px", // shifted higher up for cinematic composition
          paddingBottom: "36px", // calibrated bottom padding (just a bit less padding from bottom)
        }}
      >
        {/* Pure High-Definition Monochrome Portrait — Clean without any face animation */}
        <Image
          src="/images/profile/yuvraj-hero.png"
          alt="Yuvraj Singh portrait"
          width={1000}
          height={1250}
          priority
          sizes="(max-width: 700px) 90vw, 650px"
          className="w-full h-full object-contain"
          style={{
            filter: "grayscale(100%) contrast(115%) brightness(95%)",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
