"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Hotel, Wine, Layers, Laptop, Smartphone, Cpu } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Brand Logo */}
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

        {/* Desktop Nav Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {/* Products Dropdown */}
          <div
            className={styles.dropdownContainer}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className={`${styles.navLink} ${productsOpen ? styles.navLinkActive : ""}`}>
              Products <ChevronDown size={14} className={`${styles.dropdownChevron} ${productsOpen ? styles.rotate : ""}`} />
            </button>

            {productsOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/products/kasina-hms" className={styles.dropdownItem}>
                  <div className={`${styles.itemIcon} ${styles.iconKasina}`}>
                    <Hotel size={18} />
                  </div>
                  <div className={styles.itemContent}>
                    <div className={styles.itemTitleRow}>
                      <span className={styles.itemTitle}>Kasina HMS</span>
                      <span className={styles.kasinaBadge}>Hospitality</span>
                    </div>
                    <p className={styles.itemDesc}>Complete hotel operations, reservations & multi-department folios.</p>
                  </div>
                </Link>

                <Link href="/products/the-oak-club" className={styles.dropdownItem}>
                  <div className={`${styles.itemIcon} ${styles.iconOak}`}>
                    <Wine size={18} />
                  </div>
                  <div className={styles.itemContent}>
                    <div className={styles.itemTitleRow}>
                      <span className={styles.itemTitle}>THE OAK CLUB</span>
                      <span className={styles.oakBadge}>Venues & F&B</span>
                    </div>
                    <p className={styles.itemDesc}>Centralized platform for clubs, lounges, restaurants and bar management.</p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className={styles.dropdownContainer}
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className={`${styles.navLink} ${solutionsOpen ? styles.navLinkActive : ""}`}>
              Solutions <ChevronDown size={14} className={`${styles.dropdownChevron} ${solutionsOpen ? styles.rotate : ""}`} />
            </button>

            {solutionsOpen && (
              <div className={`${styles.dropdownMenu} ${styles.solutionsDropdown}`}>
                <div className={styles.dropdownGrid}>
                  <Link href="/solutions/custom-software" className={styles.dropdownItemSmall}>
                    <div className={styles.smallIconWrap}><Cpu size={16} /></div>
                    <div>
                      <span className={styles.smallItemTitle}>Custom Software</span>
                      <p className={styles.smallItemDesc}>Tailored for specific enterprise workflows</p>
                    </div>
                  </Link>

                  <Link href="/solutions/web-applications" className={styles.dropdownItemSmall}>
                    <div className={styles.smallIconWrap}><Laptop size={16} /></div>
                    <div>
                      <span className={styles.smallItemTitle}>Web Applications</span>
                      <p className={styles.smallItemDesc}>High-scale browser & operational portals</p>
                    </div>
                  </Link>

                  <Link href="/solutions/mobile-applications" className={styles.dropdownItemSmall}>
                    <div className={styles.smallIconWrap}><Smartphone size={16} /></div>
                    <div>
                      <span className={styles.smallItemTitle}>Mobile Applications</span>
                      <p className={styles.smallItemDesc}>Native & cross-platform iOS / Android</p>
                    </div>
                  </Link>

                  <Link href="/solutions/business-management" className={styles.dropdownItemSmall}>
                    <div className={styles.smallIconWrap}><Layers size={16} /></div>
                    <div>
                      <span className={styles.smallItemTitle}>Business Systems</span>
                      <p className={styles.smallItemDesc}>Connected inventory, POS, HR & finance</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/work" className={styles.navLink}>
            Work
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className={styles.actionContainer}>
          <Link href="/request-demo" className="btn btn-primary btn-sm btn-pill">
            Request a Demo <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileToggleBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileNavSection}>
            <span className={styles.mobileSectionHeader}>Products</span>
            <Link href="/products/kasina-hms" className={styles.mobileNavLink}>
              <Hotel size={18} className={styles.mobileKasinaIcon} />
              <div>
                <strong>Kasina HMS</strong>
                <span className={styles.mobileSubtext}>Hotel Management System</span>
              </div>
            </Link>
            <Link href="/products/the-oak-club" className={styles.mobileNavLink}>
              <Wine size={18} className={styles.mobileOakIcon} />
              <div>
                <strong>THE OAK CLUB</strong>
                <span className={styles.mobileSubtext}>Club & Venue System</span>
              </div>
            </Link>
          </div>

          <div className={styles.mobileNavSection}>
            <span className={styles.mobileSectionHeader}>Solutions</span>
            <Link href="/solutions/custom-software" className={styles.mobileNavLink}>
              <Cpu size={16} /> Custom Software
            </Link>
            <Link href="/solutions/web-applications" className={styles.mobileNavLink}>
              <Laptop size={16} /> Web Applications
            </Link>
            <Link href="/solutions/mobile-applications" className={styles.mobileNavLink}>
              <Smartphone size={16} /> Mobile Applications
            </Link>
            <Link href="/solutions/business-management" className={styles.mobileNavLink}>
              <Layers size={16} /> Business Systems
            </Link>
          </div>

          <div className={styles.mobileNavSection}>
            <Link href="/work" className={styles.mobileNavLink}>Selected Work</Link>
            <Link href="/about" className={styles.mobileNavLink}>About AmbbaTech</Link>
            <Link href="/contact" className={styles.mobileNavLink}>Contact Us</Link>
          </div>

          <div className={styles.mobileCtaWrapper}>
            <Link href="/request-demo" className="btn btn-primary" style={{ width: "100%" }}>
              Request a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
