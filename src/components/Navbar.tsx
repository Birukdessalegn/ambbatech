"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Hotel, Wine, Pill, Store, Layers, Laptop, Smartphone, Cpu } from "lucide-react";
import AmbbaLogo from "@/components/AmbbaLogo";
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
            <AmbbaLogo size={32} />
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
              <div className={`${styles.dropdownMenu} ${styles.productsDropdownWide}`}>
                <div className={styles.productsDropdownGrid}>
                  {/* Product 1: Hotel Management */}
                  <Link href="/products/hotel-management-system" className={styles.dropdownItem}>
                    <div className={`${styles.itemIcon} ${styles.iconKasina}`}>
                      <Hotel size={18} />
                    </div>
                    <div className={styles.itemContent}>
                      <div className={styles.itemTitleRow}>
                        <span className={styles.itemTitle}>Hotel Management System</span>
                        <span className={styles.kasinaBadge}>Hospitality</span>
                      </div>
                      <p className={styles.itemDesc}>Front desk, housekeeping, room folios, dining POS & night audit.</p>
                    </div>
                  </Link>

                  {/* Product 2: Club & Restaurant */}
                  <Link href="/products/club-restaurant-management-system" className={styles.dropdownItem}>
                    <div className={`${styles.itemIcon} ${styles.iconOak}`}>
                      <Wine size={18} />
                    </div>
                    <div className={styles.itemContent}>
                      <div className={styles.itemTitleRow}>
                        <span className={styles.itemTitle}>Club & Restaurant System</span>
                        <span className={styles.oakBadge}>F&B Venues</span>
                      </div>
                      <p className={styles.itemDesc}>Floor table mapping, fast handheld POS, kitchen routing & bar stock.</p>
                    </div>
                  </Link>

                  {/* Product 3: Pharmaceutical Management */}
                  <Link href="/products/pharmaceutical-management-system" className={styles.dropdownItem}>
                    <div className={`${styles.itemIcon} ${styles.iconPharma}`}>
                      <Pill size={18} />
                    </div>
                    <div className={styles.itemContent}>
                      <div className={styles.itemTitleRow}>
                        <span className={styles.itemTitle}>Pharmaceutical System</span>
                        <span className={styles.pharmaBadge}>Healthcare</span>
                      </div>
                      <p className={styles.itemDesc}>Batch & expiry tracking, prescription dispensing & pharmacy POS.</p>
                    </div>
                  </Link>

                  {/* Product 4: Store Management */}
                  <Link href="/products/store-management-system" className={styles.dropdownItem}>
                    <div className={`${styles.itemIcon} ${styles.iconStore}`}>
                      <Store size={18} />
                    </div>
                    <div className={styles.itemContent}>
                      <div className={styles.itemTitleRow}>
                        <span className={styles.itemTitle}>Store Management System</span>
                        <span className={styles.storeBadge}>Retail & Stores</span>
                      </div>
                      <p className={styles.itemDesc}>Multi-branch warehouse stock, barcode scanning & PO automation.</p>
                    </div>
                  </Link>
                </div>
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
          <Link href="/request-demo" className="btn btn-primary btn-sm">
            Request Demo <ArrowRight size={15} />
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
            <span className={styles.mobileSectionHeader}>Our Products</span>
            <Link href="/products/hotel-management-system" className={styles.mobileNavLink}>
              <Hotel size={18} className={styles.mobileKasinaIcon} />
              <div>
                <strong>Hotel Management System</strong>
                <span className={styles.mobileSubtext}>Full Hospitality PMS</span>
              </div>
            </Link>
            <Link href="/products/club-restaurant-management-system" className={styles.mobileNavLink}>
              <Wine size={18} className={styles.mobileOakIcon} />
              <div>
                <strong>Club & Restaurant System</strong>
                <span className={styles.mobileSubtext}>Venues, Lounges & Bars</span>
              </div>
            </Link>
            <Link href="/products/pharmaceutical-management-system" className={styles.mobileNavLink}>
              <Pill size={18} className={styles.mobilePharmaIcon} />
              <div>
                <strong>Pharmaceutical System</strong>
                <span className={styles.mobileSubtext}>Prescription & Pharmacy POS</span>
              </div>
            </Link>
            <Link href="/products/store-management-system" className={styles.mobileNavLink}>
              <Store size={18} className={styles.mobileStoreIcon} />
              <div>
                <strong>Store Management System</strong>
                <span className={styles.mobileSubtext}>Warehouse, Stock & Retail POS</span>
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
