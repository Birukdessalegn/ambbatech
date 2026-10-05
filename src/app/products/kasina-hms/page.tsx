import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Hotel, Sparkles, BedDouble, CalendarCheck, Users, ClipboardList, UtensilsCrossed, Wine, Package, FileText, DollarSign, Shield, BarChart3 } from "lucide-react";
import styles from "./KasinaHms.module.css";

export const metadata: Metadata = {
  title: "Kasina HMS | Complete Hotel Management System by AmbbaTech",
  description:
    "Kasina HMS unifies front desk, housekeeping, restaurant POS, inventory, multi-folio billing, and accounting into one connected hotel operations platform.",
};

export default function KasinaHmsPage() {
  const modules = [
    { title: "Front Desk & Reception", desc: "Rapid 30-second check-in/out, digital ID capture, keycard encoding, and real-time room status.", icon: CalendarCheck },
    { title: "Reservations Engine", desc: "Direct booking channel sync, group room blocks, rate tiering, and automated guest confirmations.", icon: Users },
    { title: "Housekeeping & Turnaround", desc: "Live room inspection status, priority turn queues, lost & found logs, and linen usage tracking.", icon: ClipboardList },
    { title: "Integrated Dining POS", desc: "Direct room folio posting from restaurant, cafe, terrace, or room service with zero manual reconciliation.", icon: UtensilsCrossed },
    { title: "Kitchen & Bar Operations", desc: "Real-time Kitchen Order Tickets (KOT), item prep timers, and automated ingredient deductions.", icon: Wine },
    { title: "Central Inventory & Stores", desc: "Warehouse stock levels, minimum par alerts, internal department transfer requests, and FIFO costing.", icon: Package },
    { title: "Purchasing & Procurement", desc: "Vendor RFQs, purchase orders, goods receipt notes (GRN), and price discrepancy alerts.", icon: FileText },
    { title: "Multi-Folio Guest Billing", desc: "Split corporate folios, group master bills, multi-currency settlement, and automated tax compliant invoices.", icon: DollarSign },
    { title: "HR & Shift Attendance", desc: "Hotel staff scheduling, biometric attendance sync, overtime calculation, and department payroll.", icon: Shield },
    { title: "Executive Audit & Night Audit", desc: "One-click automated night audit, daily manager flash reports, ADR, RevPAR, and occupancy analytics.", icon: BarChart3 },
  ];

  const workflowSteps = [
    { step: "01", name: "Reservation", desc: "Direct or OTA booking recorded with deposit" },
    { step: "02", name: "Check-in", desc: "Rapid key issue & digital registration card" },
    { step: "03", name: "Room Stay", desc: "Housekeeping updates & guest service dispatch" },
    { step: "04", name: "POS / Dining", desc: "F&B spend directly credited to room folio" },
    { step: "05", name: "Folio Consolidation", desc: "One itemized bill across all departments" },
    { step: "06", name: "Express Checkout", desc: "Settlement via card, cash, or corporate account" },
    { step: "07", name: "Finance Ledger", desc: "Instant posting to revenue & tax journals" },
  ];

  return (
    <div className={styles.page}>
      {/* Product Hero */}
      <section className={`section section-dark ${styles.kasinaHero}`}>
        <div className="bg-radial-glow" />
        <div className="container">
          <div className={styles.heroContent}>
            <div className="pill-badge pill-badge-kasina">
              <Hotel size={14} /> Flagship Hospitality Platform
            </div>

            <h1 className={styles.heroTitle}>
              Hotel operations.<br />
              <span className={styles.goldText}>One connected platform.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Kasina HMS replaces fragmented hotel software with an end-to-end operational engine. From reservation to night audit, give your team total control and your guests a seamless stay.
            </p>

            <div className={styles.heroActions}>
              <Link href="/request-demo?product=kasina" className="btn btn-kasina">
                Request a Kasina Demo <ArrowRight size={16} />
              </Link>
              <Link href="#workflow" className="btn btn-secondary-dark">
                View Operational Workflow
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
                  <span>kasina.ambbatech.com/live/command-center</span>
                </div>
                <div className={styles.pmsLiveBadge}>
                  <span className={styles.goldBlink} /> Multi-Department Sync Active
                </div>
              </div>

              <div className={styles.mockupBody}>
                {/* Top Metrics Row */}
                <div className={styles.kpiRow}>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Total Inventory</span>
                    <span className={styles.kpiVal}>128 Rooms</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Current Occupancy</span>
                    <span className={styles.kpiValGold}>94% (42 Occupied)</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Arrivals Today</span>
                    <span className={styles.kpiVal}>17 Expected</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Departures</span>
                    <span className={styles.kpiVal}>9 Completed</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>RevPAR</span>
                    <span className={styles.kpiValGold}>$214.50</span>
                  </div>
                </div>

                {/* Simulated Front Desk Board */}
                <div className={styles.frontDeskGrid}>
                  <div className={styles.gridCard}>
                    <div className={styles.gridCardHeader}>
                      <span>Live Arrivals & Check-in Queue</span>
                      <span className={styles.gridTag}>17 Guests</span>
                    </div>
                    <div className={styles.guestQueue}>
                      <div className={styles.guestRow}>
                        <div>
                          <strong>Dr. Solomon Teklu</strong>
                          <span className={styles.guestRoom}>Suite 304 • 3 Nights</span>
                        </div>
                        <span className={`${styles.statusBadge} ${styles.badgeReady}`}>Checked In</span>
                      </div>
                      <div className={styles.guestRow}>
                        <div>
                          <strong>Elena Rostova</strong>
                          <span className={styles.guestRoom}>Exec Deluxe 112 • 5 Nights</span>
                        </div>
                        <span className={`${styles.statusBadge} ${styles.badgePending}`}>En Route</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.gridCard}>
                    <div className={styles.gridCardHeader}>
                      <span>Housekeeping Department Telemetry</span>
                      <span className={styles.gridTagGold}>18 Cleaned • 4 In Progress</span>
                    </div>
                    <div className={styles.hkStats}>
                      <div className={styles.hkBar}>
                        <div className={styles.hkFillClean} style={{ width: "75%" }} />
                        <div className={styles.hkFillDirty} style={{ width: "25%" }} />
                      </div>
                      <div className={styles.hkLegend}>
                        <span>75% Rooms Inspected & Ready</span>
                        <span>Avg Turn: 24 mins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything your hotel needs */}
      <section className={`section section-dark-alt ${styles.modulesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="pill-badge pill-badge-kasina">Full Functional Scope</div>
            <h2 className={styles.sectionTitle}>Everything your hotel needs</h2>
            <p className={styles.sectionSubtitle}>
              Eliminate software sprawl. Kasina HMS incorporates every operational department into one cohesive cloud PMS.
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

      {/* Workflow Section: Reservation -> Check-in -> Room Stay -> POS -> Folio -> Checkout -> Finance */}
      <section className={`section section-light ${styles.workflowSection}`} id="workflow">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.workflowTag}>Operational Cohesion</div>
            <h2 className={styles.workflowTitle}>The Kasina Operational Flow</h2>
            <p className={styles.workflowSubtitle}>
              Every action flows into the next without staff re-typing or manual end-of-day reconciliations.
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
            <h3>Ready to see Kasina HMS running your hotel?</h3>
            <p>Schedule a customized 30-minute demonstration mapped to your room count and outlets.</p>
            <Link href="/request-demo?product=kasina" className="btn btn-kasina">
              Schedule Kasina Walkthrough <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
