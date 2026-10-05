"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import styles from "./ProductProof.module.css";

export default function ProductProof() {
  const kasinaCol1 = [
    "Front Desk & Reservations",
    "Housekeeping",
    "POS & Restaurant",
    "Inventory & Purchasing",
  ];

  const kasinaCol2 = [
    "Finance & Accounting",
    "HR & Payroll",
    "Reports & Analytics",
    "RBAC & Security",
  ];

  const oakCol1 = [
    "POS & Orders",
    "Tables & Waiters",
    "Kitchen & Bar",
    "Inventory",
  ];

  const oakCol2 = [
    "Purchasing & Finance",
    "HR & Staff Management",
    "Reports & Analytics",
    "RBAC & Security",
  ];

  return (
    <section className={`section ${styles.flagshipSection}`} id="products">
      <div className="container">
        {/* Left-Aligned Header */}
        <div className={styles.sectionHeader} data-reveal>
          <div className="section-eyebrow">OUR FLAGSHIP PRODUCTS</div>
          <h2 className={styles.title}>
            Powerful systems for <br />
            modern businesses.
          </h2>
          <p className={styles.subtitle}>
            Two integrated platforms, built for the unique needs of the hospitality and entertainment industries.
          </p>
        </div>

        {/* 2 Flagship Cards Side-by-Side */}
        <div className={styles.cardsGrid}>
          {/* Card 1: Kasina HMS */}
          <div className={`${styles.flagshipCard} ${styles.kasinaCard}`} data-reveal data-reveal-delay="1">
            <div className={styles.cardContent}>
              {/* Product Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconKasina}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.2">
                    <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.productName}>KASINA</h3>
                  <span className={styles.productTypeKasina}>Hotel Management System</span>
                </div>
              </div>

              <p className={styles.productTagline}>
                Complete hotel operations, from front desk to finance.
              </p>

              {/* 2-Column Features */}
              <div className={styles.featureCols}>
                <ul className={styles.featureList}>
                  {kasinaCol1.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkKasina} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className={styles.featureList}>
                  {kasinaCol2.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkKasina} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More Link */}
              <Link href="/products/kasina-hms" className={styles.learnMoreKasina}>
                Learn more <ArrowRight size={15} />
              </Link>
            </div>

            {/* Embedded Mini Dashboard Preview */}
            <div className={styles.previewWindowKasina}>
              <div className={styles.previewTopBar}>
                <span className={styles.previewTitle}>Kasina PMS</span>
                <div className={styles.miniDots}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className={styles.previewImageContainer}>
                <Image
                  src="/images/kasina-preview.jpg"
                  alt="Kasina PMS Dashboard"
                  fill
                  className={styles.previewImg}
                />
                <div className={styles.previewOverlayKasina}>
                  <div className={styles.overlayTag}>Live System</div>
                  <div className={styles.overlayMetric}>94 Occupied</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: THE OAK CLUB */}
          <div className={`${styles.flagshipCard} ${styles.oakCard}`} data-reveal data-reveal-delay="2">
            <div className={styles.cardContent}>
              {/* Product Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconOak}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2">
                    <path d="M12 3a7 7 0 0 0-7 7c0 4 7 11 7 11s7-7 7-11a7 7 0 0 0-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.productName}>THE OAK CLUB</h3>
                  <span className={styles.productTypeOak}>Club Management System</span>
                </div>
              </div>

              <p className={styles.productTagline}>
                Manage your club, restaurant and bar from one place.
              </p>

              {/* 2-Column Features */}
              <div className={styles.featureCols}>
                <ul className={styles.featureList}>
                  {oakCol1.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkOak} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className={styles.featureList}>
                  {oakCol2.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkOak} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More Link */}
              <Link href="/products/the-oak-club" className={styles.learnMoreOak}>
                Learn more <ArrowRight size={15} />
              </Link>
            </div>

            {/* Embedded Mini Dashboard Preview */}
            <div className={styles.previewWindowOak}>
              <div className={styles.previewTopBar}>
                <span className={styles.previewTitle}>The Oak Club POS</span>
                <div className={styles.miniDots}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className={styles.previewImageContainer}>
                <Image
                  src="/images/oak-preview.jpg"
                  alt="The Oak Club POS Dashboard"
                  fill
                  className={styles.previewImg}
                />
                <div className={styles.previewOverlayOak}>
                  <div className={styles.overlayTagOak}>Venue Active</div>
                  <div className={styles.overlayMetric}>38 Tables Open</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
