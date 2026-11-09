"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0 && barRef.current) {
        const progress = Math.min(1, Math.max(0, window.scrollY / scrollHeight));
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
