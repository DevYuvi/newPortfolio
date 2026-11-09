import type { ExperienceItem, Stat } from "@/lib/types";

export const experience: ExperienceItem[] = [
  {
    company: "Automize Plus",
    role: "Full Stack Developer",
    location: "Jaipur, Rajasthan",
    period: "January 2025 — Present",
    startDate: "2025-01-01",
    endDate: null,
    summary:
      "Working across full-stack web and mobile platforms using React, TypeScript, Node.js, Express, and MySQL, supported by modern AI-assisted engineering workflows.",
    responsibilities: [
      "Developed the Transportation Management web application from scratch, building React-based responsive interfaces and connecting them with Node.js/Express REST APIs and MySQL operations.",
      "Designed relational schemas and server-side business logic, implementing TanStack Query data fetching (caching, invalidation, optimistic updates) and JWT-authenticated endpoints.",
      "Contributed to Wapflux, a multi-tenant WhatsApp messaging platform, building customer dashboard features, database-backed services, and Meta WhatsApp Cloud API integration with AI-assisted coding tools.",
      "Built a transportation and accounting ERP cross-platform mobile app with AI-assisted development, covering Lorry Receipt (LR) lifecycle management, trip billing, accounting vouchers, and fiscal-year switching.",
      "Delivered feature updates, responsive improvements, and API integrations for FitPlus CRM, a live production gym and studio management platform.",
      "Used AI-assisted development tools (Cursor, Claude, GitHub Copilot) to accelerate implementation and debugging while maintaining direct architectural control.",
    ],
    achievements: [
      "Streamlined dispatch workflows in the transportation management system by implementing TanStack Query caching and robust REST endpoints.",
      "Integrated Meta Cloud API messaging flows and dashboard management for multi-tenant customer communication.",
      "Delivered complex ERP logistics screens including Lorry Receipt creation and payment voucher generation with ledger validation.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "React Native",
      "Expo",
      "TanStack Query",
      "Tailwind CSS",
      "Meta Cloud API",
      "Prisma ORM",
      "PostgreSQL",
    ],
  },
];

export const stats: Stat[] = [
  { value: "1.5+", label: "Years building production software" },
  { value: "4", label: "Core production & company platforms" },
  { value: "Full Stack", label: "React, Node.js & MySQL workflows" },
  { value: "AI-Assisted", label: "Cursor & Copilot accelerated craft" },
];

export const about = {
  background:
    "I am a Full Stack Developer based in Jaipur, Rajasthan, with hands-on experience building production web and mobile applications using React.js, JavaScript/TypeScript, Node.js, Express.js, and MySQL. I focus on creating responsive, reliable systems that solve real operational problems.",
  philosophy:
    "Engineering practical products and designing better experiences. I believe good software comes from clear data models, maintainable component boundaries, and honest craftsmanship — whether writing code by hand or leveraging AI-assisted tools for speed.",
  current:
    "Currently contributing to full stack systems at Automize Plus in Jaipur, covering transportation management web portals, multi-tenant messaging platforms, logistics ERP mobile apps, and gym management CRMs.",
  focus: [
    "Full-stack React.js & Next.js web applications",
    "Node.js & Express REST API architecture",
    "MySQL relational database design & query tuning",
    "Cross-platform mobile apps with React Native & Expo",
  ],
};
