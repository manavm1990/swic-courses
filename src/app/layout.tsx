import { SidebarLayout } from "@/components/sidebar-layout";
import { CommandPaletteProvider } from "@/components/command-palette-provider";
import { getModules } from "@/data/lessons";
import { clsx } from "clsx";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";

import "./globals.css";

const InterVariable = localFont({
  variable: "--font-inter",
  src: [
    { path: "./InterVariable.woff2", style: "normal" },
    { path: "./InterVariable-Italic.woff2", style: "italic" },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        GeistMono.variable,
        InterVariable.variable,
        "scroll-pt-16 font-sans antialiased dark:bg-gray-950",
      )}
    >
      <body>
        <CommandPaletteProvider>
          <div className="isolate">
            <SidebarLayout modules={getModules()}>{children}</SidebarLayout>
          </div>
        </CommandPaletteProvider>
      </body>
    </html>
  );
}
