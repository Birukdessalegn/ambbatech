import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, CheckCircle2, ShieldCheck, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Solutions | AmbbaTech",
  description: "Bespoke enterprise software architectures mapped to your exact operational realities.",
};

export default function CustomSoftwarePage() {
  return (
    <div style={{ paddingTop: "130px", paddingBottom: "100px", minHeight: "80vh" }}>
      <div className="container">
        <div className="pill-badge pill-badge-blue" style={{ marginBottom: "16px" }}>
          <Cpu size={14} /> Tailored Architecture
        </div>
        <h1 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: "800", color: "#FFFFFF", marginBottom: "16px" }}>
          Custom Software Development
        </h1>
        <p style={{ fontSize: "17px", color: "var(--text-dark-secondary)", maxWidth: "780px", lineHeight: "1.6", marginBottom: "36px" }}>
          We design and build proprietary business platforms around the exact way your enterprise operates. No forcing your teams into awkward SaaS templates; every screen and workflow is custom engineered.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "50px" }}>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Workflow Mapping</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              We shadow your staff to map every transaction, approval hurdle, and inventory touchpoint before writing a single line of code.
            </p>
          </div>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Enterprise Security</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              Granular role permissions, tamper-evident audit logs, end-to-end encryption, and daily automated encrypted database backups.
            </p>
          </div>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Long-Term Ownership</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              You own the custom business logic, data models, and IP—protecting your competitive advantage against off-the-shelf imitators.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/request-demo?solution=custom-software" className="btn btn-primary">
            Request Technical Discovery <ArrowRight size={16} />
          </Link>
          <Link href="/solutions" className="btn btn-secondary-dark">
            View All Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
