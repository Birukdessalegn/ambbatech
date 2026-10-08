import Link from "next/link";
import { ArrowRight, Hotel, Wine, Layers, TrendingUp, CheckCircle, ExternalLink } from "lucide-react";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  const projects = [
    {
      id: "hotel-management-system",
      title: "Hotel Management System",
      clientType: "Hospitality • SaaS & Multi-Property",
      category: "Hotel PMS & Multi-Outlet F&B",
      desc: "Replaced 4 disparate legacy systems (front desk ledger, separate restaurant cash registers, manual housekeeping clipboards, and paper store requisitions) with one unified real-time cloud PMS.",
      metrics: [
        { label: "Check-in Velocity", value: "< 45 secs" },
        { label: "Folio Discrepancy", value: "0.0%" },
        { label: "Night Audit Duration", value: "12 mins" },
      ],
      tags: ["Hotel Management", "Front Desk", "Restaurant POS", "Housekeeping", "Auditing"],
      link: "/products/hotel-management-system",
      accent: "gold",
    },
    {
      id: "club-restaurant-management-system",
      title: "Club & Restaurant Management System",
      clientType: "Hospitality • Venues, Lounges & Nightlife",
      category: "Club POS & Beverage Inventory Intelligence",
      desc: "Architected a high-throughput venue operating platform managing table reservations, bottle service, dual-bar cashiers, and kitchen order routing with instant stock depletion.",
      metrics: [
        { label: "Order-to-Kitchen", value: "Instant (0s)" },
        { label: "Stock Shrinkage Reduction", value: "88%" },
        { label: "Peak Hour Tab Handling", value: "400+ orders/hr" },
      ],
      tags: ["Club Management", "Table Mapping", "Kitchen Routing", "Beverage Control", "P&L Analytics"],
      link: "/products/club-restaurant-management-system",
      accent: "emerald",
    },
  ];

  const smallerProjects = [
    {
      title: "Pharmaceutical Management System",
      category: "Healthcare & Dispensary POS",
      desc: "Prescription verification, batch expiry tracking, and drug-interaction safety audits for pharmacy networks.",
      tag: "Commercial System",
      link: "/products/pharmaceutical-management-system",
    },
    {
      title: "Store & Inventory Management System",
      category: "Retail & Multi-Branch Warehousing",
      desc: "Automated replenishment workflows, barcode scanning, and multi-location retail stock transfer routing.",
      tag: "Commercial System",
      link: "/products/store-management-system",
    },
  ];

  return (
    <section className={`section section-dark ${styles.workSection}`} id="work">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className="pill-badge pill-badge-blue">
            Selected Work
          </div>
          <h2 className={styles.title}>Engineered in the field</h2>
          <p className={styles.subtitle}>
            Proof of execution. Explore our flagship operational platforms and enterprise case studies.
          </p>
        </div>

        {/* Featured Case Studies Grid */}
        <div className={styles.caseStudyGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${styles.caseCard} ${project.accent === "gold" ? styles.caseGold : styles.caseEmerald}`}
            >
              <div className={styles.caseHeader}>
                <div className={styles.categoryPill}>
                  {project.accent === "gold" ? <Hotel size={14} /> : <Wine size={14} />}
                  <span>{project.clientType}</span>
                </div>
                <span className={styles.featuredBadge}>Flagship Platform</span>
              </div>

              <h3 className={styles.caseTitle}>{project.title}</h3>
              <p className={styles.caseDesc}>{project.desc}</p>

              {/* Verified Metrics */}
              <div className={styles.metricsRow}>
                {project.metrics.map((m, idx) => (
                  <div key={idx} className={styles.metricBlock}>
                    <span className={styles.metricVal}>{m.value}</span>
                    <span className={styles.metricLbl}>{m.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.tagWrap}>
                {project.tags.map((t, idx) => (
                  <span key={idx} className={styles.caseTag}>{t}</span>
                ))}
              </div>

              <div className={styles.caseFooter}>
                <Link href={project.link} className={styles.caseLink}>
                  <span>Explore Case Study & Platform</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Enterprise Projects */}
        <div className={styles.secondarySection}>
          <h4 className={styles.secondaryHeader}>Additional Enterprise Solutions</h4>
          <div className={styles.secondaryGrid}>
            {smallerProjects.map((sp, idx) => (
              <div key={idx} className={styles.secondaryCard}>
                <div className={styles.secTop}>
                  <span className={styles.secTag}>{sp.tag}</span>
                  <Layers size={16} className={styles.secIcon} />
                </div>
                <h5 className={styles.secTitle}>{sp.title}</h5>
                <p className={styles.secDesc}>{sp.desc}</p>
                <Link href={sp.link || "/solutions/custom-software"} className={styles.secLink}>
                  <span>Explore System Platform</span> <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
