import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Speaking & Discussions — Ideas meet people.",
  description:
    "Yuvraj Singh's speaking profile, engineering workshops, and technical talks on full-stack development and AI-assisted workflows.",
};

export default function SpeakingPage() {
  return (
    <article className="editorial-page">
      <header className="editorial-intro" data-reveal="true">
        <span className="eyebrow">SPEAKING / REAL CONVERSATIONS</span>
        <h1>Ideas meet people.</h1>
        <p>
          Technical talks, practical development workshops, and architectural
          discussions that bridge frontend aesthetics with backend reliability.
        </p>
      </header>

      <div className="editorial-layout">
        <aside>
          <span className="eyebrow">SECTIONS</span>
          <nav aria-label="Speaking page navigation">
            <a href="#section-0">Engineering philosophy</a>
            <a href="#section-1">Full-stack architecture</a>
            <a href="#section-2">AI-assisted workflows</a>
            <a href="#section-3">Discussion topics</a>
            <a href="#section-4">Collaborate</a>
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
            <span className="eyebrow">01</span>
            <h2>Engineering philosophy: Build for reality</h2>
            <p>
              Software in production faces realities that tutorials never anticipate:
              unstable network connections, conflicting concurrent edits, unexpected
              database deadlocks, and edge-case user behavior.
            </p>
            <p>
              In my discussions, I focus on pragmatic engineering: how to structure
              clean React components that remain maintainable after six months, how
              to write SQL transactions that guarantee data consistency, and how to
              design error states that guide users rather than confuse them.
            </p>
          </section>

          <section id="section-1" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">02</span>
            <h2>Full-stack architecture: Connecting interface to database</h2>
            <p>
              The most effective developers understand the entire journey of a user
              action—from the button click and optimistic UI update, through HTTP
              interceptors and reverse proxies, into Express routing middleware, and
              down to normalized database indexes.
            </p>
            <p>
              I share actionable strategies on building end-to-end type-safe pipelines
              with TypeScript, eliminating boilerplate with reusable hooks, and
              preventing common performance traps like N+1 queries.
            </p>
          </section>

          <section id="section-2" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">03</span>
            <h2>AI-assisted workflows for modern developers</h2>
            <p>
              The future belongs to engineers who understand how to orchestrate AI
              tools effectively.
            </p>
            <p>
              I demonstrate practical methods for integrating AI coding assistants into
              daily development: accelerating boilerplate generation, drafting complex
              regular expressions, writing unit test suites, and refactoring legacy
              codebases while upholding strict architecture and type safety.
            </p>
          </section>

          <section id="section-3" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">04</span>
            <h2>Topics I bring to the table</h2>
            <ul className="list-disc pl-5 space-y-3 text-muted text-base my-4">
              <li>
                <strong className="text-fg">Modern React &amp; Next.js Patterns:</strong> Server vs Client components, TanStack Query caching, and accessible UI engineering.
              </li>
              <li>
                <strong className="text-fg">Express &amp; MySQL Backend Design:</strong> Relational modeling, JWT authentication, and structured error handling.
              </li>
              <li>
                <strong className="text-fg">Production WhatsApp Integrations:</strong> Handling Meta Cloud API webhooks at scale with verification and queues.
              </li>
              <li>
                <strong className="text-fg">Cross-Platform Mobile with Expo:</strong> Bringing web development skills into native iOS and Android environments.
              </li>
            </ul>
          </section>

          <section id="section-4" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">05</span>
            <h2>Let’s create a useful conversation</h2>
            <p>
              Whether you are organizing a technical meetup, looking for a guest speaker
              on modern full-stack workflows, or seeking engineering collaboration,
              I welcome meaningful conversations.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
                aria-label="Chat on WhatsApp"
              >
                Chat on WhatsApp (+91 7014598984) <ArrowUpRight className="size-4 inline ml-1" />
              </a>
              <a href={`mailto:${site.email}`} className="text-link">
                Direct email: {site.email} <ArrowUpRight className="size-4 inline ml-1" />
              </a>
            </div>
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
          <Link href="/content" className="text-link">
            Engineering notes ↗
          </Link>
        </div>
        <a href="#top" className="back-top" aria-label="Back to top">
          Back to top ↑
        </a>
      </footer>
    </article>
  );
}
