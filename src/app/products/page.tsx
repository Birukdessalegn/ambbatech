import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hotel, Wine, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import styles from "./ProductsPage.module.css";

export const metadata: Metadata = {
  title: "Commercial Software Products | AmbbaTech",
  description:
    "Explore AmbbaTech's enterprise product portfolio: Kasina HMS (Hotel Management System) and THE OAK CLUB (Club, Bar & Restaurant Operating System).",
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
              <span className={styles.gradientText}>mission-critical industries.</span>
            </h1>
            <p className={styles.subtitle}>
              AmbbaTech builds standalone, deep-vertical software platforms. We don&apos;t build generic surface-level tools—each product is built around the exact operational blueprint of its industry.
            </p>
          </div>

          {/* Product Showcase Cards */}
          <div className={styles.grid}>
            {/* Kasina HMS */}
            <div className={`${styles.card} ${styles.cardKasina}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconGoldWrap}>
                  <Hotel size={26} />
                </div>
                <span className={styles.badgeKasina}>Hospitality SaaS</span>
              </div>

              <h2 className={styles.cardTitle}>Kasina HMS</h2>
              <div className={styles.cardTagline}>Hotel Operations Platform</div>

              <p className={styles.cardDesc}>
                A complete, connected command center for luxury hotels, resorts, and lodges. Unifies front desk reservations, housekeeping turns, dining POS, guest multi-folios, inventory, and night audit.
              </p>

              <div className={styles.featurePoints}>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.goldCheck} />
                  <span>Sub-45s check-in & digital keycard encoding</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.goldCheck} />
                  <span>Live room occupancy & housekeeping status</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.goldCheck} />
                  <span>Integrated restaurant & bar room-folio billing</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.goldCheck} />
                  <span>Automated night audit & RevPAR reporting</span>
                </div>
              </div>

              <div className={styles.cardActions}>
                <Link href="/products/kasina-hms" className="btn btn-kasina">
                  Explore Kasina HMS <ArrowRight size={16} />
                </Link>
                <Link href="/request-demo?product=kasina" className="btn btn-secondary-dark">
                  Book Demo
                </Link>
              </div>
            </div>

            {/* THE OAK CLUB */}
            <div className={`${styles.card} ${styles.cardOak}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconEmeraldWrap}>
                  <Wine size={26} />
                </div>
                <span className={styles.badgeOak}>Venues & F&B</span>
              </div>

              <h2 className={styles.cardTitle}>THE OAK CLUB</h2>
              <div className={styles.cardTagline}>Club & Venue Management System</div>

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
                  <span>Fast handheld waiter POS & instant KOT routing</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.emeraldCheck} />
                  <span>Automatic beverage & liquor stock depletion</span>
                </div>
                <div className={styles.point}>
                  <CheckCircle2 size={16} className={styles.emeraldCheck} />
                  <span>Blind cashier float & daily margin telemetry</span>
                </div>
              </div>

              <div className={styles.cardActions}>
                <Link href="/products/the-oak-club" className="btn btn-oak">
                  Explore THE OAK CLUB <ArrowRight size={16} />
                </Link>
                <Link href="/request-demo?product=oak" className="btn btn-secondary-dark">
                  Book Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Product Extensibility Promise */}
          <div className={styles.futureStrip}>
            <ShieldCheck size={20} className={styles.shieldIcon} />
            <div>
              <strong>Endorsed Brand Architecture:</strong> As AmbbaTech develops new vertical products, each system inherits our shared security, high-uptime database core, and dedicated 24/7 SLA infrastructure.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
