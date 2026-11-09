import { ArrowUpRight } from "lucide-react";

export function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Career highlights">
      <div>
        <strong>
          4<span>+</span>
        </strong>
        <p>production web &amp; mobile platforms contributed</p>
      </div>

      <div>
        <strong>
          100<span>%</span>
        </strong>
        <p>type-safe end-to-end full stack architecture</p>
      </div>

      <div>
        <strong>
          B.Tech<span></span>
        </strong>
        <p>Computer Science &amp; Engineering (7.0+ CGPA)</p>
      </div>

      <a href="#work">
        THE WORK.<br />
        THE REAL-WORLD IMPACT.
        <ArrowUpRight className="size-5" />
      </a>
    </section>
  );
}
