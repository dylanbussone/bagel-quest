import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bagel-quest.com"),
  title: "Bagel Quest",
  description:
    "Bagel Quest is a bagel competition based in Seattle, Washington.",
  openGraph: {
    title: "Bagel Quest",
    description:
      "Bagel Quest is a bagel competition based in Seattle, Washington.",
    url: "https://www.bagel-quest.com",
    siteName: "Bagel Quest",
    images: [
      {
        url: "https://www.bagel-quest.com/bagel-icon-dark.svg", // Must be an absolute URL
        width: 250,
        height: 250,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={[
          inter.className,
          "bg-gradient-to-b from-white to-stone-100",
        ].join(" ")}
      >
        <Header />
        <main className="mx-auto min-h-screen max-w-screen-lg p-4">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
