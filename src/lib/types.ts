import type { ComponentType, SVGProps } from "react";

/** Any icon component — lucide icons and the local brand marks both fit. */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/** A single navigable section on the home page. */
export interface NavItem {
  /** Hash target on `/` — must match a `<Section id>` */
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
  /** Shown on the contact cards */
  handle: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: IconComponent;
  skills: string[];
  /** Renders the category in a muted "exploring" style */
  exploring?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  /** Human-readable, e.g. "Jan 2024 — Present" */
  period: string;
  /** ISO date, used for schema.org + sorting */
  startDate: string;
  /** ISO date or `null` when current */
  endDate: string | null;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface ProjectCaseStudy {
  problem: string;
  approach: string;
  challenges: string[];
  outcome: string;
  keyFeatures?: string[];
  architectureNote?: string;
  gallery?: ProjectImage[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  myContribution?: string;
  isAiAssisted?: boolean;
  image?: string;
  imageAlt?: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  highlights: string[];
  category?: string;
  year?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface Service {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface ProcessStep {
  /** "01" … "06" */
  number: string;
  title: string;
  description: string;
  icon: IconComponent;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Repo {
  name: string;
  description: string;
  language: string;
  /** Tailwind-safe hex for the language dot */
  languageColor: string;
  stars: number;
  forks: number;
  url: string;
}
