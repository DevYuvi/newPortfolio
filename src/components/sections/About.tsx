"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SignalVisual3D } from "@/components/ui/SignalVisual3D";

export function About() {
  const [activeTab, setActiveTab] = useState<"build" | "architect" | "accelerate">("build");

  const perspectives = {
    build: {
      index: "01",
      label: "STRUCTURE",
      shape: "shape-structure",
      title: "Give an idea structure.",
      desc: "Responsive interfaces and accessible design systems in React & Next.js that turn complex requirements into intuitive software.",
    },
    architect: {
      index: "02",
      label: "RIPPLES",
      shape: "shape-ripples",
      title: "Connect the data layer.",
      desc: "RESTful Express APIs, relational MySQL schemas, TanStack Query caching, and Redis state management built for reliability.",
    },
    accelerate: {
      index: "03",
      label: "CONSTELLATION",
      shape: "shape-constellation",
      title: "Speed meets precision.",
      desc: "Harnessing AI-assisted development tools to rapidly prototype, debug production bottlenecks, and deliver features with high velocity.",
    },
  };

  const current = perspectives[activeTab];

  return (
    <section id="about" className="about chapter solid-section">
      <div className="section-label">
        <span>01 / THE PERSON BEHIND THE WORK</span>
        <span>A CONNECTED PERSPECTIVE</span>
      </div>

      <div className="about-grid">
        <div className="about-copy" data-reveal="true">
          <h2>
            From interface<br />
            to database.<br />
            <em>Engineering that works.</em>
          </h2>

          <p className="lead">
            I connect frontend interfaces, REST APIs, and database schemas.
          </p>

          <p>
            At Automize Plus in Jaipur, I develop web and mobile solutions—working
            across{" "}
            <strong className="copy-highlight">
              React.js, Next.js, Node.js, Express.js, MySQL, and AI-assisted
              workflows.
            </strong>
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link className="text-link" href="/about">
              Read my story <ArrowUpRight className="size-4" />
            </Link>
            <a
              className="text-link text-muted hover:text-fg text-xs"
              href="/resume/Yuvraj-Singh-Resume.pdf"
              download="Yuvraj-Singh-Resume.pdf"
            >
              Resume (PDF) <ArrowUpRight className="size-3" />
            </a>
          </div>

          <div className="identity-notes">
            <span>ENGINEERING MIND.</span>
            <span>PROBLEM SOLVER.</span>
            <span>BUILDER’S AMBITION.</span>
          </div>
        </div>

        <div className="signal-explorer signal-about">
          <div className="signal-topline">
            <span className="eyebrow">THREE DISCIPLINES. ONE PERSPECTIVE.</span>
            <span aria-hidden="true">{current.index} / 03</span>
          </div>

          <SignalVisual3D activeTab={activeTab} label={current.label} />

          <div className="signal-options" role="group" aria-label="Explore my disciplines">
            <button
              aria-pressed={activeTab === "build"}
              onClick={() => setActiveTab("build")}
              type="button"
            >
              Build<span aria-hidden="true">↗</span>
            </button>
            <button
              aria-pressed={activeTab === "architect"}
              onClick={() => setActiveTab("architect")}
              type="button"
            >
              Architect<span aria-hidden="true">↗</span>
            </button>
            <button
              aria-pressed={activeTab === "accelerate"}
              onClick={() => setActiveTab("accelerate")}
              type="button"
            >
              Accelerate<span aria-hidden="true">↗</span>
            </button>
          </div>

          <div className="signal-story" aria-live="polite">
            <h3>{current.title}</h3>
            <p>{current.desc}</p>
            <Link className="text-link" href="/about#capabilities">
              Background &amp; full capabilities ↗
            </Link>
          </div>

          <p className="signal-hint">Choose a perspective.</p>
        </div>
      </div>
    </section>
  );
}
