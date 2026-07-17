import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfitHeading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "IngenuityAI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        figtree.variable,
        outfitHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col dark">{children}</body>
    </html>
  );
}
