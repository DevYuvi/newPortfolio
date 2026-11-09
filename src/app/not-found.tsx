import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>This page doesn&apos;t exist</h1>
      <p>
        The link may be out of date, or the page may have moved. Everything
        else is still one click away.
      </p>
      <div style={{ display: "flex", gap: "16px", marginTop: "24px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" className="pill-link">
          <ArrowLeft aria-hidden className="size-4" />
          Back home
        </Link>
        <Link href="/work" className="pill-link">
          View projects
        </Link>
      </div>
    </section>
  );
}
