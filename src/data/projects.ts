import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "transportation-management",
    title: "Transportation Management Website",
    category: "Web Application / Logistics",
    year: "2025",
    description:
      "Built web application features for transportation operations, connecting responsive React interfaces with Express REST APIs and MySQL-backed workflows.",
    myContribution:
      "Owned full-stack features: designed MySQL relational tables, built reusable React UI components, implemented TanStack Query caching and invalidation, and developed Express REST endpoints with JWT validation.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "TanStack Query",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT Auth",
    ],
    image: "/images/projects/transportation-management.png",
    imageAlt: "Transportation Management System operational dashboard and dispatch tables",
    featured: true,
    highlights: [
      "Real-time shipment and fleet dispatch tables",
      "TanStack Query v5 caching & optimistic state sync",
      "Express.js REST APIs with structured business logic",
      "Normalized MySQL database schema for logistics",
      "Reusable, keyboard-accessible component library",
    ],
    caseStudy: {
      problem:
        "Managing transportation operations across multiple routes and carriers previously suffered from fragmented data entry, inconsistent status reporting, and slow UI updates that hindered dispatch decisions.",
      approach:
        "Architected a clean React frontend powered by TanStack Query for seamless server-state management. Implemented Express REST APIs adhering to MVC principles, with carefully designed MySQL queries that deliver shipment and vehicle statuses without unnecessary round-trips.",
      challenges: [
        "Handling high-frequency status transitions across active consignments without UI lag.",
        "Ensuring clean separation between UI state and server cache with intelligent query invalidation.",
        "Writing parameterized SQL queries and table indexes to keep dispatch queries under 50ms.",
      ],
      outcome:
        "Delivered a fast, responsive operational dashboard enabling dispatchers to track shipments, inspect carrier details, and coordinate routes with dependable real-time feedback.",
      keyFeatures: [
        "Transportation operations & route monitoring",
        "Responsive React interfaces with Tailwind CSS",
        "REST API integration with error interceptors",
        "MySQL-backed workflows with schema validation",
        "Data fetching and caching using TanStack Query",
        "Reusable UI component architecture",
      ],
      architectureNote: "React + TanStack Query frontend talking to Express.js REST API with MySQL relational persistence.",
    },
  },
  {
    slug: "wapflux",
    title: "Wapflux — WhatsApp Business CPaaS",
    category: "CPaaS Platform / Messaging",
    year: "2025",
    description:
      "Contributed to a multi-tenant WhatsApp messaging platform for sending and tracking messages, including dashboard functionality, database-backed services, and Meta Cloud API integration.",
    myContribution:
      "Worked on the multi-tenant customer dashboard, database-backed services with Prisma and PostgreSQL, and Meta WhatsApp Cloud API integration using AI-assisted development tools.",
    technologies: [
      "React",
      "PostgreSQL",
      "Redis",
      "Prisma ORM",
      "Meta WhatsApp Cloud API",
      "BullMQ",
      "Docker",
    ],
    image: "/images/projects/wapflux.png",
    imageAlt: "Wapflux messaging dashboard with template tracking and dispatch queues",
    featured: true,
    highlights: [
      "Meta WhatsApp Cloud API integration for template dispatch",
      "Multi-tenant data isolation modeled in PostgreSQL via Prisma",
      "BullMQ & Redis background queue for resilient dispatch",
      "HMAC-signed webhook verification and status callbacks",
      "Live conversation and broadcast analytics panels",
    ],
    caseStudy: {
      problem:
        "Businesses needed a reliable way to orchestrate official WhatsApp messaging at scale with tenant isolation, template approvals, and message delivery status tracking without hitting Meta rate limits blindly.",
      approach:
        "Contributed to the multi-tenant architecture where organizations manage message templates and webhook listeners. Used AI-assisted engineering tools (Cursor, Copilot) to accelerate database schema modeling in Prisma and backend service implementation.",
      challenges: [
        "Handling asynchronous webhook delivery receipts from Meta while preserving idempotency.",
        "Structuring multi-tenant database access so tenants never leak cross-boundary data.",
        "Managing queue backoff and retries using BullMQ and Redis for transient network failures.",
      ],
      outcome:
        "Built a robust CPaaS dashboard interface and service layer allowing team operators to dispatch verified WhatsApp notifications, view real-time delivery ticks, and monitor quotas.",
      keyFeatures: [
        "Interactive messaging and campaign dashboard",
        "Multi-tenant platform context with RBAC",
        "Database-backed services via Prisma ORM",
        "Official Meta WhatsApp Cloud API integration",
        "Message tracking workflows and delivery callbacks",
        "BullMQ & Redis queue integration",
      ],
      architectureNote: "Multi-tenant Turborepo with React dashboard, Fastify/Nest services, Prisma ORM, BullMQ, and Redis.",
    },
  },
  {
    slug: "transportation-erp-mobile",
    title: "FreightBook — Logistics ERP Mobile App",
    category: "Mobile Application / Logistics",
    year: "2025",
    isAiAssisted: true,
    description:
      "Built a cross-platform mobile ERP application with AI-assisted development for logistics operations and accounting workflows.",
    myContribution:
      "Developed the mobile ERP screens using React Native and Expo with AI-assisted development (Cursor & Copilot), implementing Lorry Receipt (LR) lifecycle, trip billing, and voucher entry.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "TanStack Query",
      "Zustand",
      "Zod",
    ],
    image: "/images/projects/freightbook-mobile.jpg",
    imageAlt: "FreightBook mobile application dashboard and Lorry Receipt tracking interface",
    featured: true,
    highlights: [
      "Substantial AI-assisted development (Cursor & Claude)",
      "Lorry Receipt (LR) full lifecycle creation and tracking",
      "Trip billing & accounting voucher ledger validation",
      "Multi-company context & fiscal-year switching",
      "PDF & Excel statement generation with Hindi/English support",
    ],
    caseStudy: {
      problem:
        "Field logistics supervisors and transport managers required on-the-go capability to generate Lorry Receipts (LR), record payment vouchers, and review party ledgers directly from smartphones without a desktop ERP terminal.",
      approach:
        "Utilized modern AI-assisted engineering tools to build a comprehensive cross-platform app in React Native and Expo. Architected strict Zod form validation schemas, lightweight Zustand stores, and smooth Expo Router navigation.",
      challenges: [
        "Ensuring complex accounting vouchers maintain double-entry ledger validation rules on mobile forms.",
        "Implementing multi-company tenant switching with persistent fiscal-year contexts.",
        "Generating clean printable PDF and Excel exports locally via mobile sharing channels.",
      ],
      outcome:
        "Successfully delivered a production-ready mobile ERP app deployed across logistics operations, drastically speeding up field LR issuance and billing turnaround.",
      keyFeatures: [
        "Lorry Receipt (LR) lifecycle management",
        "Trip billing & freight calculations",
        "Driver and vehicle master records",
        "Accounting vouchers with ledger balance checks",
        "Multi-company operations & fiscal-year switching",
        "PDF and Excel export functionality",
        "Bilingual support (English & Hindi)",
      ],
      architectureNote: "AI-assisted React Native / Expo application with Expo Router, TanStack Query, and Zustand.",
    },
  },
  {
    slug: "fitplus-crm",
    title: "FitPlus — Gym & Studio CRM",
    category: "SaaS CRM / Production",
    year: "2025",
    description:
      "Contributed features and UI improvements to a live production gym and studio CRM, integrating frontend components with existing REST APIs.",
    myContribution:
      "Shipped frontend feature updates, improved UI consistency and form handling, integrated REST endpoints via Axios, and worked on Node.js/MySQL backend features.",
    technologies: [
      "React.js",
      "Bootstrap",
      "Axios",
      "Node.js",
      "MySQL",
    ],
    image: "/images/projects/fitplus-crm.png",
    imageAlt: "FitPlus CRM gym management dashboard preview with member tables and plan tiers",
    featured: true,
    live: "https://fitpluscrm.com",
    highlights: [
      "Live production SaaS at fitpluscrm.com",
      "Member management and active subscription tracking",
      "Axios REST API integration with token handling",
      "Clean operational dashboards for gym staff",
      "Backend feature updates in Node.js and MySQL",
    ],
    caseStudy: {
      problem:
        "Gym owners and studio managers needed a dependable, responsive interface to manage member subscriptions, daily attendance, class bookings, and renewal alerts without clunky software friction.",
      approach:
        "Collaborated on the live CRM platform to deliver polished React components, streamline member workflows, and ensure Axios requests correctly reflect real-time subscription statuses.",
      challenges: [
        "Integrating new features into an established production codebase without regressions.",
        "Enhancing table rendering and filtering responsiveness for gyms with large membership bases.",
        "Coordinating frontend validation with existing backend API contracts.",
      ],
      outcome:
        "Shipped practical UI enhancements and feature additions that improved day-to-day usability for gym operators and staff using the CRM in production.",
      keyFeatures: [
        "Gym & fitness studio management context",
        "Frontend feature development with React.js",
        "Axios REST API integration",
        "UI and responsiveness improvements",
        "Business application workflows and reporting",
      ],
      architectureNote: "React.js frontend with Bootstrap and Axios communicating with Node.js and MySQL services.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectNeighbours(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
