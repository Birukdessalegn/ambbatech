import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hotel, Wine, Pill, Store, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import styles from "./ProductsPage.module.css";

export const metadata: Metadata = {
  title: "Commercial Software Systems | AmbbaTech",
  description:
    "Explore AmbbaTech's core software systems: Hotel Management System, Club & Restaurant System, Pharmaceutical System, and Store Management System.",
};

export default function ProductsPage() {
  return (
    <div className={styles.page}>
      <section className={`section section-dark ${styles.hero}`}>
        <div className="bg-radial-glow" />
        <div className="container">
          <div className={styles.header}>
            <div className="pill-badge pill-badge-blue">
              <Sparkles size={14} /> Product Architecture
            </div>
            <h1 className={styles.title}>
              Commercial software engineered for{" "}
              <span className={styles.gradientText}>mission-critical operations.</span>
            </h1>
            <p className={styles.subtitle}>
              AmbbaTech builds standalone, deep-vertical software platforms. We don&apos;t build generic surface-level tools—each product is built around the exact operational blueprint of its industry.
            </p>
          </div>

          {/* Product Showcase Cards (4-System Grid) */}
          <div className={styles.grid}>
            {/* 1. Hotel Management System */}
            <div className={`${styles.card} ${styles.cardKasina}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconGoldWrap}>
                  <Hotel size={26} />
                </div>
                <span className={styles.badgeKasina}>Hospitality Operations</span>
              </div>

              <h2 className={styles.cardTitle}>Hotel Management System</h2>
              <div className={styles.cardTagline}>Complete Hospitality Command Center</div>

              <p className={styles.cardDesc}>
                A complete, connected command center for luxury hotels, resorts, and lodges. Unifies front desk reservations, housekeeping turns, dining POS, guest multi-folios, inventory, and night audit.
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.goldCheck} />
                  <span>Sub-45s check-in &amp; digital keycard encoding</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.goldCheck} />
                  <span>Live room occupancy &amp; housekeeping status</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.goldCheck} />
                  <span>Integrated restaurant &amp; bar room-folio billing</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.goldCheck} />
                  <span>Automated night audit &amp; RevPAR reporting</span>
                </div>
              </div>

              <div className={styles.cardActions}>
                <Link href="/products/hotel-management-system" className="btn btn-kasina">
                  Explore Hotel System <ArrowRight size={16} />
                </Link>
                <Link href="/request-demo?product=hotel" className="btn btn-secondary-dark">
                  Book Demo
                </Link>
              </div>
            </div>

            {/* 2. Club & Restaurant Management System */}
            <div className={`${styles.card} ${styles.cardOak}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconEmeraldWrap}>
                  <Wine size={26} />
                </div>
                <span className={styles.badgeOak}>Venues &amp; F&amp;B</span>
              </div>

              <h2 className={styles.cardTitle}>Club &amp; Restaurant System</h2>
              <div className={styles.cardTagline}>Venue &amp; Dining Operations Engine</div>

              <p className={styles.cardDesc}>
                A high-throughput operations engine built specifically for bustling clubs, lounges, bars, and restaurants. Eliminates missed tickets, beverage shrinkage, and cashier settlement delays.
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.emeraldCheck} />
                  <span>Interactive floor plan with live VIP table status</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.emeraldCheck} />
                  <span>Fast handheld waiter POS &amp; instant KOT routing</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.emeraldCheck} />
                  <span>Automatic beverage &amp; liquor stock depletion</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.emeraldCheck} />
                  <span>Blind cashier float &amp; daily margin telemetry</span>
                </div>
              </div>

              <div className={styles.cardActions}>
                <Link href="/products/club-restaurant-management-system" className="btn btn-oak">
                  Explore Venue System <ArrowRight size={16} />
                </Link>
                <Link href="/request-demo?product=club" className="btn btn-secondary-dark">
                  Book Demo
                </Link>
              </div>
            </div>

            {/* 3. Pharmaceutical Management System */}
            <div className={`${styles.card} ${styles.cardPharma}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCyanWrap}>
                  <Pill size={26} />
                </div>
                <span className={styles.badgePharma}>Healthcare &amp; Dispensary</span>
              </div>

              <h2 className={styles.cardTitle}>Pharmaceutical System</h2>
              <div className={styles.cardTagline}>Prescription &amp; Pharmacy Logistics</div>

              <p className={styles.cardDesc}>
                Engineered for community pharmacies, hospital dispensaries, and pharmaceutical wholesalers. Eliminates expired medicine losses, automates prescription dispensation, and enforces regulatory safety.
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.cyanCheck} />
                  <span>Granular drug batch, lot &amp; expiry date tracking</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.cyanCheck} />
                  <span>Digital prescription validation &amp; dosage labeling</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.cyanCheck} />
                  <span>Approved generic drug alternative recommendation</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.cyanCheck} />
                  <span>Health insurance &amp; direct co-pay split billing</span>
                </div>
              </div>

              <div className={styles.cardActions}>
                <Link href="/products/pharmaceutical-management-system" className="btn btn-primary" style={{ backgroundColor: "#06B6D4", borderColor: "#06B6D4" }}>
                  Explore Pharmacy System <ArrowRight size={16} />
                </Link>
                <Link href="/request-demo?product=pharmaceutical" className="btn btn-secondary-dark">
                  Book Demo
                </Link>
              </div>
            </div>

            {/* 4. Store Management System */}
            <div className={`${styles.card} ${styles.cardStore}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconPurpleWrap}>
                  <Store size={26} />
                </div>
                <span className={styles.badgeStore}>Retail &amp; Warehousing</span>
              </div>

              <h2 className={styles.cardTitle}>Store Management System</h2>
              <div className={styles.cardTagline}>Multi-Branch Inventory &amp; Retail POS</div>

              <p className={styles.cardDesc}>
                Built for multi-branch retailers, distribution warehouses, supermarkets, and wholesale hubs. Seamless barcode SKU tracking, automated re-order par thresholds, and shrinkage auditing.
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.purpleCheck} />
                  <span>Multi-branch warehouse stock visibility in real-time</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.purpleCheck} />
                  <span>Fast barcode scanning for stock intake &amp; cashier POS</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.purpleCheck} />
                  <span>Automated safety par levels &amp; supplier PO drafting</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.purpleCheck} />
                  <span>Inter-store stock transfers &amp; discrepancy auditing</span>
                </div>
              </div>

              <div className={styles.cardActions}>
                <Link href="/products/store-management-system" className="btn btn-primary" style={{ backgroundColor: "#8B5CF6", borderColor: "#8B5CF6" }}>
                  Explore Store System <ArrowRight size={16} />
                </Link>
                <Link href="/request-demo?product=store" className="btn btn-secondary-dark">
                  Book Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Product Extensibility Promise */}
          <div className={styles.futureStrip}>
            <ShieldCheck size={20} className={styles.shieldIcon} />
            <div>
              <strong>Unified Architecture:</strong> Every AmbbaTech system is engineered on our secure, sub-second database core, with offline-first resilience and dedicated 24/7 SLA enterprise support.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
