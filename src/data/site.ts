import { Mail, MessageCircle, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import type { NavItem, SocialLink } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for Yuvraj Singh's identity and links.
 * Verified against resume and official profiles.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: "Yuvraj Singh",
  role: "Full Stack Developer",
  headline: "Building digital products from interface to API.",
  headlineAlternative: "Engineering practical products. Designing better experiences.",
  description:
    "Full Stack Developer based in Jaipur, India. Specialising in React.js, Next.js, TypeScript, Node.js, Express.js, and MySQL with production experience at Automize Plus.",
  intro:
    "I am a Full Stack Developer with experience working on web applications using React.js, JavaScript/TypeScript, Node.js, Express.js, and MySQL. I have contributed to a Transportation Management platform and a production gym CRM, worked on a WhatsApp messaging platform with AI-assisted coding support, and built a transportation ERP mobile app using AI-assisted development tools.",
  shortIntro:
    "I engineer reliable, production-ready applications end-to-end — from accessible React interfaces to high-throughput Node.js APIs, relational schemas, and cross-platform mobile apps.",
  location: "Jaipur, Rajasthan, India",
  email: "yuvi022004@gmail.com",
  phone: "+91 7014598984",
  whatsapp: "917014598984",
  whatsappUrl: "https://wa.me/917014598984",
  company: "Automize Plus",
  experiencePeriod: "January 2025 – Present",
  available: true,
  availabilityText: "Available for new opportunities",
  resumeUrl: "/resume/Yuvraj-Singh-Resume.pdf",
  avatar: "/images/profile/yuvraj-hero.png",
  avatarAlt: "Yuvraj Singh — Full Stack Developer",
  social: {
    github: "https://github.com/DevYuvi",
    linkedin: "https://linkedin.com/in/yuvraj-singh-3bb039285",
    whatsapp: "https://wa.me/917014598984",
  },
} as const;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yuvrajsingh.dev"
).replace(/\/$/, "");

export const keywords = [
  "Yuvraj Singh",
  "Full Stack Developer",
  "React.js Developer",
  "Next.js Developer",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MySQL",
  "PostgreSQL",
  "Automize Plus",
  "Jaipur Rajasthan Developer",
  "React Native",
  "REST APIs",
  "AI-assisted development",
];

export const expertise = [
  "Full Stack Web Development",
  "React.js & Next.js App Router",
  "TypeScript Architecture",
  "Node.js & Express REST APIs",
  "MySQL & PostgreSQL Relational Schemas",
  "React Native & Expo Mobile Apps",
  "TanStack Query & State Management",
  "Meta WhatsApp Cloud API Integration",
  "AI-Assisted Engineering Workflows",
];

export const navItems: NavItem[] = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: site.social.github,
    icon: GithubIcon,
    handle: "DevYuvi",
  },
  {
    label: "LinkedIn",
    href: site.social.linkedin,
    icon: LinkedinIcon,
    handle: "yuvraj-singh-3bb039285",
  },
  {
    label: "WhatsApp",
    href: site.whatsappUrl,
    icon: MessageCircle,
    handle: "+91 7014598984",
  },
];

export const contactMethods: SocialLink[] = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: Mail,
    handle: site.email,
  },
  {
    label: "Phone",
    href: `tel:${site.phone.replace(/\s+/g, "")}`,
    icon: Phone,
    handle: site.phone,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${site.whatsapp}`,
    icon: MessageCircle,
    handle: "Direct Chat",
  },
  ...socialLinks,
];

export const sameAs = Object.values(site.social);
