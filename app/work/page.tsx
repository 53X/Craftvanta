import type { Metadata } from "next";
import { Work } from "@/components/work";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected Craftvanta work: Agentomatic, Bsbasil, and TaxSimpl.",
};

export default function WorkPage() {
  return (
    <main id="main">
      <Work />
    </main>
  );
}
