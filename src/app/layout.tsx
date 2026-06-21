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
};

import ClientLogic from "../components/ClientLogic";
import CustomCursor from "../components/CustomCursor";
import ChatDeck from "../components/ui/ChatDeck";
import CommandMenu from "../components/ui/CommandMenu";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`light-theme ${inter.className}`}>
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
        {children}
        <Footer />
      </body>
    </html>
  );
}

