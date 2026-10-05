import { Briefcase, Network, Sparkles, Wrench } from "lucide-react";
import styles from "./WhyAmbbaTech.module.css";

export default function WhyAmbbaTech() {
  const pillars = [
    {
      number: "01",
      title: "BUSINESS-FIRST",
      icon: Briefcase,
      headline: "Workflow precedes code",
      body: "We start with how your business actually works in the real world—your paper trails, departmental handoffs, and customer touchpoints—then design technology to empower it.",
    },
    {
      number: "02",
      title: "CONNECTED",
      icon: Network,
      headline: "Unified single source of truth",
      body: "Bring departments, inventory, Point of Sale, and financial accounting together into one synchronized environment. Eliminate double-entry and sync discrepancies forever.",
    },
    {
      number: "03",
      title: "MODERN",
      icon: Sparkles,
      headline: "Engineered for longevity & scale",
      body: "Built on resilient, high-speed architectures that load instantly, secure your data, and adapt seamlessly whether you operate 1 location or scale across 50 branches.",
    },
    {
      number: "04",
      title: "PRACTICAL",
      icon: Wrench,
      headline: "Focused on measurable ROI",
      body: "We don't build software to show off frameworks or push trendy buzzwords. Every screen, button, and report is built to solve tangible operational pain and protect your margin.",
    },
  ];

  return (
    <section className={`section section-light ${styles.whySection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.tagline}>Core Principles</div>
          <h2 className={styles.title}>Why AmbbaTech</h2>
          <p className={styles.subtitle}>
            The difference between building software that looks pretty on a pitch deck and software that runs a profitable enterprise.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.number} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.pillarNumber}>{pillar.number}</span>
                  <div className={styles.iconWrap}>
                    <Icon size={20} />
                  </div>
                </div>

                <div className={styles.pillarBadge}>{pillar.title}</div>
                <h3 className={styles.cardHeadline}>{pillar.headline}</h3>
                <p className={styles.cardBody}>{pillar.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
