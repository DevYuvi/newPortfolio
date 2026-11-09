import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About — More than one lens.",
  description:
    "Yuvraj Singh — Full Stack Developer at Automize Plus. Connecting frontend interfaces, Express REST APIs, and MySQL relational schemas.",
};

export default function AboutPage() {
  return (
    <article className="editorial-page">
      <header className="editorial-intro" data-reveal="true">
        <span className="eyebrow">THE PERSON / THE PERSPECTIVE</span>
        <h1>More than one lens.</h1>
        <p>
          An engineer’s precision. A problem solver’s grit. A builder’s drive
          to connect intuitive user interfaces with robust backend data pipelines.
        </p>
      </header>

      <div className="editorial-layout">
        <aside>
          <span className="eyebrow">SECTIONS</span>
          <nav aria-label="About page navigation">
            <a href="#section-0">My story</a>
            <a href="#section-1">Automize Plus</a>
            <a href="#section-2">Enterprise systems</a>
            <a href="#section-3">AI-assisted craft</a>
            <a href="#section-4">Production work</a>
            <a href="#section-5">Education &amp; roots</a>
            <a href="#capabilities">Depth &amp; capabilities</a>
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
            <h2>My story</h2>
            <p>
              I am a Full Stack Developer based in Jaipur, Rajasthan, India, with a
              passion for engineering end-to-end web applications that people rely
              on every single day.
            </p>
            <p>
              My path into software development was shaped by curiosity about how
              systems work beneath the surface—not just designing pixel-perfect
              components on a screen, but orchestrating the database tables,
              cache layers, and REST endpoints that make those interfaces come
              alive reliably under real production traffic.
            </p>
            <p>
              I believe great software emerges from the intersection of clean
              architecture and practical execution: building features with
              modular TypeScript code, writing parameterized SQL queries that
              respond in milliseconds, and maintaining an obsessive focus on user
              clarity.
            </p>
          </section>

          <section id="section-1" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">02</span>
            <h2>Automize Plus</h2>
            <p>
              Since January 2025, I have been working as a Full Stack Developer at{" "}
              <strong>Automize Plus</strong> in Jaipur.
            </p>
            <p>
              At Automize Plus, I collaborate directly with engineering teams to
              ship production-ready web and mobile products. My daily focus
              spans building responsive React.js interfaces, designing normalized
              MySQL schemas, implementing Express REST APIs, and integrating
              third-party cloud services like Meta’s WhatsApp Cloud API.
            </p>
            <p>
              The environment has reinforced my commitment to writing resilient,
              maintainable code that scales gracefully as business operations
              expand.
            </p>
          </section>

          <section id="section-2" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">03</span>
            <h2>Enterprise systems</h2>
            <p>
              Two major initiatives I have driven include the{" "}
              <strong>Transportation Management Website</strong> and{" "}
              <strong>FitPlus CRM</strong>.
            </p>
            <p>
              In the Transportation Management platform, I engineered operational
              dispatch interfaces using React and Tailwind CSS, coupled with
              TanStack Query v5 for seamless server-state caching and
              invalidation. On the backend, I authored Express REST routes and
              normalized MySQL tables that track shipments, routes, and fleet
              statuses with instant feedback.
            </p>
            <p>
              For FitPlus CRM, I developed a production membership and billing
              management platform, connecting Express APIs with MySQL tables to
              handle member lifecycles, attendance logs, and renewal tracking.
            </p>
          </section>

          <section id="section-3" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">04</span>
            <h2>AI-assisted craft</h2>
            <p>
              Modern software development is evolving at unprecedented velocity,
              and I actively harness AI-assisted engineering workflows to amplify
              my productivity without compromising architectural integrity.
            </p>
            <p>
              By pairing deep computer science fundamentals with advanced
              AI-assisted development tools, I rapidly prototype ideas, catch
              subtle edge cases in data transformations, generate comprehensive
              test suites, and accelerate boilerplate delivery.
            </p>
            <p>
              This hybrid approach allowed me to build a full-featured
              cross-platform Transportation ERP mobile application in record time,
              delivering production-grade quality with remarkable speed.
            </p>
          </section>

          <section id="section-4" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">05</span>
            <h2>Production work</h2>
            <p>
              Beyond traditional web applications, I have worked on{" "}
              <strong>Wapflux</strong>, a multi-tenant WhatsApp messaging
              platform leveraging React, PostgreSQL, Redis, and Prisma ORM to
              interact directly with Meta’s WhatsApp Cloud API.
            </p>
            <p>
              This work demanded high attention to webhook verification, message
              queuing, token lifecycle management, and strict rate-limiting
              compliance.
            </p>
            <p>
              Whether it is a real-time messaging pipeline or a logistics
              scheduling tool, my focus remains steady: build systems that are
              intuitive for the end user and robust for the business.
            </p>
          </section>

          <section id="section-5" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">06</span>
            <h2>Education &amp; roots</h2>
            <p>
              I was born and raised in Jaipur, Rajasthan, India—a city that marries
              rich heritage with a growing tech ecosystem.
            </p>
            <p>
              I graduated with a <strong>B.Tech in Computer Science &amp; Engineering</strong> from{" "}
              <strong>Rajasthan Technical University (RTU)</strong> with a <strong>7.0+ CGPA</strong> (2025),
              following Senior Secondary Science from <strong>Mehta Public Senior Secondary School</strong> (87%, 2021) and
              Secondary from <strong>Adarsh Secondary School</strong> (72%, 2019). My academic coursework gave
              me deep grounding in Data Structures, Relational Database Systems, Operating Systems, and Software Engineering methodologies.
            </p>
            <p>
              When I am not coding, I enjoy exploring emerging developer tooling,
              studying system architectures, and contributing to open-source
              experiments.
            </p>
          </section>

          <section id="capabilities" className="editorial-section" data-editorial-reveal="true">
            <span className="eyebrow">CAPABILITIES</span>
            <h2>Depth &amp; perspective.</h2>
            <p>
              The combination of skills and tools I bring to every engineering
              endeavor.
            </p>

            <details className="competency" open>
              <summary>
                <span>Frontend Architecture</span>
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                React.js, Next.js (App Router), TypeScript, Tailwind CSS,
                TanStack Query v5, HTML5/CSS3, responsive design systems, and
                keyboard accessibility.
              </p>
            </details>

            <details className="competency">
              <summary>
                <span>Backend &amp; API Engineering</span>
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                Node.js, Express.js, RESTful API design, JWT authentication,
                middleware architecture, request validation, error handling, and
                Axios interceptors.
              </p>
            </details>

            <details className="competency">
              <summary>
                <span>Database &amp; Persistence</span>
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                MySQL relational schemas, PostgreSQL, Prisma ORM, Redis caching,
                foreign key constraints, query indexing, and data normalization.
              </p>
            </details>

            <details className="competency">
              <summary>
                <span>Mobile &amp; Cloud Integrations</span>
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                React Native, Expo, Meta WhatsApp Cloud API webhooks, Git/GitHub
                version control, Postman API testing, and AI-assisted engineering.
              </p>
            </details>
          </section>
        </div>
      </div>

      <footer className="editorial-footer">
        <div>
          <Link href="/work" className="text-link">
            Explore my work ↗
          </Link>
          <Link href="/education" className="text-link">
            Academic foundations ↗
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
