import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hotel, Wine, Pill, Store, ShieldCheck, MapPin, Target, Users, Zap, CheckCircle } from "lucide-react";
import styles from "./About.module.css";

export const metadata: Metadata = {
  title: "About AmbbaTech | Building Practical Software for Modern Businesses",
  description:
    "AmbbaTech is an Addis Ababa-based software engineering company creating connected operational software, including Kasina HMS and THE OAK CLUB.",
};

export default function AboutPage() {
  const beliefs = [
    {
      title: "Real operations over tech buzzwords",
      desc: "Software is only as good as the problems it eliminates on the ground. We design systems around the unglamorous, critical realities of daily operations: inventory shrinkage, double-booked rooms, and slow cashier reconciliation.",
    },
    {
      title: "Unified architecture beats patchwork tools",
      desc: "When a company relies on five disconnected SaaS apps, staff spend half their shift re-entering information. We believe in single-source-of-truth architectures where every department synchronizes instantly.",
    },
    {
      title: "Speed and uptime are non-negotiable",
      desc: "In a hotel lobby or high-volume nightclub, a 5-second software freeze is an operational disaster. We engineer our platforms for sub-second database transactions, offline resilience, and high-concurrency throughput.",
    },
  ];

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={`section section-dark ${styles.heroSection}`}>
        <div className="bg-radial-glow" />
        <div className="container">
          <div className={styles.heroContent}>
            <div className="pill-badge pill-badge-blue">Company Profile</div>
            <h1 className={styles.title}>
              Building practical software for{" "}
              <span className={styles.gradientText}>modern businesses.</span>
            </h1>
            <p className={styles.subtitle}>
              AmbbaTech was founded on a simple observation: off-the-shelf software forces businesses to contort their operations, while template agencies build websites that don&apos;t run core business workflows. We exist to build the systems that businesses actually run on.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Background */}
      <section className={`section section-dark-alt ${styles.storySection}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyTextCol}>
              <span className={styles.tag}>Our Story</span>
              <h2 className={styles.sectionHeadline}>From operational pain to engineered leverage</h2>
              <p>
                AmbbaTech originated by working directly inside high-demand commercial environments—hospitality groups, resorts, bustling lounges, and multi-branch suppliers. We saw first-hand how paperwork, disconnected spreadsheets, and fragmented point-of-sale tools bleed cash and drain staff morale.
              </p>
              <p>
                Instead of offering generic IT support or cosmetic web templates, we built deep vertical software: first developing <strong>Kasina HMS</strong> to unify hotel operations, followed by <strong>THE OAK CLUB</strong> to tackle high-speed dining and nightlife venue workflows.
              </p>
              <p>
                Today, AmbbaTech operates as an endorsed software company: scaling our proprietary flagship platforms while partnering with selected enterprises to architect bespoke custom software systems.
              </p>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.locBadge}>
                <MapPin size={18} className={styles.pinIcon} />
                <span>Headquarters: Addis Ababa, Ethiopia</span>
              </div>
              <h3 className={styles.locTitle}>Regional presence, global engineering standards</h3>
              <p className={styles.locDesc}>
                Being anchored in Addis Ababa allows us to offer direct, boots-on-the-ground support, hardware terminal configuration, and staff training for local enterprises, while applying international software architecture standards.
              </p>

              <div className={styles.locStats}>
                <div className={styles.statBox}>
                  <strong>4</strong>
                  <span>Core Systems</span>
                </div>
                <div className={styles.statBox}>
                  <strong>100%</strong>
                  <span>In-House Engineering</span>
                </div>
                <div className={styles.statBox}>
                  <strong>0</strong>
                  <span>Disconnected Silos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className={`section section-light ${styles.beliefsSection}`}>
        <div className="container">
          <div className={styles.centerHeader}>
            <span className={styles.beliefTag}>Foundational Values</span>
            <h2 className={styles.lightTitle}>What we believe</h2>
            <p className={styles.lightSub}>
              These principles guide how we architect databases, design interfaces, and support our clients.
            </p>
          </div>

          <div className={styles.beliefsGrid}>
            {beliefs.map((b, idx) => (
              <div key={idx} className={styles.beliefCard}>
                <div className={styles.beliefNum}>0{idx + 1}</div>
                <h3 className={styles.beliefTitle}>{b.title}</h3>
                <p className={styles.beliefDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Systems Summary */}
      <section className={`section section-dark ${styles.productsSection}`}>
        <div className="container">
          <div className={styles.centerHeader}>
            <div className="pill-badge pill-badge-blue">Core Portfolio</div>
            <h2 className={styles.whiteTitle}>Our Commercial Platforms</h2>
            <p className={styles.whiteSub}>
              Deep vertical operational engines engineered for mission-critical reliability.
            </p>
          </div>

          <div className={styles.productsGrid}>
            {/* 1. Hotel Management System */}
            <div className={`${styles.prodBox} ${styles.prodKasina}`}>
              <div className={styles.prodTop}>
                <Hotel size={24} className={styles.iconGold} />
                <span className={styles.prodType}>Hospitality Platform</span>
              </div>
              <h3 className={styles.prodTitle}>Hotel Management System</h3>
              <p className={styles.prodDesc}>
                Complete hotel operations platform integrating Front Desk, Reservations, Housekeeping, Restaurant POS, Folio Billing, and Night Audit.
              </p>
              <Link href="/products/hotel-management-system" className={styles.goldLink}>
                Explore Hotel System <ArrowRight size={15} />
              </Link>
            </div>

            {/* 2. Club & Restaurant Management System */}
            <div className={`${styles.prodBox} ${styles.prodOak}`}>
              <div className={styles.prodTop}>
                <Wine size={24} className={styles.iconEmerald} />
                <span className={styles.prodType}>Venues & Dining</span>
              </div>
              <h3 className={styles.prodTitle}>Club &amp; Restaurant System</h3>
              <p className={styles.prodDesc}>
                High-throughput operating system for clubs, bars, and restaurants featuring floor map table tracking, mobile ordering, instant KOT, and automatic stock depletion.
              </p>
              <Link href="/products/club-restaurant-management-system" className={styles.emeraldLink}>
                Explore Club &amp; Restaurant System <ArrowRight size={15} />
              </Link>
            </div>

            {/* 3. Pharmaceutical Management System */}
            <div className={`${styles.prodBox} ${styles.prodPharma}`}>
              <div className={styles.prodTop}>
                <Pill size={24} className={styles.iconCyan} />
                <span className={styles.prodType}>Healthcare & Pharmacy</span>
              </div>
              <h3 className={styles.prodTitle}>Pharmaceutical System</h3>
              <p className={styles.prodDesc}>
                Precision software for community dispensaries and pharma wholesalers, managing batch expiries, prescription validation, and insurance billing.
              </p>
              <Link href="/products/pharmaceutical-management-system" className={styles.cyanLink}>
                Explore Pharmacy System <ArrowRight size={15} />
              </Link>
            </div>

            {/* 4. Store Management System */}
            <div className={`${styles.prodBox} ${styles.prodStore}`}>
              <div className={styles.prodTop}>
                <Store size={24} className={styles.iconPurple} />
                <span className={styles.prodType}>Retail & Warehouse</span>
              </div>
              <h3 className={styles.prodTitle}>Store Management System</h3>
              <p className={styles.prodDesc}>
                Multi-branch inventory and retail command center with barcode scanning, automated par-level restocking, and shrinkage prevention.
              </p>
              <Link href="/products/store-management-system" className={styles.purpleLink}>
                Explore Store System <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
