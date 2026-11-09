"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SignalText } from "@/components/ui/SignalText";
import { site } from "@/data/site";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrollSection, setScrollSection] = useState<string>("");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const wasOpenRef = useRef(false);
  const pathname = usePathname();

  const routeSection =
    pathname === "/about"
      ? "about"
      : pathname === "/work" ||
        pathname.startsWith("/work/") ||
        pathname.startsWith("/projects/")
      ? "work"
      : pathname === "/education"
      ? "journey"
      : "";

  const activeSection = pathname === "/" ? scrollSection : routeSection;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 150 && currentScrollY > lastScrollY + 10) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY - 10 || currentScrollY < 100) {
        setHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track homepage section for Sarthak-style nav button indicator
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["work", "about", "expertise", "journey"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setScrollSection(sectionId);
          return;
        }
      }
      setScrollSection("");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      wasOpenRef.current = true;
      const firstLink = menuRef.current?.querySelector("a") as HTMLElement | null;
      firstLink?.focus();
    } else {
      document.body.style.overflow = "";
      if (wasOpenRef.current) {
        triggerRef.current?.focus();
        wasOpenRef.current = false;
      }
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className="navigation refined-navigation glass-navigation"
      data-hidden={hidden ? "true" : "false"}
      style={{
        transform: hidden ? "translateY(-120%)" : "translateY(0)",
        transition: "transform 0.34s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Wordmark logo redirects directly to homepage */}
      <Link className="wordmark" href="/" aria-label={site.name}>
        <span className="nav-identity">
          <span>{site.name}</span>
        </span>
      </Link>

      <nav
        ref={menuRef}
        className={`nav-links ${mobileOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
        id="mobile-menu"
      >
        <Link
          className="nav-destination"
          href="/#work"
          onClick={closeMenu}
          aria-current={activeSection === "work" ? "page" : undefined}
        >
          <SignalText>Work</SignalText>
          <span className="nav-mobile-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>

        <Link
          className="nav-destination"
          href="/#about"
          onClick={closeMenu}
          aria-current={activeSection === "about" ? "page" : undefined}
        >
          <SignalText>About</SignalText>
          <span className="nav-mobile-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>

        <Link
          className="nav-destination"
          href="/#expertise"
          onClick={closeMenu}
          aria-current={activeSection === "expertise" ? "page" : undefined}
        >
          <SignalText>Skills</SignalText>
          <span className="nav-mobile-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>

        <Link
          className="nav-destination"
          href="/#journey"
          onClick={closeMenu}
          aria-current={activeSection === "journey" ? "page" : undefined}
        >
          <SignalText>Journey</SignalText>
          <span className="nav-mobile-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>

        <a
          className="nav-contact"
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          aria-label="Let's talk on WhatsApp"
        >
          <SignalText>Let’s talk</SignalText>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </nav>

      <button
        ref={triggerRef}
        className="menu-toggle"
        aria-expanded={mobileOpen}
        aria-controls="mobile-menu"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={() => setMobileOpen(!mobileOpen)}
        type="button"
      >
        <span>{mobileOpen ? "Close" : "Menu"}</span>
        {mobileOpen ? (
          <X className="size-4" />
        ) : (
          <Menu className="size-4" />
        )}
      </button>
    </header>
  );
}

export default Navbar;
