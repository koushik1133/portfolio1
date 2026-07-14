import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Koushik Goud Shaganti | Portfolio",
  description: "Software Engineer & AI Automation Expert specializing in scalable web platforms and AI-driven solutions.",
  other: {
    // Explicit viewport prevents mobile zoom issues
    viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  },
};

import ClientLogic from "../components/ClientLogic";
import CustomCursor from "../components/CustomCursor";
import ChatDeck from "../components/ui/ChatDeck";
import CommandMenu from "../components/ui/CommandMenu";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import SmoothScroll from "../components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${inter.className}`}>
      <head>
        {/* Viewport — explicit to prevent iOS zoom edge cases */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/*
          FontAwesome: loaded non-render-blocking via media="print" trick.
          The browser loads it in the background; onLoad switches media to "all"
          so it applies without blocking First Contentful Paint.
        */}
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

      </head>
      <body className={`light-theme ${inter.className}`}>


        <SmoothScroll>
          <ClientLogic />
          <CustomCursor />
          <ChatDeck />
          <CommandMenu />
          <Script
            src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
            type="module"
            strategy="lazyOnload"
          />
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
