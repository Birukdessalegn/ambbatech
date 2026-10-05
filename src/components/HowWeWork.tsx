"use client";

import { Lightbulb, PenTool, Code, Cloud, Headphones } from "lucide-react";
import styles from "./HowWeWork.module.css";

export default function HowWeWork() {
  const steps = [
    {
      number: "01. Discover",
      icon: Lightbulb,
      description: "Understand your goals, needs and challenges.",
    },
    {
      number: "02. Design",
      icon: PenTool,
      description: "Create simple, intuitive and effective solutions.",
    },
    {
      number: "03. Build",
      icon: Code,
      description: "Develop with modern technologies and clean code.",
    },
    {
      number: "04. Deploy",
      icon: Cloud,
      description: "Launch with confidence and minimal downtime.",
    },
    {
      number: "05. Support",
      icon: Headphones,
      description: "Keep your system running and your team supported.",
    },
  ];

  return (
    <section className={`section ${styles.processSection}`} id="process">
      <div className="container">
        {/* Left-Aligned Header */}
        <div className={styles.sectionHeader} data-reveal>
          <div className="section-eyebrow">OUR PROCESS</div>
          <h2 className={styles.title}>
            From idea to <br />
            deployed software.
          </h2>
          <p className={styles.subtitle}>
            We follow a clear and collaborative process to turn your vision into reliable, scalable software.
          </p>
        </div>

        {/* 5 Process Steps Horizontal Flow */}
        <div className={styles.processTrackWrapper} data-reveal>
          {/* Subtle Connecting Line */}
          <div className={styles.trackLine} />

          <div className={styles.stepsGrid}>
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className={styles.stepItem}
                  data-reveal
                  data-reveal-delay={String(idx + 1)}
                >
                  {/* Icon Circle */}
                  <div className={styles.iconCircle}>
                    <IconComp size={18} className={styles.stepIcon} />
                  </div>

                  {/* Step Title & Description */}
                  <div className={styles.stepTitle}>{step.number}</div>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
