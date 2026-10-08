import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wine, Users, UtensilsCrossed, Package, FileText, DollarSign, Shield, BarChart3, Clock } from "lucide-react";
import styles from "../the-oak-club/TheOakClub.module.css";

export const metadata: Metadata = {
  title: "Club & Restaurant Management System | AmbbaTech",
  description:
    "Run your club, lounge, restaurant, and bar from one place. Unify table floor maps, waiter POS, kitchen order routing (KOT), beverage stock control, and cashier shift settlement.",
};

export default function ClubRestaurantManagementSystemPage() {
  const modules = [
    { title: "Floor & Table Management", desc: "Interactive bird's-eye floor plan with live table occupancy, reservation tags, and VIP seating status.", icon: Users },
    { title: "High-Speed Mobile POS", desc: "Fast handheld order taking for servers with automated modifier prompts (temperatures, mixers, dietary notes).", icon: UtensilsCrossed },
    { title: "Kitchen Display & KOT", desc: "Color-coded order preparation stages with countdown timers and course-by-course firing controls.", icon: Clock },
    { title: "High-Volume Bar Station", desc: "Fast-tap cocktails, bottle service tracking, running patron tabs, and quick split-bill settlements.", icon: Wine },
    { title: "Real-Time Stock Depletion", desc: "Pours and ingredient portions automatically deduct from warehouse stock with zero manual end-of-night counting.", icon: Package },
    { title: "Vendor Purchasing & Costing", desc: "Vendor catalog pricing, recipe food-cost percentage tracking, and automated reorder alerts.", icon: FileText },
    { title: "Cashier & Shift Reconciliation", desc: "Blind float reconciliation, digital cash drawer control, tip pool management, and discrepancy auditing.", icon: DollarSign },
    { title: "Staff HR & Attendance", desc: "Front-of-house and kitchen staff clock-in, overtime logs, and role-based access permissions.", icon: Shield },
    { title: "Daily Revenue & P&L Reports", desc: "Item profitability matrices, hourly sales velocity, beverage versus food ratios, and tax summaries.", icon: BarChart3 },
  ];

  const workflowSteps = [
    { step: "01", name: "Table Seated", desc: "Guest seated at table or bar; server opens tab" },
    { step: "02", name: "Order Entered", desc: "Items punched on mobile or stationary terminal" },
    { step: "03", name: "Kitchen / Bar KOT", desc: "Drinks route to bar station; food routes to chef line" },
    { step: "04", name: "Fast Payment", desc: "Single bill, split seat, card, cash, or room charge" },
    { step: "05", name: "Automated Stock", desc: "Liquor, beer, and raw ingredients instantly depleted" },
    { step: "06", name: "Finance & P&L", desc: "Shift closed with blind count & daily margin metrics" },
  ];

  return (
    <div className={styles.page}>
      {/* Product Hero */}
      <section className={`section section-dark ${styles.oakHero}`}>
        <div className="bg-radial-glow" />
        <div className="container">
          <div className={styles.heroContent}>
            <div className="pill-badge pill-badge-oak">
              <Wine size={14} /> Club & Dining Operating System
            </div>

            <h1 className={styles.heroTitle}>
              Club &amp; Restaurant<br />
              <span className={styles.emeraldText}>Management System.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Built for high-volume nightlife, fine dining, and bustling social clubs. Coordinates table service, high-speed bar taps, kitchen routing, and automated stock tracking into a single responsive system.
            </p>

            <div className={styles.heroActions}>
              <Link href="/request-demo?product=club" className="btn btn-oak">
                Schedule Venue Demo <ArrowRight size={16} />
              </Link>
              <Link href="#workflow" className="btn btn-secondary-dark">
                Explore Service Flow
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
                  <span>venues.ambbatech.com/live/floor-plan</span>
                </div>
                <div className={styles.oakLiveBadge}>
                  <span className={styles.emeraldBlink} /> POS Stream Active • 38 Tables
                </div>
              </div>

              <div className={styles.mockupBody}>
                {/* Metric Summary */}
                <div className={styles.kpiRow}>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Active Tables</span>
                    <span className={styles.kpiValEmerald}>38 Seated</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Open Tabs</span>
                    <span className={styles.kpiVal}>$14,820.00</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Kitchen Avg Prep</span>
                    <span className={styles.kpiValEmerald}>7m 42s</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Bar Orders</span>
                    <span className={styles.kpiVal}>184 Pours Today</span>
                  </div>
                </div>

                {/* Simulated Floor Map & Active KOT Stream */}
                <div className={styles.floorSplit}>
                  <div className={styles.floorPanel}>
                    <div className={styles.panelTitle}>VIP Lounge & Dining Floor Map</div>
                    <div className={styles.tableGridVisual}>
                      <div className={`${styles.tableUnit} ${styles.tableOccupied}`}>
                        <strong>VIP-1</strong>
                        <span>$540 • 4 Guests</span>
                      </div>
                      <div className={`${styles.tableUnit} ${styles.tableOccupied}`}>
                        <strong>VIP-2</strong>
                        <span>$320 • 6 Guests</span>
                      </div>
                      <div className={`${styles.tableUnit} ${styles.tableAvailable}`}>
                        <strong>T-08</strong>
                        <span>Reserved (20:30)</span>
                      </div>
                      <div className={`${styles.tableUnit} ${styles.tableOccupied}`}>
                        <strong>Bar-01</strong>
                        <span>Active Tab</span>
                      </div>
                      <div className={`${styles.tableUnit} ${styles.tableOccupied}`}>
                        <strong>Bar-02</strong>
                        <span>Active Tab</span>
                      </div>
                      <div className={`${styles.tableUnit} ${styles.tableAvailable}`}>
                        <strong>T-14</strong>
                        <span>Clean / Open</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.kotPanel}>
                    <div className={styles.panelTitle}>Live KOT & Bar Dispatch</div>
                    <div className={styles.kotList}>
                      <div className={styles.kotCard}>
                        <div className={styles.kotCardTop}>
                          <span className={styles.kotTable}>VIP-1 (Server: Dawit)</span>
                          <span className={styles.kotTimer}>1m ago</span>
                        </div>
                        <div className={styles.kotItems}>
                          <div>1x Dom Pérignon Vintage</div>
                          <div>2x Wagyu Ribeye (Medium)</div>
                        </div>
                      </div>
                      <div className={styles.kotCard}>
                        <div className={styles.kotCardTop}>
                          <span className={styles.kotTable}>Table 04 (Server: Hanna)</span>
                          <span className={styles.kotTimer}>4m ago</span>
                        </div>
                        <div className={styles.kotItems}>
                          <div>2x Negroni Signature • 1x Truffle Fries</div>
                        </div>
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
            <div className="pill-badge pill-badge-oak">Operational Features</div>
            <h2 className={styles.sectionTitle}>Engineered for pace and profit</h2>
            <p className={styles.sectionSubtitle}>
              Every bottleneck in a restaurant or club costs you margin. The Club &amp; Restaurant Management System accelerates table turns, stops beverage shrinkage, and closes shifts accurately.
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
            <div className={styles.workflowTag}>Synchronized Venue Operations</div>
            <h2 className={styles.workflowTitle}>The Venue Operational Flow</h2>
            <p className={styles.workflowSubtitle}>
              TABLE ➔ ORDER ➔ KITCHEN / BAR ➔ PAYMENT ➔ STOCK ➔ FINANCE
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
            <h3>Ready to modernize your club, lounge, or restaurant?</h3>
            <p>Schedule a live demo to see how fast orders route and how accurately stock reconciles.</p>
            <Link href="/request-demo?product=club" className="btn btn-oak">
              Schedule Venue Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
