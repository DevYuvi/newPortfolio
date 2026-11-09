import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Education — Make complexity click.",
  description:
    "Yuvraj Singh's academic background: B.Tech in Computer Science & Engineering from RTU, core CS foundations, and full-stack engineering discipline.",
};

export default function EducationPage() {
  return (
    <article className="editorial-page">
      <header className="editorial-intro" data-reveal="true">
        <span className="eyebrow">EDUCATION / UNDERSTANDING BEFORE SYNTAX</span>
        <h1>Make complexity click.</h1>
        <p>
          A formal degree in Computer Science &amp; Engineering backed by continuous
          practical experimentation across modern full-stack technologies.
        </p>
      </header>

      <div className="editorial-layout">
        <aside>
          <span className="eyebrow">SECTIONS</span>
          <nav aria-label="Education page navigation">
            <a href="#section-0">Academic degree</a>
            <a href="#section-1">Core computer science</a>
            <a href="#section-2">Full-stack specialization</a>
            <a href="#section-3">Data engineering &amp; SQL</a>
            <a href="#section-4">Engineering mindset</a>
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
            <h2>Academic degree</h2>
            <p>
              I completed my <strong>Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering</strong> from{" "}
              <strong>Rajasthan Technical University (RTU)</strong>, graduating with a cumulative{" "}
              <strong>7.0+ CGPA</strong>.
            </p>
            <p>
              The university curriculum established a rigorous theoretical foundation,
              demanding comprehensive study of mathematical principles, algorithmic
              complexity, software design paradigms, and computational theory.
            </p>
            <p>
              Prior to university, I completed my <strong>Senior Secondary (12th, Science - PCM)</strong> from{" "}
              <strong>Mehta Public Senior Secondary School, Jaipur (RBSE)</strong> with <strong>87%</strong> in 2021, and{" "}
              <strong>Secondary (10th)</strong> from <strong>Adarsh Secondary School (UP Board)</strong> with <strong>72%</strong> in 2019.
            </p>
          </section>

          <section id="section-1" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">02</span>
            <h2>Core computer science</h2>
            <p>
              True software engineering resilience starts with computer science
              fundamentals that remain relevant regardless of which frontend framework
              is trending.
            </p>
            <p>
              My academic focus centered on:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted text-base my-4">
              <li>
                <strong className="text-fg">Data Structures &amp; Algorithms:</strong> Time and space complexity analysis, tree traversal, graph searches, sorting algorithms, and hash map implementations.
              </li>
              <li>
                <strong className="text-fg">Database Management Systems (DBMS):</strong> Relational algebra, ACID properties, transaction concurrency control, schema normalization (1NF through BCNF), and B-tree index structures.
              </li>
              <li>
                <strong className="text-fg">Operating Systems &amp; Networking:</strong> Memory management, thread synchronization, process scheduling, TCP/IP stack protocols, HTTP/HTTPS lifecycle, and socket communications.
              </li>
              <li>
                <strong className="text-fg">Object-Oriented Programming (OOP):</strong> Inheritance, encapsulation, polymorphism, abstraction, and SOLID design principles.
              </li>
            </ul>
          </section>

          <section id="section-2" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">03</span>
            <h2>Full-stack specialization</h2>
            <p>
              Building upon core CS foundations, I specialized in modern JavaScript
              and TypeScript web architectures.
            </p>
            <p>
              I studied how modern browsers parse and render the DOM, how the V8
              event loop processes microtasks, and how reactive component models
              maintain state synchronization.
            </p>
            <p>
              This foundation enabled me to build production-grade applications in
              React.js and Next.js that avoid wasteful re-renders, optimize bundle
              splits, and preserve effortless 60fps animations.
            </p>
          </section>

          <section id="section-3" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">04</span>
            <h2>Data engineering &amp; SQL</h2>
            <p>
              Most web application bottlenecks originate in poorly designed queries
              rather than frontend code. Understanding relational databases deeply has
              been a cornerstone of my engineering work.
            </p>
            <p>
              At Automize Plus, I design relational MySQL schemas with appropriate
              composite indexes, analyze query execution plans with `EXPLAIN`, and
              leverage TanStack Query caching to eliminate redundant backend trips.
            </p>
            <p>
              Whether handling fleet dispatch tables or multi-tenant WhatsApp
              subscriber lists, my focus is keeping data reliable, transactional,
              and fast.
            </p>
          </section>

          <section id="section-4" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">05</span>
            <h2>Engineering mindset</h2>
            <p>
              Formal education provides the vocabulary; production delivers the
              mastery.
            </p>
            <p>
              Every system I build reflects the discipline instilled during my
              engineering studies: verify assumptions with tests, write readable
              code for the next developer, design schemas that accommodate future
              growth, and embrace modern tooling to build with velocity.
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
          <Link href="/content" className="text-link">
            Technical notes ↗
          </Link>
        </div>
        <a href="#top" className="back-top" aria-label="Back to top">
          Back to top ↑
        </a>
      </footer>
    </article>
  );
}
