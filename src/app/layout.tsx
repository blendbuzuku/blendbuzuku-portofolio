import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blend Buzuku — Application Developer",
    template: "%s · Blend Buzuku",
  },
  description:
    "Application developer in Kosovo with 4+ years across backend, frontend and data — ERP, BI, POS and banking software, with .NET, Java, React and Angular.",
  keywords: [
    "Blend Buzuku",
    "application developer",
    "software developer",
    "full-stack",
    ".NET",
    "Java",
    "React",
    "Angular",
    "Kosovo",
  ],
  authors: [{ name: "Blend Buzuku" }],
  openGraph: {
    title: "Blend Buzuku — Application Developer",
    description:
      "4+ years across backend, frontend and data — ERP, BI, POS and banking software.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080d1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
