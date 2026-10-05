import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.grid}>
          {/* Col 1: Brand & Positioning */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoMark}>
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="#151F38" />
                  <path d="M16 6L7 24H12.5L16 16.5L19.5 24H25L16 6Z" fill="#4F7CFF" />
                  <path d="M12 18H20L18.5 21H13.5L12 18Z" fill="#27D3FF" opacity="0.85" />
                </svg>
              </div>
              <span className={styles.logoText}>
                AMBBA<span className={styles.logoAccent}>TECH</span>
              </span>
            </Link>

            <p className={styles.brandDescription}>
              Software built around your business. We engineer reliable, high-performance operational systems that unify teams, workflows, and commercial growth.
            </p>

            <div className={styles.locationBadge}>
              <MapPin size={16} className={styles.locationIcon} />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Products</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/products/kasina-hms" className={styles.footerLink}>
                  <span>Kasina HMS</span>
                  <span className={styles.miniBadgeKasina}>Hotel</span>
                </Link>
              </li>
              <li>
                <Link href="/products/the-oak-club" className={styles.footerLink}>
                  <span>THE OAK CLUB</span>
                  <span className={styles.miniBadgeOak}>Club & Bar</span>
                </Link>
              </li>
              <li>
                <Link href="/request-demo" className={styles.footerLink}>
                  <span>Schedule Product Demo</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Solutions</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/solutions/custom-software" className={styles.footerLink}>
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/solutions/web-applications" className={styles.footerLink}>
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/solutions/mobile-applications" className={styles.footerLink}>
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="/solutions/business-management" className={styles.footerLink}>
                  Business Management Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Contact */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company & Connect</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.footerLink}>About Us</Link>
              </li>
              <li>
                <Link href="/work" className={styles.footerLink}>Selected Work</Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>Contact Team</Link>
              </li>
            </ul>

            <div className={styles.contactDetails}>
              <a href="mailto:contact@ambbatech.com" className={styles.contactItem}>
                <Mail size={14} /> contact@ambbatech.com
              </a>
              <a href="tel:+251911000000" className={styles.contactItem}>
                <Phone size={14} /> +251 911 00 00 00
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} AmbbaTech. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <span className={styles.dotDivider}>•</span>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
