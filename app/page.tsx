import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Looks } from "@/components/looks";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Ticker } from "@/components/ticker";
import { WorkTeaser } from "@/components/work-teaser";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Ticker />
      <Services />
      <WorkTeaser />
      <Process />
      <Looks />
      <Faq />
      <Contact />
    </main>
  );
}
