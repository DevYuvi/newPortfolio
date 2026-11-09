import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names, resolving Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Absolute URL for canonical tags, OG images and JSON-LD. */
export function absoluteUrl(path = "") {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://yuvrajsingh.dev"
  ).replace(/\/$/, "");
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** "Yuvraj Singh" -> "YS". Used by the image placeholders. */
export function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]!.toUpperCase())
    .join("");
}
