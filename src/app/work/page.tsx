import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hotel, Wine, Layers, CheckCircle2, TrendingUp } from "lucide-react";
import SelectedWork from "@/components/SelectedWork";
import FinalCta from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies | AmbbaTech",
  description: "Explore AmbbaTech software deployments, including Kasina HMS hotel platform and THE OAK CLUB venue system.",
};

export default function WorkPage() {
  return (
    <div style={{ paddingTop: "76px" }}>
      <SelectedWork />
      <FinalCta />
    </div>
  );
}
