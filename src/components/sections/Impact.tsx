"use client";

import { ArrowUpRight } from "lucide-react";
import { SignalText } from "@/components/ui/SignalText";

export function Impact() {
  return (
    <section id="impact" className="impact-stage chapter">
      <div className="impact-stage-content">
        <div className="section-label">
          <span>
            <SignalText>04 / PRODUCTION IMPACT</SignalText>
          </span>
          <span>SYSTEMS. CLIENTS. RELIABILITY.</span>
        </div>

        <div className="impact-title" data-editorial-reveal="true">
          <h2>
            Reach is a number.<br />
            <em>Impact is personal.</em>
          </h2>
          <p>
            Every line of code and user workflow
            <br />
            is a chance to make operations seamless.
          </p>
        </div>

        <div className="impact-lead" data-editorial-reveal="true">
          <div className="impact-value">
            <span>4</span>
            <em>+</em>
          </div>

          <div className="impact-context">
            <h3>
              Production systems shipped.<br />
              Operational workflows solved.
            </h3>
            <p>
              Connecting React frontends to Node APIs, relational databases, and
              cross-platform mobile apps.
            </p>
            <a className="text-link" href="#work">
              Explore the systems <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="impact-pair">
          <div data-editorial-reveal="true">
            <strong>
              100<em>%</em>
            </strong>
            <h3>Type safety &amp; validation</h3>
            <p>
              End-to-end TypeScript interfaces and schema validation guarding
              production business data.
            </p>
          </div>

          <div data-editorial-reveal="true">
            <strong>
              24<em>/7</em>
            </strong>
            <h3>Operational readiness</h3>
            <p>
              Production logistics, WhatsApp messaging, and gym CRM workflows
              running daily.
            </p>
          </div>

          <div className="impact-principle" data-editorial-reveal="true">
            <span className="eyebrow">THE COMMON THREAD</span>
            <p>
              Build something useful.<br />
              Ensure it runs reliably.<br />
              <em>Give it room to grow.</em>
            </p>
          </div>
        </div>

        <div className="brand-story" data-editorial-reveal="true">
          <div className="brand-story-heading">
            <span className="eyebrow">AUTOMIZE PLUS / PRODUCTION WORK</span>
            <h3>
              From operational complexity.<br />
              <em>To software that delivers.</em>
            </h3>
            <p>
              Since January 2025 at Automize Plus in Jaipur, I develop web and
              mobile applications that solve business bottlenecks across
              transportation logistics, WhatsApp cloud messaging, and studio
              management.
            </p>
            <a className="text-link" href="#work">
              Explore my contributions <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="brand-milestones">
            <div>
              <span>2024</span>
              <p>
                <b>Academic Foundation.</b> Graduated with B.Tech in Computer
                Science &amp; Engineering from Rajasthan Technical University (7.0+
                CGPA).
              </p>
            </div>

            <div>
              <span>JAN 2025</span>
              <p>
                <b>Full Stack Developer at Automize Plus.</b> Shipping features
                across Transportation Management, Wapflux, and FitPlus CRM.
              </p>
            </div>

            <div>
              <span>Today</span>
              <p>
                <b>Multi-Platform Architecture.</b> Engineering mobile ERP apps,
                integrating Meta WhatsApp Cloud API, and AI-assisted workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
