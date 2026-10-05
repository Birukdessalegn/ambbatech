import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Laptop, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Web Applications | AmbbaTech",
  description: "Scalable, high-throughput web applications with sub-second response times and real-time synchronization.",
};

export default function WebApplicationsPage() {
  return (
    <div style={{ paddingTop: "130px", paddingBottom: "100px", minHeight: "80vh" }}>
      <div className="container">
        <div className="pill-badge pill-badge-blue" style={{ marginBottom: "16px" }}>
          <Laptop size={14} /> Mission-Critical Web
        </div>
        <h1 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: "800", color: "#FFFFFF", marginBottom: "16px" }}>
          Enterprise Web Applications
        </h1>
        <p style={{ fontSize: "17px", color: "var(--text-dark-secondary)", maxWidth: "780px", lineHeight: "1.6", marginBottom: "36px" }}>
          High-performance browser applications designed for complex operational environments. Multi-tenant portals, customer-facing interfaces, and administrative dashboards that load without friction.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "50px" }}>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Real-Time State Sync</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              WebSocket architectures keep multiple active managers, receptionists, and supervisors viewing identical live telemetry.
            </p>
          </div>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Dense Operational UI</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              Tailored data grids, quick keyboard shortcuts, multi-column filtering, and instantaneous server-side exports.
            </p>
          </div>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Zero-Downtime Releases</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              Continuous deployment pipelines guarantee that system patches and feature updates deploy without interrupting business hours.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/request-demo?solution=web-applications" className="btn btn-primary">
            Discuss Web Application Architecture <ArrowRight size={16} />
          </Link>
          <Link href="/solutions" className="btn btn-secondary-dark">
            View All Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
