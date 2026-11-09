import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Content — Depth, made accessible.",
  description:
    "Engineering insights, architectural breakdowns, and practical full-stack lessons by Yuvraj Singh.",
};

export default function ContentPage() {
  return (
    <article className="editorial-page">
      <header className="editorial-intro" data-reveal="true">
        <span className="eyebrow">INSIGHTS / ENGINEERING PRACTICES</span>
        <h1>Depth, made accessible.</h1>
        <p>
          Technical breakdowns, architectural reflections, and practical lessons
          learned from building full-stack applications and production services.
        </p>
      </header>

      <div className="editorial-layout">
        <aside>
          <span className="eyebrow">TOPICS</span>
          <nav aria-label="Content page navigation">
            <a href="#section-0">Scalable REST APIs</a>
            <a href="#section-1">TanStack Query state</a>
            <a href="#section-2">WhatsApp Cloud API</a>
            <a href="#section-3">AI-assisted velocity</a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
              aria-label="Start a conversation on WhatsApp"
            >
              Start a conversation <ArrowUpRight className="size-3.5 inline ml-1" />
            </a>
          </nav>
        </aside>

        <div className="editorial-content">
          <section id="section-0" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">01 / ARCHITECTURE</span>
            <h2>Architecting clean Express.js REST APIs</h2>
            <p>
              When building backend services for high-activity operations like logistics
              management, API design cannot be an afterthought.
            </p>
            <p>
              In our Transportation Management platform, we decoupled routing,
              business controllers, and data-access layers. Every endpoint enforces
              strict request schema validation, uniform JSON error structures, and
              centralized JWT verification middleware.
            </p>
            <p>
              By keeping controllers slim and encapsulating SQL logic into dedicated
              services, our team can safely refactor database schemas without
              breaking API contracts consumed by client applications.
            </p>
          </section>

          <section id="section-1" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">02 / FRONTEND STATE</span>
            <h2>Why TanStack Query is essential for operational UIs</h2>
            <p>
              Many React applications suffer from bloated global state managers
              attempting to handle server data. Server data is not client state; it is
              a remote cache that requires synchronization, caching, and invalidation.
            </p>
            <p>
              Adopting TanStack Query v5 transformed how our dispatch dashboards operate.
              Features like automatic background refetching, structural sharing, and
              optimistic UI mutations give operators immediate feedback while maintaining
              rock-solid consistency with our MySQL database.
            </p>
            <p>
              Separating client UI state (modals, filters, drawer visibility) from
              server cache resulted in cleaner codebases and dramatically fewer
              synchronization bugs.
            </p>
          </section>

          <section id="section-2" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">03 / CLOUD MESSAGING</span>
            <h2>Resilient Meta WhatsApp Cloud API integrations</h2>
            <p>
              Building Wapflux required direct integration with Meta’s official
              WhatsApp Cloud API. Unlike simple REST webhooks, handling enterprise
              messaging demands strict resilience:
            </p>
            <p>
              Webhooks must respond with HTTP 200 within 3 seconds to avoid delivery
              retries from Meta. We designed an asynchronous processing pipeline:
              incoming payloads are immediately validated against HMAC signatures and
              enqueued, allowing worker processes to handle database persistence,
              status receipts, and template parsing without blocking the HTTP thread.
            </p>
          </section>

          <section id="section-3" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">04 / WORKFLOWS</span>
            <h2>The reality of AI-assisted engineering velocity</h2>
            <p>
              AI tools are not replacements for engineering judgment; they are
              force multipliers for disciplined developers.
            </p>
            <p>
              In my day-to-day workflow, I leverage AI assistance for rapid schema
              drafting, edge-case generation in validation schemas, regex construction,
              and cross-platform React Native code adaptation.
            </p>
            <p>
              The velocity gain is dramatic, but only because it is anchored by a solid
              understanding of what good architecture looks like.
            </p>
          </section>
        </div>
      </div>

      <footer className="editorial-footer">
        <div>
          <Link href="/work" className="text-link">
            Explore my work ↗
          </Link>
          <Link href="/about" className="text-link">
            About me ↗
          </Link>
          <Link href="/speaking" className="text-link">
            Speaking profile ↗
          </Link>
        </div>
        <a href="#top" className="back-top" aria-label="Back to top">
          Back to top ↑
        </a>
      </footer>
    </article>
  );
}
