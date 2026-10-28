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

const description =
  "One studio for the look and the launch. Branding, websites, AI images and video, Facebook and Instagram, Google and Meta ads.";

export const metadata: Metadata = {
  title: {
    default: "Craftvanta — Creative and digital marketing agency.",
    template: "%s — Craftvanta",
  },
  description,
  openGraph: {
    title: "Craftvanta — Creative and digital marketing agency.",
    description,
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
