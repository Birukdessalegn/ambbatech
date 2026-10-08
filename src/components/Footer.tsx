import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import AmbbaLogo from "@/components/AmbbaLogo";
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
                <AmbbaLogo size={32} />
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
                <Link href="/products/hotel-management-system" className={styles.footerLink}>
                  <span>Hotel Management System</span>
                </Link>
              </li>
              <li>
                <Link href="/products/club-restaurant-management-system" className={styles.footerLink}>
                  <span>Club & Restaurant System</span>
                </Link>
              </li>
              <li>
                <Link href="/products/pharmaceutical-management-system" className={styles.footerLink}>
                  <span>Pharmaceutical System</span>
                </Link>
              </li>
              <li>
                <Link href="/products/store-management-system" className={styles.footerLink}>
                  <span>Store Management System</span>
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
