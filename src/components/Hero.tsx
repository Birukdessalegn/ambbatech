"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Compass, Hotel, Wine, Pill, Store } from "lucide-react";
import styles from "./Hero.module.css";

interface ProductConfig {
  id: string;
  name: string;
  headerCategory: string;
  headerTitle: string;
  badgeTitle: string;
  badgeSub: string;
  accent: string;
  accentSoft: string;
  borderGlow: string;
  tabActiveClass: string;
  link: string;
  bannerImg: string;
  bannerTitle: string;
  sidebarActive: string;
  navItems: string[];
  kpis: { num: string; label: string }[];
  icon: typeof Hotel;
}

const PRODUCTS: ProductConfig[] = [
  {
    id: "hotel",
    name: "Hotel System",
    headerCategory: "HOTEL",
    headerTitle: "MANAGEMENT SYSTEM",
    badgeTitle: "Hotel PMS",
    badgeSub: "Hotel Management System",
    accent: "#F59E0B",
    accentSoft: "rgba(245, 158, 11, 0.15)",
    borderGlow: "rgba(245, 158, 11, 0.35)",
    tabActiveClass: styles.tabActiveHotel,
    link: "/products/hotel-management-system",
    bannerImg: "/images/kasina-preview.jpg",
    bannerTitle: "Hotel Management System",
    sidebarActive: "Dashboard",
    navItems: ["Dashboard", "Reservations", "Rooms", "Housekeeping", "POS", "Kitchen & Bar", "Inventory", "Night Audit"],
    kpis: [
      { num: "128", label: "Total Rooms" },
      { num: "94", label: "Occupied" },
      { num: "34", label: "Available" },
    ],
    icon: Hotel,
  },
  {
    id: "club",
    name: "Club & Restaurant",
    headerCategory: "CLUB & RESTAURANT",
    headerTitle: "MANAGEMENT SYSTEM",
    badgeTitle: "Club & Restaurant",
    badgeSub: "Venue & Dining POS",
    accent: "#10B981",
    accentSoft: "rgba(16, 185, 129, 0.15)",
    borderGlow: "rgba(16, 185, 129, 0.35)",
    tabActiveClass: styles.tabActiveClub,
    link: "/products/club-restaurant-management-system",
    bannerImg: "/images/oak-preview.jpg",
    bannerTitle: "Club & Restaurant Platform",
    sidebarActive: "Dashboard",
    navItems: ["Dashboard", "POS", "Tables", "Orders", "Kitchen", "Bar", "Inventory", "Shift Close"],
    kpis: [
      { num: "284", label: "Total Orders" },
      { num: "38", label: "Active Tables" },
      { num: "14", label: "Staff On Duty" },
    ],
    icon: Wine,
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    headerCategory: "PHARMACEUTICAL",
    headerTitle: "MANAGEMENT SYSTEM",
    badgeTitle: "Pharmaceutical",
    badgeSub: "Dispensary & Expiry Tracking",
    accent: "#06B6D4",
    accentSoft: "rgba(6, 182, 212, 0.15)",
    borderGlow: "rgba(6, 182, 212, 0.35)",
    tabActiveClass: styles.tabActivePharma,
    link: "/products/pharmaceutical-management-system",
    bannerImg: "/images/pharma-preview.jpg",
    bannerTitle: "Dispensary & Rx Logistics",
    sidebarActive: "Dispensary",
    navItems: ["Dispensary", "Prescriptions", "Batch Expiry", "Drug Inventory", "Insurance", "Supplier PO", "Audits"],
    kpis: [
      { num: "142", label: "Rx Filled Today" },
      { num: "3,840", label: "Active Batches" },
      { num: "0", label: "Expired Held" },
    ],
    icon: Pill,
  },
  {
    id: "store",
    name: "Store & Retail",
    headerCategory: "STORE & INVENTORY",
    headerTitle: "MANAGEMENT SYSTEM",
    badgeTitle: "Store & Inventory",
    badgeSub: "Multi-Branch Retail & Warehouse",
    accent: "#8B5CF6",
    accentSoft: "rgba(139, 92, 246, 0.15)",
    borderGlow: "rgba(139, 92, 246, 0.35)",
    tabActiveClass: styles.tabActiveStore,
    link: "/products/store-management-system",
    bannerImg: "/images/store-preview.jpg",
    bannerTitle: "Retail Warehouse Logistics",
    sidebarActive: "Cashier POS",
    navItems: ["Cashier POS", "Barcode Intake", "Branch Stock", "Par Restock", "Transfers", "Supplier PO", "Shrink Audit"],
    kpis: [
      { num: "12,450", label: "Active SKUs" },
      { num: "4", label: "Stores Linked" },
      { num: "99.8%", label: "Stock Accuracy" },
    ],
    icon: Store,
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeProduct = PRODUCTS[activeIdx];
  // Companion card in background is the next product in rotation
  const backgroundIdx = (activeIdx + 1) % PRODUCTS.length;
  const backgroundProduct = PRODUCTS[backgroundIdx];

  const ActiveIcon = activeProduct.icon;
  const BackgroundIcon = backgroundProduct.icon;

  return (
    <section className={`section section-dark ${styles.heroSection}`}>
      <div className={styles.radialGlow} />
      <div className={styles.perspectiveGrid} />

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Headline & Messaging */}
          <div className={styles.heroContent}>
            <div className={styles.pillBadge}>
              <span className={styles.geezPill}>አምባ</span>
              <Compass size={14} className={styles.compassIcon} />
              <span>AMBBA • THE ELEVATED FOUNDATION</span>
            </div>

            <h1 className={styles.headline}>
              Software built around <br />
              <span className={styles.gradientText}>your business.</span>
            </h1>

            <p className={styles.subheadline}>
              Rooted in the Amba (elevated plateau)—we engineer rock-solid, commanding software systems across hotels, clubs &amp; restaurants, pharmaceuticals, and store operations.
            </p>

            <div className={styles.ctaGroup}>
              <Link href="#products" className="btn btn-primary btn-pill">
                Explore Our Products <ArrowRight size={16} />
              </Link>
              <Link href="/request-demo" className={`btn btn-secondary-dark btn-pill ${styles.buildBtn}`}>
                Build With AmbbaTech <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: 4-Product Switcher + 3D Angled Mockup Composition */}
          <div className={styles.rightStageWrap}>
            {/* 4-Product Switcher Tabs */}
            <div className={styles.productTabsContainer}>
              {PRODUCTS.map((prod, idx) => {
                const IconComp = prod.icon;
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={prod.id}
                    type="button"
                    className={`${styles.tabBtn} ${isActive ? prod.tabActiveClass : ""}`}
                    onClick={() => setActiveIdx(idx)}
                  >
                    <IconComp size={14} color={isActive ? prod.accent : "#94A3B8"} />
                    <span>{prod.name}</span>
                    {isActive && (
                      <span
                        className={styles.tabDot}
                        style={{ backgroundColor: prod.accent, boxShadow: `0 0 6px ${prod.accent}` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* 3D Isometric Mockup Stage */}
            <div className={styles.mockupStage}>
              {/* Animated Amba Plateau Foundation Contour Mesh */}
              <div className={styles.plateauFoundation}>
                <svg viewBox="0 0 540 240" className={styles.plateauFoundationSvg} fill="none">
                  <polygon
                    points="40,190 270,230 500,190 270,150"
                    fill="rgba(79, 124, 255, 0.05)"
                    stroke="#27D3FF"
                    strokeWidth="1"
                    strokeDasharray="5 5"
                    opacity="0.35"
                  />
                  <polygon
                    points="90,155 270,190 450,155 270,120"
                    fill="rgba(79, 124, 255, 0.08)"
                    stroke="#4F7CFF"
                    strokeWidth="1.2"
                    opacity="0.55"
                  />
                  <polygon
                    points="140,120 270,150 400,120 270,90"
                    fill="rgba(39, 211, 255, 0.12)"
                    stroke="#27D3FF"
                    strokeWidth="1.8"
                    opacity="0.75"
                  />
                  <line x1="40" y1="190" x2="140" y2="120" stroke="#27D3FF" strokeWidth="1" opacity="0.3" />
                  <line x1="500" y1="190" x2="400" y2="120" stroke="#27D3FF" strokeWidth="1" opacity="0.3" />
                  <line x1="270" y1="230" x2="270" y2="150" stroke="#27D3FF" strokeWidth="1.8" opacity="0.7" />
                </svg>
                <div className={styles.plateauElevationTag}>
                  <span className={styles.geezTag}>አምባ</span>
                  <span>AMBBA ELEVATION • UNSHAKEABLE BASE</span>
                </div>
              </div>

              {/* Background Card (Rotated behind, clickable to bring to front) */}
              <div
                className={`${styles.angledCard} ${styles.backgroundCard}`}
                onClick={() => setActiveIdx(backgroundIdx)}
                title={`Click to focus ${backgroundProduct.name}`}
              >
                <div
                  className={styles.mockupWindow}
                  style={{
                    border: `1px solid ${backgroundProduct.borderGlow}`,
                    boxShadow: `0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 25px ${backgroundProduct.accentSoft}`,
                  }}
                >
                  <div className={styles.windowHeader}>
                    <div className={styles.headerTitle} style={{ color: backgroundProduct.accent }}>
                      <BackgroundIcon size={14} />
                      <span>{backgroundProduct.headerCategory}</span>
                      <span className={styles.headerSubtitle}>{backgroundProduct.headerTitle}</span>
                    </div>
                    <div className={styles.windowDots}>
                      <span className={styles.dot} />
                      <span className={styles.dot} />
                      <span className={styles.dot} />
                    </div>
                  </div>

                  <div className={styles.windowBody}>
                    <div className={styles.windowSidebar}>
                      <div
                        className={`${styles.navItem} ${styles.navItemActive}`}
                        style={{
                          background: backgroundProduct.accentSoft,
                          color: backgroundProduct.accent,
                        }}
                      >
                        <span
                          className={styles.navDot}
                          style={{ backgroundColor: backgroundProduct.accent }}
                        />{" "}
                        {backgroundProduct.sidebarActive}
                      </div>
                      {backgroundProduct.navItems.slice(1, 6).map((item, i) => (
                        <div key={i} className={styles.navItem}>
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className={styles.windowMain}>
                      <div className={styles.bannerImageContainer}>
                        <Image
                          src={backgroundProduct.bannerImg}
                          alt={backgroundProduct.bannerTitle}
                          fill
                          className={styles.bannerImg}
                          priority={false}
                        />
                        <div className={styles.bannerOverlay}>
                          <div className={styles.bannerWelcome}>Live Node</div>
                          <div className={styles.bannerProperty}>{backgroundProduct.bannerTitle}</div>
                        </div>
                      </div>

                      <div className={styles.roomOverviewBlock}>
                        <div className={styles.overviewTitle}>Telemetry Stream</div>
                        <div className={styles.roomStatsRow}>
                          {backgroundProduct.kpis.map((kpi, kIdx) => (
                            <div key={kIdx} className={styles.statBox}>
                              <div className={styles.statNumber} style={{ color: backgroundProduct.accent }}>
                                {kpi.num}
                              </div>
                              <div className={styles.statLabel}>{kpi.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Foreground Card (Active focused system in front) */}
              <div className={`${styles.angledCard} ${styles.foregroundCard}`}>
                <div
                  className={styles.mockupWindow}
                  style={{
                    border: `1px solid ${activeProduct.borderGlow}`,
                    boxShadow: `0 28px 60px -12px rgba(0, 0, 0, 0.8), 0 0 35px ${activeProduct.accentSoft}`,
                  }}
                >
                  <div className={styles.windowHeader}>
                    <div className={styles.headerTitle} style={{ color: activeProduct.accent }}>
                      <ActiveIcon size={14} />
                      <span>{activeProduct.headerCategory}</span>
                      <span className={styles.headerSubtitle}>{activeProduct.headerTitle}</span>
                    </div>
                    <div className={styles.windowDots}>
                      <span className={styles.dot} />
                      <span className={styles.dot} />
                      <span className={styles.dot} />
                    </div>
                  </div>

                  <div className={styles.windowBody}>
                    <div className={styles.windowSidebar}>
                      <div
                        className={`${styles.navItem} ${styles.navItemActive}`}
                        style={{
                          background: activeProduct.accentSoft,
                          color: activeProduct.accent,
                        }}
                      >
                        <span
                          className={styles.navDot}
                          style={{ backgroundColor: activeProduct.accent }}
                        />{" "}
                        {activeProduct.sidebarActive}
                      </div>
                      {activeProduct.navItems.slice(1, 7).map((item, i) => (
                        <div key={i} className={styles.navItem}>
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className={styles.windowMain}>
                      <div className={styles.bannerImageContainer}>
                        <Image
                          src={activeProduct.bannerImg}
                          alt={activeProduct.bannerTitle}
                          fill
                          className={styles.bannerImg}
                          priority
                        />
                        <div className={styles.bannerOverlay}>
                          <div className={styles.bannerWelcome}>Welcome Back</div>
                          <div className={styles.bannerProperty}>{activeProduct.bannerTitle}</div>
                        </div>
                      </div>

                      <div className={styles.roomOverviewBlock}>
                        <div className={styles.overviewTitle}>Operations Overview</div>
                        <div className={styles.roomStatsRow}>
                          {activeProduct.kpis.map((kpi, kIdx) => (
                            <div key={kIdx} className={styles.statBox}>
                              <div className={styles.statNumber} style={{ color: activeProduct.accent }}>
                                {kpi.num}
                              </div>
                              <div className={styles.statLabel}>{kpi.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Product Badges Deck across bottom (All 4 systems visible & clickable!) */}
              <div className={styles.floatingBadgeDeck}>
                {PRODUCTS.map((prod, idx) => {
                  const IconComp = prod.icon;
                  const isCurrent = idx === activeIdx;
                  return (
                    <div
                      key={prod.id}
                      className={`${styles.floatingBadgeItem} ${isCurrent ? styles.badgeActiveItem : ""}`}
                      style={{
                        borderColor: isCurrent ? prod.accent : "rgba(255, 255, 255, 0.1)",
                        boxShadow: isCurrent ? `0 0 16px ${prod.accentSoft}` : undefined,
                      }}
                      onClick={() => setActiveIdx(idx)}
                    >
                      <div
                        className={styles.badgeIconBox}
                        style={{
                          background: prod.accentSoft,
                          color: prod.accent,
                        }}
                      >
                        <IconComp size={15} />
                      </div>
                      <div>
                        <div className={styles.badgeTitle} style={{ color: isCurrent ? prod.accent : "#FFFFFF" }}>
                          {prod.badgeTitle}
                        </div>
                        <div className={styles.badgeSub}>{prod.badgeSub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
