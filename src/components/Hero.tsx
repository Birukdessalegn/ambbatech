"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Compass } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
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

          {/* Right Column: Dual 3D Angled Mockup Composition Elevated on Plateau */}
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

            {/* Card 1: KASINA HMS (Angled, Left-Front) */}
            <div className={`${styles.angledCard} ${styles.kasinaAngledCard}`}>
              <div className={styles.mockupWindow}>
                {/* Window Top Bar */}
                <div className={styles.windowHeader}>
                  <div className={styles.headerTitleKasina}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5">
                      <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" />
                    </svg>
                    <span>HOTEL</span>
                    <span className={styles.headerSubtitle}>MANAGEMENT SYSTEM</span>
                  </div>
                  <div className={styles.windowDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                </div>

                {/* Window Body: Sidebar + Main Area */}
                <div className={styles.windowBody}>
                  {/* Left Sidebar */}
                  <div className={styles.windowSidebar}>
                    <div className={`${styles.navItem} ${styles.navItemKasinaActive}`}>
                      <span className={styles.navDot} /> Dashboard
                    </div>
                    <div className={styles.navItem}>Reservations</div>
                    <div className={styles.navItem}>Rooms</div>
                    <div className={styles.navItem}>Housekeeping</div>
                    <div className={styles.navItem}>POS</div>
                    <div className={styles.navItem}>Kitchen & Bar</div>
                    <div className={styles.navItem}>Inventory</div>
                    <div className={styles.navItem}>Purchasing</div>
                  </div>

                  {/* Main Preview Area */}
                  <div className={styles.windowMain}>
                    {/* Hero Room Photo Banner */}
                    <div className={styles.bannerImageContainer}>
                      <Image
                        src="/images/kasina-preview.jpg"
                        alt="Kasina Hotel Suite"
                        fill
                        className={styles.bannerImg}
                        priority
                      />
                      <div className={styles.bannerOverlay}>
                        <div className={styles.bannerWelcome}>Welcome Back</div>
                        <div className={styles.bannerProperty}>Hotel Management System</div>
                      </div>
                    </div>

                    {/* Room Overview Metric Row */}
                    <div className={styles.roomOverviewBlock}>
                      <div className={styles.overviewTitle}>Room Overview</div>
                      <div className={styles.roomStatsRow}>
                        <div className={styles.statBox}>
                          <div className={styles.statNumber}>128</div>
                          <div className={styles.statLabel}>Total Rooms</div>
                        </div>
                        <div className={styles.statBox}>
                          <div className={styles.statNumber}>94</div>
                          <div className={styles.statLabel}>Occupied</div>
                        </div>
                        <div className={styles.statBox}>
                          <div className={styles.statNumber}>34</div>
                          <div className={styles.statLabel}>Available</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Product Badge */}
              <div className={`${styles.floatingProductBadge} ${styles.kasinaBadge}`}>
                <div className={styles.badgeIconKasina}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.2">
                    <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.badgeTitle}>Hotel PMS</div>
                  <div className={styles.badgeSub}>Hotel Management System</div>
                </div>
              </div>
            </div>

            {/* Card 2: CLUB & RESTAURANT SYSTEM (Angled, Right-Offset) */}
            <div className={`${styles.angledCard} ${styles.oakAngledCard}`}>
              <div className={styles.mockupWindowOak}>
                {/* Window Top Bar */}
                <div className={styles.windowHeader}>
                  <div className={styles.headerTitleOak}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5">
                      <path d="M12 3a7 7 0 0 0-7 7c0 4 7 11 7 11s7-7 7-11a7 7 0 0 0-7-7z" />
                    </svg>
                    <span>CLUB &amp; RESTAURANT</span>
                    <span className={styles.headerSubtitle}>MANAGEMENT SYSTEM</span>
                  </div>
                  <div className={styles.windowDots}>
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                    <span className={styles.dot} />
                  </div>
                </div>

                {/* Window Body */}
                <div className={styles.windowBody}>
                  <div className={styles.windowSidebar}>
                    <div className={`${styles.navItem} ${styles.navItemOakActive}`}>
                      <span className={styles.navDotOak} /> Dashboard
                    </div>
                    <div className={styles.navItem}>POS</div>
                    <div className={styles.navItem}>Tables</div>
                    <div className={styles.navItem}>Orders</div>
                    <div className={styles.navItem}>Kitchen</div>
                    <div className={styles.navItem}>Bar</div>
                    <div className={styles.navItem}>Inventory</div>
                    <div className={styles.navItem}>Purchasing</div>
                    <div className={styles.navItem}>Finance</div>
                    <div className={styles.navItem}>HR</div>
                    <div className={styles.navItem}>Reports</div>
                  </div>

                  <div className={styles.windowMain}>
                    <div className={styles.bannerImageContainer}>
                      <Image
                        src="/images/oak-preview.jpg"
                        alt="The Oak Club Lounge"
                        fill
                        className={styles.bannerImg}
                        priority
                      />
                      <div className={styles.bannerOverlay}>
                        <div className={styles.bannerWelcome}>Welcome Back</div>
                        <div className={styles.bannerProperty}>Club &amp; Restaurant Platform</div>
                      </div>
                    </div>

                    <div className={styles.roomOverviewBlock}>
                      <div className={styles.overviewTitle}>Today&apos;s Overview</div>
                      <div className={styles.roomStatsRow}>
                        <div className={styles.statBox}>
                          <div className={styles.statIconWrap}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                              <rect x="2" y="5" width="20" height="14" rx="2" />
                            </svg>
                          </div>
                          <div className={styles.statLabel}>Total Orders</div>
                        </div>
                        <div className={styles.statBox}>
                          <div className={styles.statIconWrap}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                            </svg>
                          </div>
                          <div className={styles.statLabel}>Active Tables</div>
                        </div>
                        <div className={styles.statBox}>
                          <div className={styles.statIconWrap}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                            </svg>
                          </div>
                          <div className={styles.statLabel}>Staff On Duty</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Product Badge */}
              <div className={`${styles.floatingProductBadge} ${styles.oakBadge}`}>
                <div className={styles.badgeIconOak}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.2">
                    <path d="M12 3a7 7 0 0 0-7 7c0 4 7 11 7 11s7-7 7-11a7 7 0 0 0-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className={styles.badgeTitle}>Club &amp; Restaurant</div>
                  <div className={styles.badgeSub}>Venue Management System</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
