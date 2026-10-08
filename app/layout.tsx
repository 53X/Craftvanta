import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollRoot, SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Craftvanta — Creative marketing agency",
    template: "%s — Craftvanta",
  },
  description:
    "Craftvanta is a creative marketing agency for branding, websites, AI images and video, Facebook and Instagram, and Google and Meta ads.",
  openGraph: {
    title: "Craftvanta — Creative marketing agency",
    description: "Branding, websites, content, social, and ads. One agency.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <ScrollRoot>
          <Header />
          <SmoothScroll>
            {children}
            <Footer />
          </SmoothScroll>
        </ScrollRoot>
      </body>
    </html>
  );
}
