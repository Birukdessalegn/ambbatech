import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Pill, ShieldCheck, CheckCircle2, Clock, Package, FileText, DollarSign, BarChart3, AlertCircle, Sparkles, Building2, Layers } from "lucide-react";
import styles from "./PharmaSystem.module.css";

export const metadata: Metadata = {
  title: "Pharmaceutical Management System | AmbbaTech",
  description:
    "Complete dispensary and pharmacy operating platform: drug batch and expiry tracking, prescription dispensation, insurance billing, and wholesale supplier re-ordering.",
};

export default function PharmaceuticalSystemPage() {
  const modules = [
    {
      title: "Batch & Expiry Date Tracking",
      desc: "Granular lot/batch number tracking with automated FIFO inventory dispatch and early expiry notification alerts.",
      icon: Clock,
    },
    {
      title: "Prescription Dispensing Engine",
      desc: "Digital prescription verification, dosage instructions, patient medication history, and refill tracking.",
      icon: Pill,
    },
    {
      title: "Fast Pharmacy Point-of-Sale",
      desc: "High-speed barcode scanner checkout for OTC medicines, toiletries, and prescription drugs with receipt printing.",
      icon: DollarSign,
    },
    {
      title: "Regulated Substance Audit",
      desc: "Secure tracking for controlled medications with strict pharmacist authorization logs and regulatory compliance registers.",
      icon: ShieldCheck,
    },
    {
      title: "Generic Drug Substitution",
      desc: "Instant suggestions for approved active-ingredient generic alternatives when brand-name drugs are out of stock.",
      icon: Sparkles,
    },
    {
      title: "Supplier & Wholesaler Procurement",
      desc: "Automated purchase orders (PO) triggered when shelf quantities reach safety par levels, with GRN price verification.",
      icon: FileText,
    },
    {
      title: "Insurance & Co-Pay Billing",
      desc: "Direct integration with health insurance schemes, client eligibility checks, and co-payment receipt splitting.",
      icon: Layers,
    },
    {
      title: "Multi-Dispensary Centralization",
      desc: "Connect hospital pharmacies, community branch stores, and central pharmaceutical warehouses into one live database.",
      icon: Building2,
    },
    {
      title: "Temperature & Storage Monitoring",
      desc: "Log cold-chain storage parameters and receive alerts for sensitive vaccines and biologics.",
      icon: AlertCircle,
    },
    {
      title: "Executive Profitability Reports",
      desc: "Item-level gross margins, daily dispensary cash reconciliations, fast-moving drug velocity, and tax statements.",
      icon: BarChart3,
    },
  ];

  const workflowSteps = [
    { step: "01", name: "Rx Intake", desc: "Digital or paper prescription received and patient profile verified." },
    { step: "02", name: "Batch Verification", desc: "System allocates nearest-expiry valid lot with barcode scan." },
    { step: "03", name: "Dosage & Instructions", desc: "Automated dosage labeling and interaction safety checks." },
    { step: "04", name: "Payment & Co-Pay", desc: "Cash, digital transfer, or private health insurance split billing." },
    { step: "05", name: "Instant Stock Decrement", desc: "Inventory updated in real-time with automated re-order par alert." },
    { step: "06", name: "Compliance Log", desc: "Audit register recorded for regional health authorities and tax audit." },
  ];

  return (
    <div className={styles.page}>
      {/* Product Hero */}
      <section className={`section section-dark ${styles.pharmaHero}`}>
        <div className="bg-radial-glow" />
        <div className="container">
          <div className={styles.heroContent}>
            <div className="pill-badge pill-badge-blue" style={{ background: "rgba(6, 182, 212, 0.12)", color: "#06B6D4", borderColor: "rgba(6, 182, 212, 0.3)" }}>
              <Pill size={14} /> Healthcare &amp; Pharmacy Platform
            </div>

            <h1 className={styles.heroTitle}>
              Dispensary &amp; Pharmacy operations.<br />
              <span className={styles.cyanText}>One compliant platform.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Engineered for community pharmacies, hospital dispensaries, and pharmaceutical wholesalers. Eliminate expired medicine losses, automate prescription workflows, and enforce regulatory compliance.
            </p>

            <div className={styles.heroActions}>
              <Link href="/request-demo?product=pharmaceutical" className="btn btn-primary" style={{ backgroundColor: "#06B6D4", borderColor: "#06B6D4", boxShadow: "0 4px 14px rgba(6, 182, 212, 0.35)" }}>
                Request Pharmacy Demo <ArrowRight size={16} />
              </Link>
              <Link href="#workflow" className="btn btn-secondary-dark">
                View Operational Flow
              </Link>
            </div>
          </div>

          {/* Large Hero UI Composition */}
          <div className={styles.heroMockupContainer}>
            <div className="browser-frame">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="browser-dot browser-dot-red" />
                  <span className="browser-dot browser-dot-yellow" />
                  <span className="browser-dot browser-dot-green" />
                </div>
                <div className="browser-address">
                  <span>https://</span>
                  <span>pharma.ambbatech.com/live/dispensary-board</span>
                </div>
                <div className={styles.pharmaLiveBadge}>
                  <span className={styles.cyanBlink} /> Rx Dispensing Active • 0 Expiry Shortages
                </div>
              </div>

              <div className={styles.mockupBody}>
                {/* Metric Summary */}
                <div className={styles.kpiRow}>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Total Monitored Drugs</span>
                    <span className={styles.kpiVal}>2,480 SKUs</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Rx Prescriptions Filled</span>
                    <span className={styles.kpiValCyan}>142 Today</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Batches Tracked</span>
                    <span className={styles.kpiVal}>3,920 Batches</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Insurance Claims</span>
                    <span className={styles.kpiValCyan}>$4,890 Co-Pay</span>
                  </div>
                </div>

                {/* Simulated Rx Queue & Batch Matrix */}
                <div className={styles.dispensaryGrid}>
                  <div className={styles.panelCard}>
                    <div className={styles.panelTitle}>Active Prescription Intake Queue</div>
                    <div className={styles.rxList}>
                      <div className={styles.rxRow}>
                        <div>
                          <strong>Rx #10942 • Patient: Almaz Girma</strong>
                          <span>Amoxicillin Clavulanate 625mg • 14 Tablets (2x Daily)</span>
                        </div>
                        <span className={styles.statusVerified}>Verified &amp; Dispensed</span>
                      </div>
                      <div className={styles.rxRow}>
                        <div>
                          <strong>Rx #10943 • Patient: Henok Tadesse</strong>
                          <span>Atorvastatin 20mg • 30 Tablets (Doctor: Dr. Martha)</span>
                        </div>
                        <span className={styles.statusPending}>Awaiting Pharmacist</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.panelCard}>
                    <div className={styles.panelTitle}>Batch &amp; Lot Expiration Management</div>
                    <div className={styles.batchStats}>
                      <div className={styles.batchItem}>
                        <div className={styles.batchInfo}>
                          <strong>Azithromycin 500mg</strong>
                          <span>Batch #AZ-2024 • Exp: 12/2028 (420 packs)</span>
                        </div>
                        <span className={styles.badgeGood}>Optimal Shelf Life</span>
                      </div>
                      <div className={styles.batchItem}>
                        <div className={styles.batchInfo}>
                          <strong>Ceftriaxone 1g Vial</strong>
                          <span>Batch #CF-991 • Exp: 04/2027 (180 vials)</span>
                        </div>
                        <span className={styles.badgeGood}>FIFO In Rotation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className={`section section-dark-alt ${styles.modulesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="pill-badge pill-badge-blue" style={{ background: "rgba(6, 182, 212, 0.12)", color: "#06B6D4", borderColor: "rgba(6, 182, 212, 0.3)" }}>
              Full Functional Scope
            </div>
            <h2 className={styles.sectionTitle}>Engineered for pharmaceutical compliance</h2>
            <p className={styles.sectionSubtitle}>
              Every pill accounted for. Eliminate manual drug registers, prevent expiry losses, and ensure complete transparency across your dispensaries.
            </p>
          </div>

          <div className={styles.modulesGrid}>
            {modules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className={styles.moduleCard}>
                  <div className={styles.moduleIconWrap}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.moduleTitle}>{m.title}</h3>
                  <p className={styles.moduleDesc}>{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className={`section section-light ${styles.workflowSection}`} id="workflow">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.workflowTag}>Operational Integrity</div>
            <h2 className={styles.workflowTitle}>The Pharmaceutical Workflow</h2>
            <p className={styles.workflowSubtitle}>
              Prescription Intake ➔ Verification ➔ Dispensing ➔ Payment &amp; Co-Pay ➔ Real-Time Stock ➔ Regulatory Register
            </p>
          </div>

          <div className={styles.flowTimeline}>
            {workflowSteps.map((wf, idx) => (
              <div key={wf.step} className={styles.flowCard}>
                <div className={styles.flowStepNum}>{wf.step}</div>
                <h4 className={styles.flowStepName}>{wf.name}</h4>
                <p className={styles.flowStepDesc}>{wf.desc}</p>
                {idx < workflowSteps.length - 1 && (
                  <div className={styles.flowArrow}>➔</div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.workflowCta}>
            <h3>Ready to modernize your pharmacy or dispensary?</h3>
            <p>Schedule a live 30-minute demonstration tailored to your prescription volume and branch count.</p>
            <Link href="/request-demo?product=pharmaceutical" className="btn btn-primary" style={{ backgroundColor: "#06B6D4", borderColor: "#06B6D4" }}>
              Schedule Pharmacy Walkthrough <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
