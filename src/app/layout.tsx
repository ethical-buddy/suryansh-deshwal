"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";
import { MouseEffect } from "@/components/ui/MouseEffect";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <title>SURYANSH DESHWAL | CYBER_ARCHITECT</title>
        <meta name="description" content="Senior Cybersecurity Researcher & System Architect" />
      </head>
      <body className="antialiased scanlines relative">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ThemeToggle />
          <MouseEffect />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
