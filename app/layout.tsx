import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thingsenz-home.vercel.app"),
  title: {
    default: "ThingSenz Apps",
    template: "%s | ThingSenz Apps",
  },
  description:
    "A portfolio of open-source Android apps, project writeups, screenshots, and app-specific privacy policies.",
  openGraph: {
    title: "ThingSenz Apps",
    description:
      "Open-source Android apps with project pages and privacy policies.",
    url: "https://thingsenz-home.vercel.app",
    siteName: "ThingSenz Apps",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ThingSenz Apps",
    description:
      "Open-source Android apps with project pages and privacy policies.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/thingsenz-logo.png",
    shortcut: "/thingsenz-logo.png",
    apple: "/thingsenz-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
