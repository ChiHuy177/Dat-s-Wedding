import type { Metadata } from "next";
import localFont from "next/font/local";
import { Be_Vietnam_Pro, Alex_Brush } from "next/font/google";
import { weddingConfig } from "@/lib/wedding-config";
import "./globals.css";

// Vietnamese-localized copy of the Figma design's display face — see src/fonts/MTD-Feliz-en-Vista.otf.
const display = localFont({
  src: "../fonts/MTD-Feliz-en-Vista.otf",
  variable: "--font-display",
  display: "swap",
});

const body = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

// Cursive signature face — used for the "Trưởng Nam / Út Nữ" style captions; renders Vietnamese diacritics correctly.
const script = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin", "vietnamese"],
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
