import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile Business Applications | AmbbaTech",
  description: "Native iOS and Android mobile applications for field staff, order-taking, and mobile workforce coordination.",
};

export default function MobileApplicationsPage() {
  return (
    <div style={{ paddingTop: "130px", paddingBottom: "100px", minHeight: "80vh" }}>
      <div className="container">
        <div className="pill-badge pill-badge-blue" style={{ marginBottom: "16px" }}>
          <Smartphone size={14} /> Frontline Mobility
        </div>
        <h1 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", fontWeight: "800", color: "#FFFFFF", marginBottom: "16px" }}>
          Mobile Business Applications
        </h1>
        <p style={{ fontSize: "17px", color: "var(--text-dark-secondary)", maxWidth: "780px", lineHeight: "1.6", marginBottom: "36px" }}>
          Equip your floor staff, field technicians, and customers with high-speed, intuitive mobile apps. Engineered with offline resilience and local hardware peripheral connectivity.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "50px" }}>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Offline-First Storage</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              Transactions continue uninterrupted even if Wi-Fi drops. Encrypted local queues automatically sync once connectivity restores.
            </p>
          </div>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Hardware Interop</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              Native integration with thermal receipt printers, wireless payment POS terminals, barcode scanners, and biometric authenticators.
            </p>
          </div>
          <div style={{ background: "var(--color-navy-card)", padding: "30px", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", marginBottom: "10px" }}>Cross-Platform Velocity</h3>
            <p style={{ color: "var(--text-dark-secondary)", fontSize: "14px", lineHeight: "1.5" }}>
              Built with Flutter for simultaneous iOS and Android releases with identical pixel perfection and 60fps responsiveness.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link href="/request-demo?solution=mobile-applications" className="btn btn-primary">
            Discuss Mobile App Project <ArrowRight size={16} />
          </Link>
          <Link href="/solutions" className="btn btn-secondary-dark">
            View All Solutions
          </Link>
        </div>
      </div>
    </div>
  );
}
