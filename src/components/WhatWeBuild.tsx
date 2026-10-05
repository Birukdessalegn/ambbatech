"use client";

import Link from "next/link";
import { ArrowRight, Code, Globe, Smartphone, Layers } from "lucide-react";
import styles from "./WhatWeBuild.module.css";

export default function WhatWeBuild() {
  const services = [
    {
      title: "Custom Software",
      icon: Code,
      desc: "Tailored solutions for your specific business requirements.",
      link: "/solutions/custom-software",
    },
    {
      title: "Web Applications",
      icon: Globe,
      desc: "Modern, scalable and responsive web platforms.",
      link: "/solutions/web-applications",
    },
    {
      title: "Mobile Applications",
      icon: Smartphone,
      desc: "Cross-platform apps for Android and iOS.",
      link: "/solutions/mobile-applications",
    },
    {
      title: "Business Management Systems",
      icon: Layers,
      desc: "Integrated systems for operations, teams, inventory and finance.",
      link: "/solutions/business-management",
    },
  ];

  return (
    <section className={`section ${styles.servicesSection}`} id="services">
      <div className="container">
        {/* Left-Aligned Header */}
        <div className={styles.sectionHeader} data-reveal>
          <div className="section-eyebrow">WHAT WE DO</div>
          <h2 className={styles.title}>
            Services for your <br />
            digital transformation.
          </h2>
          <p className={styles.subtitle}>
            Whether you need a comprehensive system or a single application, we have the expertise to bring your ideas to life.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className={styles.servicesGrid}>
          {services.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <Link
                key={idx}
                href={item.link}
                className={styles.serviceCard}
                data-reveal
                data-reveal-delay={String(idx + 1)}
              >
                <div className={styles.iconContainer}>
                  <IconComp size={20} className={styles.serviceIcon} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.arrowLink}>
                  <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
