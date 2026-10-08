import type { Metadata } from "next";
import { Work } from "@/components/work";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected Craftvanta work, including Agentomatic and Bsbasil.",
};

export default function WorkPage() {
  return (
    <main id="main">
      <Work />
    </main>
  );
}
