import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { SectionScroll } from "@/components/ui/SectionScroll";
import { keywords, site, siteUrl } from "@/data/site";
import "./reference.css";
import "./globals.css";

/* ── Typography (Sarthak Sharma aesthetic: DM Sans + Instrument Serif) ── */
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-family",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-family",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  applicationName: `${site.name} Portfolio`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} | ${site.role}`,
    description: site.description,
    url: siteUrl,
    locale: "en_IN",
    firstName: "Yuvraj",
    lastName: "Singh",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030407" },
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
  ],
};

const themeScript = `
(function(){
  document.documentElement.dataset.theme = 'dark';
  try { localStorage.setItem('theme', 'dark'); } catch(e){}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;translate:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-dvh antialiased bg-bg text-fg selection:bg-accent-vivid/30 selection:text-white">
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <ScrollProgress />

        <Navbar />
        <main id="main">{children}</main>

        <RevealObserver />
        <SectionScroll />
      </body>
    </html>
  );
}
