"use client";

import Link from "next/link";
import { ArrowRight, Check, Zap, Headphones } from "lucide-react";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaBanner} data-reveal>
          {/* Subtle Ambient Background Gradient & Angle Cuts */}
          <div className={styles.bannerGlow} />

          {/* Left: Headline & Subtitle */}
          <div className={styles.bannerLeft}>
            <h2 className={styles.headline}>
              Have a business problem worth solving?
            </h2>
            <p className={styles.subline}>
              Let&apos;s turn your idea into a powerful software solution.
            </p>
          </div>

          {/* Center: Action Pill Button */}
          <div className={styles.bannerAction}>
            <Link href="/request-demo" className="btn btn-primary btn-pill">
              Request a Demo <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: Inline Trust Badges */}
          <div className={styles.trustBadges}>
            <div className={styles.trustItem}>
              <Check size={15} className={styles.checkIcon} />
              <span>Trusted by businesses</span>
            </div>
            <div className={styles.trustItem}>
              <Zap size={15} className={styles.zapIcon} />
              <span>Modern technology</span>
            </div>
            <div className={styles.trustItem}>
              <Headphones size={15} className={styles.supportIcon} />
              <span>Long-term support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
