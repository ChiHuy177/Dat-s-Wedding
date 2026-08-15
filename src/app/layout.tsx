import type { Metadata } from "next";
import { Cormorant_Garamond, Be_Vietnam_Pro, Alex_Brush } from "next/font/google";
import { weddingConfig } from "@/lib/wedding-config";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

// Script accent face — English-only decorative words (no Vietnamese glyphs), pairs with the diacritic-safe faces above.
const script = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${weddingConfig.groom} & ${weddingConfig.bride} — Save the Date`,
  description: `Thiệp mời cưới ${weddingConfig.groom} & ${weddingConfig.bride} — ${weddingConfig.weddingDateLabel}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
