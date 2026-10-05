import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Laptop, Smartphone, Layers, CheckCircle2 } from "lucide-react";
import styles from "./SolutionsPage.module.css";

export const metadata: Metadata = {
  title: "Solutions | Custom Enterprise Software & Systems by AmbbaTech",
  description:
    "AmbbaTech delivers tailored enterprise software, scalable web platforms, high-performance mobile applications, and business management systems.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      id: "custom-software",
      icon: Cpu,
      title: "Custom Software Development",
      subtitle: "Bespoke operational systems built around your specific workflow",
      desc: "When off-the-shelf software doesn't fit your operational realities, we design and build bespoke software from scratch. We map your departments, approvals, and data flows directly into clean, secure software architectures.",
      benefits: [
        "Eliminates manual spreadsheet work & paper trails",
        "Role-based permission hierarchies & audit trail compliance",
        "Proprietary data models with zero external vendor lock-in",
        "Tailored reporting tailored to executive decision-makers"
      ],
      link: "/solutions/custom-software",
    },
    {
      id: "web-applications",
      icon: Laptop,
      title: "Enterprise Web Applications",
      subtitle: "High-throughput browser platforms with real-time sync",
      desc: "Fast, resilient web applications engineered for heavy administrative workflows, multi-tenant portal management, and high-concurrency commercial operations.",
      benefits: [
        "Sub-second page speeds with Next.js & React architecture",
        "Real-time WebSocket data broadcasting across all connected terminals",
        "Responsive, high-density data tables and operational dashboards",
        "Automated PDF generation for receipts, invoices, and audit statements"
      ],
      link: "/solutions/web-applications",
    },
    {
      id: "mobile-applications",
      icon: Smartphone,
      title: "Mobile Business Applications",
      subtitle: "Native-grade iOS & Android applications for frontline teams",
      desc: "Empower staff on the move. From handheld table ordering and warehouse barcode scanning to customer loyalty mobile portals, our mobile apps deliver offline-first reliability.",
      benefits: [
        "Offline-first operational data caching with auto-sync on reconnect",
        "Hardware integration: Bluetooth ESC/POS printers, barcode scanners, NFC",
        "High-performance cross-platform Flutter and native stability",
        "Instant push notifications for priority shift alerts and dispatch"
      ],
      link: "/solutions/mobile-applications",
    },
    {
      id: "business-management",
      icon: Layers,
      title: "Business Management Systems",
      subtitle: "End-to-end operational software connecting teams, stock, and finance",
      desc: "Bridge the gap between Point of Sale, storerooms, kitchen display systems, human resources, and financial ledgers into one living command center.",
      benefits: [
        "Automatic stock deductions on every sale or order fired",
        "Centralized multi-branch procurement and inter-store transfers",
        "Shift cash float reconciliation and discrepancy auditing",
        "Executive P&L telemetry and live financial statements"
      ],
      link: "/solutions/business-management",
    },
  ];

  return (
    <div className={styles.page}>
      <section className={`section section-dark ${styles.hero}`}>
        <div className="bg-radial-glow" />
        <div className="container">
          <div className={styles.header}>
            <div className="pill-badge pill-badge-blue">Enterprise Solutions</div>
            <h1 className={styles.title}>
              Engineering software that{" "}
              <span className={styles.blueText}>scales your business.</span>
            </h1>
            <p className={styles.subtitle}>
              Whether you need to replace fragmented tools with custom software or develop a high-throughput mobile and web portal, AmbbaTech brings product-level rigor to every build.
            </p>
          </div>

          <div className={styles.list}>
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.id} className={styles.card} id={s.id}>
                  <div className={styles.cardContent}>
                    <div className={styles.iconWrap}>
                      <Icon size={24} />
                    </div>
                    <h2 className={styles.cardTitle}>{s.title}</h2>
                    <div className={styles.cardSubtitle}>{s.subtitle}</div>
                    <p className={styles.cardDesc}>{s.desc}</p>

                    <div className={styles.benefitsGrid}>
                      {s.benefits.map((b, idx) => (
                        <div key={idx} className={styles.benefitItem}>
                          <CheckCircle2 size={16} className={styles.checkIcon} />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.actions}>
                      <Link href="/request-demo?solution=custom" className="btn btn-primary">
                        Discuss {s.title} <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
