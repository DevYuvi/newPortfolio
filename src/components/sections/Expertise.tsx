"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { SignalText } from "@/components/ui/SignalText";

export function Expertise() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const items = [
    {
      id: 0,
      eyebrow: "01 / FULL STACK ARCHITECTURE",
      title: "Build with perspective.",
      body: "I connect frontend interfaces with backend services and databases. From the first schema design to the polished interface people use daily.",
      strengths:
        "React.js · Next.js · TypeScript · Node.js · Express.js · MySQL · PostgreSQL",
    },
    {
      id: 1,
      eyebrow: "02 / DATA & SYSTEM STATE",
      title: "Make systems resilient.",
      body: "I build robust RESTful APIs with TanStack Query caching, relational schema validation, and Redis state backing that keep operations responsive.",
      strengths:
        "REST APIs · TanStack Query · Prisma ORM · Relational Schemas · Redis · Axios",
    },
    {
      id: 2,
      eyebrow: "03 / AI-ASSISTED CRAFT",
      title: "Accelerate with intent.",
      body: "I leverage modern AI-assisted engineering tools to accelerate implementation, debug complex edge cases, and deliver full-stack features with high velocity.",
      strengths:
        "AI-Assisted Development · Rapid Prototyping · Code Debugging · Modern Workflow Acceleration",
    },
  ];

  const toggle = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <section className="expertise chapter solid-section" id="expertise">
      <div className="section-label">
        <span>03 / HOW I THINK &amp; WORK</span>
        <span>DEPTH MEETS DISCIPLINE</span>
      </div>

      <div className="expertise-grid expertise-studio">
        <div className="expertise-intro">
          <h2>
            How I work.<br />
            <em>From idea to execution.</em>
          </h2>
          <p className="muted">Follow the engineering lifecycle.</p>

          <div className="thinking-path" aria-live="polite">
            <span className="eyebrow">
              <SignalText>ENGINEERING LIFECYCLE</SignalText>
            </span>
            <ol>
              <li style={{ animationDelay: "0ms" }}>
                <span>01</span>Understand the operational requirement
              </li>
              <li style={{ animationDelay: "70ms" }}>
                <span>02</span>Architect schema, state &amp; APIs
              </li>
              <li style={{ animationDelay: "140ms" }}>
                <span>03</span>Deliver clean, accessible UI
              </li>
            </ol>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/education" className="text-link">
                Teaching &amp; curriculum ↗
              </Link>
              <Link href="/content" className="text-link">
                Content &amp; conversations ↗
              </Link>
            </div>
          </div>
        </div>

        <div className="expertise-list">
          {items.map((item) => {
            const isExpanded = expanded === item.id;
            return (
              <article
                key={item.id}
                className={`expertise-item ${isExpanded ? "expanded" : ""}`}
              >
                <h3>
                  <button
                    aria-expanded={isExpanded}
                    aria-controls={`expertise-${item.id}`}
                    onClick={() => toggle(item.id)}
                    type="button"
                  >
                    <span>
                      <small className="eyebrow">
                        <SignalText>{item.eyebrow}</SignalText>
                      </small>
                      {item.title}
                    </span>
                    {isExpanded ? (
                      <Minus className="size-6" />
                    ) : (
                      <Plus className="size-6" />
                    )}
                  </button>
                </h3>

                <div
                  id={`expertise-${item.id}`}
                  hidden={!isExpanded}
                  className="expertise-body"
                >
                  <p>{item.body}</p>
                  <p className="strengths">{item.strengths}</p>
                  <a href="#work" className="expertise-depth">
                    View matching projects ↗
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
