import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Management Systems | AmbbaTech",
  description: "Connected operational software uniting Point of Sale, inventory, finance, and human resources.",
};

export default function BusinessManagementPage() {
  return (
    <div style={{ paddingTop: "130px", paddingBottom: "100px", minHeight: "80vh" }}>
      <div className="container">
        <div className="pill-badge pill-badge-blue" style={{ marginBottom: "16px" }}>
          <Layers size={14} /> Total Operational Convergence
        </div>
        <h1 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: "800", color: "#FFFFFF", marginBottom: "16px" }}>
          Business Management Systems
        </h1>
        <p style={{ fontSize: "17px", color: "var(--text-dark-secondary)", maxWidth: "780px", lineHeight: "1.6", marginBottom: "36px" }}>
          Unify your company into one connected software environment. When sales, storeroom stock, purchasing orders, and financial accounts live in the same database, operational chaos disappears.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "50px" }}>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Real-Time Stock Depletion</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              Every transaction made at any terminal instantly decrements physical inventory and alerts store managers to re-order thresholds.
            </p>
          </div>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Multi-Outlet Consolidations</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              Manage multiple branches, bars, or regional stores from a single executive dashboard with granular comparative P&L figures.
            </p>
          </div>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Audit & Cashier Reconciliation</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              Automated blind till balancing, discrepancy tracking, and end-of-day journal exports to eliminate revenue leakage.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/request-demo?solution=business-management" className="btn btn-primary">
            Request Business Systems Assessment <ArrowRight size={16} />
          </Link>
          <Link href="/solutions" className="btn btn-secondary-dark">
            View All Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
