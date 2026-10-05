import { AlertCircle, CheckCircle2, ArrowDown, ArrowRight } from "lucide-react";
import styles from "./BusinessProblem.module.css";

export default function BusinessProblem() {
  const painPoints = [
    { title: "Disconnected Operations", desc: "Front desk, inventory, and point-of-sale working in isolated bubbles." },
    { title: "Manual Processes", desc: "Staff manually re-typing figures, cross-checking paper dockets and receipts." },
    { title: "Delayed Information", desc: "Managers only know yesterday's performance when tomorrow has already started." },
    { title: "Poor Visibility", desc: "Discrepancies, shrinkage, and revenue leakage lost in fragmented spreadsheets." },
  ];

  const solutions = [
    { title: "One Unified System", desc: "Every department accesses the exact same operational state in real-time." },
    { title: "Connected Operations", desc: "An order at the bar instantly notifies inventory, POS, and financial accounts." },
    { title: "Real-Time Visibility", desc: "Live occupancy, revenue telemetry, and inventory par levels 24/7." },
    { title: "Better Decisions", desc: "Executives lead with validated, instant data rather than end-of-month guesswork." },
  ];

  return (
    <section className={`section section-light ${styles.problemSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.tagline}>The Enterprise Reality</div>
          <h2 className={styles.title}>
            Your business shouldn't be held together by disconnected systems.
          </h2>
          <p className={styles.subtitle}>
            Most businesses don't fail from lack of demand—they struggle under the weight of fragmented software that doesn't talk to each other.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className={styles.comparisonGrid}>
          {/* Column 1: The Disconnected Reality */}
          <div className={styles.problemCard}>
            <div className={styles.cardHeaderProblem}>
              <AlertCircle size={22} className={styles.iconProblem} />
              <div>
                <h3 className={styles.columnTitle}>The Disconnected Trap</h3>
                <span className={styles.columnSub}>Fragmented tools & manual overhead</span>
              </div>
            </div>

            <div className={styles.stepList}>
              {painPoints.map((item, index) => (
                <div key={index} className={styles.stepItemProblem}>
                  <div className={styles.stepNumberProblem}>0{index + 1}</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitleProblem}>{item.title}</h4>
                    <p className={styles.stepDesc}>{item.desc}</p>
                  </div>
                  {index < painPoints.length - 1 && (
                    <div className={styles.connectorProblem}>
                      <ArrowDown size={14} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: The AmbbaTech Connected System */}
          <div className={styles.solutionCard}>
            <div className={styles.cardHeaderSolution}>
              <CheckCircle2 size={22} className={styles.iconSolution} />
              <div>
                <h3 className={styles.columnTitle}>The AmbbaTech Way</h3>
                <span className={styles.columnSubSolution}>Centralized, synchronized operations</span>
              </div>
            </div>

            <div className={styles.stepList}>
              {solutions.map((item, index) => (
                <div key={index} className={styles.stepItemSolution}>
                  <div className={styles.stepNumberSolution}>0{index + 1}</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitleSolution}>{item.title}</h4>
                    <p className={styles.stepDescSolution}>{item.desc}</p>
                  </div>
                  {index < solutions.length - 1 && (
                    <div className={styles.connectorSolution}>
                      <ArrowDown size={14} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className={styles.outcomeBanner}>
          <div className={styles.outcomeText}>
            <strong>Outcome:</strong> When technology connects your entire business, you unlock speed, accountability, and predictable margins.
          </div>
        </div>
      </div>
    </section>
  );
}
