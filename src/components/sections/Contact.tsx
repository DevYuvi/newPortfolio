import { ArrowUp, ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="contact chapter">
      <div className="section-label">
        <span>05 / THE NEXT CHAPTER</span>
        <span>LET’S MAKE IT MATTER</span>
      </div>

      <div className="contact-inner" data-reveal="true">
        <span className="availability">
          <i></i> OPEN TO MEANINGFUL CONVERSATIONS &amp; ROLES
        </span>

        <h2>
          Something great<br />
          starts with <em>a hello.</em>
        </h2>

        <a
          className="contact-cta"
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Let's talk on WhatsApp"
        >
          Let’s talk on WhatsApp <ArrowUpRight className="size-6" />
        </a>

        <p>
          Full-stack engineering roles, software development, or product collaboration.
          <br />
          If you have a high-impact team or challenge, I’d love to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted">
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-fg transition-colors"
          >
            <MessageCircle className="size-4 text-accent" />
            +91 7014598984 (WhatsApp)
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 hover:text-fg transition-colors"
          >
            <Mail className="size-4 text-accent" />
            {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 hover:text-fg transition-colors"
          >
            <Phone className="size-4 text-accent" />
            {site.phone}
          </a>
          <span className="text-subtle">Jaipur, Rajasthan, India</span>
        </div>
      </div>

      <footer>
        <a className="footer-name" href="#top">
          {site.name}<span>.</span>
        </a>

        <div className="socials">
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight className="size-3" />
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight className="size-3" />
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <ArrowUpRight className="size-3" />
          </a>
          <a href={`mailto:${site.email}`}>
            Email <ArrowUpRight className="size-3" />
          </a>
        </div>

        <a href="#top" className="back-top" aria-label="Back to top">
          <ArrowUp className="size-5" />
        </a>

        <div className="footer-bottom">
          <span>© 2025 {site.name.toUpperCase()}</span>
          <span>BUILT WITH INTENT. ALWAYS EVOLVING.</span>
          <span>JAIPUR, RAJASTHAN, INDIA ↗ THE WORLD</span>
        </div>
      </footer>
    </section>
  );
}
