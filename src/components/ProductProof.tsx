"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Hotel, Wine, Pill, Store } from "lucide-react";
import styles from "./ProductProof.module.css";

export default function ProductProof() {
  const hotelCol1 = [
    "Front Desk & Reservations",
    "Housekeeping & Turnaround",
    "Dining POS & Room Folios",
    "Central Inventory & Purchasing",
  ];

  const hotelCol2 = [
    "Night Audit & Revenue P&L",
    "Guest Billing & Invoicing",
    "Staff Shifts & Attendance",
    "Role-Based Security (RBAC)",
  ];

  const clubCol1 = [
    "High-Speed Handheld POS",
    "Live Floor & Table Map",
    "Kitchen & Bar KOT Routing",
    "Beverage & Bar Inventory",
  ];

  const clubCol2 = [
    "Automated Stock Depletion",
    "Cashier Shift Balancing",
    "Item Margin & Sales Reports",
    "Role-Based Security (RBAC)",
  ];

  const pharmaCol1 = [
    "Drug Batch & Expiry Tracking",
    "Prescription Dispensing Log",
    "Fast Over-The-Counter POS",
    "Regulated Medicine Audit",
  ];

  const pharmaCol2 = [
    "Wholesale Supplier Re-orders",
    "Generic Alternative Prompts",
    "Insurance & Copay Billing",
    "Shortage & Expiry Alerts",
  ];

  const storeCol1 = [
    "Multi-Branch Warehouse Stock",
    "Barcode & SKU Fast Scanning",
    "Automated Re-order Par Levels",
    "Supplier PO & GRN Inbound",
  ];

  const storeCol2 = [
    "Inter-Store Stock Transfers",
    "Shrinkage & Audit Controls",
    "Daily Margin & P&L Telemetry",
    "Cashier Till Reconciliation",
  ];

  return (
    <section className={`section ${styles.flagshipSection}`} id="products">
      <div className="container">
        {/* Left-Aligned Header */}
        <div className={styles.sectionHeader} data-reveal>
          <div className="section-eyebrow">OUR CORE SOFTWARE SYSTEMS</div>
          <h2 className={styles.title}>
            Engineered systems for <br />
            modern businesses.
          </h2>
          <p className={styles.subtitle}>
            Four specialized, enterprise-grade platforms built around the operational reality of hospitality, nightlife, pharmaceuticals, and retail store logistics.
          </p>
        </div>

        {/* 4 Systems Grid (2x2) */}
        <div className={styles.cardsGrid}>
          {/* Card 1: Hotel Management System */}
          <div className={`${styles.flagshipCard} ${styles.kasinaCard}`} data-reveal data-reveal-delay="1">
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconKasina}>
                  <Hotel size={22} color="#F59E0B" />
                </div>
                <div>
                  <h3 className={styles.productName}>HOTEL</h3>
                  <span className={styles.productTypeKasina}>Management System</span>
                </div>
              </div>

              <p className={styles.productTagline}>
                Complete hotel operations, from front desk check-in to automated night audit.
              </p>

              <div className={styles.featureCols}>
                <ul className={styles.featureList}>
                  {hotelCol1.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkKasina} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className={styles.featureList}>
                  {hotelCol2.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkKasina} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/products/hotel-management-system" className={styles.learnMoreKasina}>
                Learn more <ArrowRight size={15} />
              </Link>
            </div>

            {/* Embedded Mini Preview */}
            <div className={styles.previewWindowKasina}>
              <div className={styles.previewTopBar}>
                <span className={styles.previewTitle}>Hotel PMS</span>
                <div className={styles.miniDots}>
                  <span /><span /><span />
                </div>
              </div>
              <div className={styles.previewImageContainer}>
                <Image
                  src="/images/kasina-preview.jpg"
                  alt="Hotel Management Dashboard"
                  fill
                  className={styles.previewImg}
                />
                <div className={styles.previewOverlayKasina}>
                  <div className={styles.overlayTag}>PMS Active</div>
                  <div className={styles.overlayMetric}>94 Occupied • 128 Rooms</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Club & Restaurant Management System */}
          <div className={`${styles.flagshipCard} ${styles.oakCard}`} data-reveal data-reveal-delay="2">
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconOak}>
                  <Wine size={22} color="#10B981" />
                </div>
                <div>
                  <h3 className={styles.productName}>CLUB &amp; RESTAURANT</h3>
                  <span className={styles.productTypeOak}>Management System</span>
                </div>
              </div>

              <p className={styles.productTagline}>
                High-volume floor POS, mobile waitstaff ordering, kitchen routing &amp; bar control.
              </p>

              <div className={styles.featureCols}>
                <ul className={styles.featureList}>
                  {clubCol1.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkOak} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className={styles.featureList}>
                  {clubCol2.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkOak} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/products/club-restaurant-management-system" className={styles.learnMoreOak}>
                Learn more <ArrowRight size={15} />
              </Link>
            </div>

            {/* Embedded Mini Preview */}
            <div className={styles.previewWindowOak}>
              <div className={styles.previewTopBar}>
                <span className={styles.previewTitle}>Venue &amp; F&amp;B POS</span>
                <div className={styles.miniDots}>
                  <span /><span /><span />
                </div>
              </div>
              <div className={styles.previewImageContainer}>
                <Image
                  src="/images/oak-preview.jpg"
                  alt="Club & Restaurant POS Dashboard"
                  fill
                  className={styles.previewImg}
                />
                <div className={styles.previewOverlayOak}>
                  <div className={styles.overlayTagOak}>Venue Active</div>
                  <div className={styles.overlayMetric}>38 Tables Open • Fast KOT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Pharmaceutical Management System */}
          <div className={`${styles.flagshipCard} ${styles.pharmaCard}`} data-reveal data-reveal-delay="3">
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconPharma}>
                  <Pill size={22} color="#06B6D4" />
                </div>
                <div>
                  <h3 className={styles.productName}>PHARMACEUTICAL</h3>
                  <span className={styles.productTypePharma}>Management System</span>
                </div>
              </div>

              <p className={styles.productTagline}>
                Complete dispensary operations, drug batch control, and regulatory compliance.
              </p>

              <div className={styles.featureCols}>
                <ul className={styles.featureList}>
                  {pharmaCol1.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkPharma} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className={styles.featureList}>
                  {pharmaCol2.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkPharma} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/products/pharmaceutical-management-system" className={styles.learnMorePharma}>
                Learn more <ArrowRight size={15} />
              </Link>
            </div>

            {/* Mini Simulated Pharma Dashboard View */}
            <div className={styles.previewWindowPharma}>
              <div className={styles.previewTopBar}>
                <span className={styles.previewTitlePharma}>Pharmacy &amp; Rx Core</span>
                <div className={styles.miniDots}>
                  <span /><span /><span />
                </div>
              </div>
              <div className={styles.simulatedPharmaBody}>
                <div className={styles.simStatRow}>
                  <div className={styles.simStatItem}>
                    <span className={styles.simStatLbl}>Rx Filled Today</span>
                    <strong className={styles.simStatValCyan}>142</strong>
                  </div>
                  <div className={styles.simStatItem}>
                    <span className={styles.simStatLbl}>Near Expiry Alert</span>
                    <strong className={styles.simStatValWarn}>0 Shortages</strong>
                  </div>
                </div>
                <div className={styles.simListPharma}>
                  <div className={styles.simListItem}>
                    <div>
                      <div className={styles.simDrugName}>Amoxicillin 500mg</div>
                      <div className={styles.simDrugSub}>Batch #B-914 • Exp 11/2028</div>
                    </div>
                    <span className={styles.simBadgeGreen}>Verified</span>
                  </div>
                  <div className={styles.simListItem}>
                    <div>
                      <div className={styles.simDrugName}>Metformin 850mg</div>
                      <div className={styles.simDrugSub}>Batch #B-883 • Stock: 420 pk</div>
                    </div>
                    <span className={styles.simBadgeGreen}>Dispensed</span>
                  </div>
                </div>
                <div className={styles.previewOverlayPharma}>
                  <div className={styles.overlayTagPharma}>FDA &amp; Rx Compliant</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Store Management System */}
          <div className={`${styles.flagshipCard} ${styles.storeCard}`} data-reveal data-reveal-delay="4">
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconStore}>
                  <Store size={22} color="#A78BFA" />
                </div>
                <div>
                  <h3 className={styles.productName}>STORE &amp; INVENTORY</h3>
                  <span className={styles.productTypeStore}>Management System</span>
                </div>
              </div>

              <p className={styles.productTagline}>
                Multi-branch inventory control, barcode logistics, and supplier purchasing automation.
              </p>

              <div className={styles.featureCols}>
                <ul className={styles.featureList}>
                  {storeCol1.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkStore} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className={styles.featureList}>
                  {storeCol2.map((item) => (
                    <li key={item} className={styles.featureItem}>
                      <CheckCircle2 size={15} className={styles.checkStore} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/products/store-management-system" className={styles.learnMoreStore}>
                Learn more <ArrowRight size={15} />
              </Link>
            </div>

            {/* Mini Simulated Store Dashboard View */}
            <div className={styles.previewWindowStore}>
              <div className={styles.previewTopBar}>
                <span className={styles.previewTitleStore}>Store Warehouse Matrix</span>
                <div className={styles.miniDots}>
                  <span /><span /><span />
                </div>
              </div>
              <div className={styles.simulatedStoreBody}>
                <div className={styles.simStatRow}>
                  <div className={styles.simStatItem}>
                    <span className={styles.simStatLbl}>SKUs Monitored</span>
                    <strong className={styles.simStatValPurple}>1,840</strong>
                  </div>
                  <div className={styles.simStatItem}>
                    <span className={styles.simStatLbl}>Branches Synced</span>
                    <strong className={styles.simStatValPurple}>4 Stores</strong>
                  </div>
                </div>
                <div className={styles.simListPharma}>
                  <div className={styles.simListItem}>
                    <div>
                      <div className={styles.simDrugName}>Central Warehouse (HQ)</div>
                      <div className={styles.simDrugSub}>Barcode Scanner Live • Dispatch Queue</div>
                    </div>
                    <span className={styles.simBadgePurple}>Synced</span>
                  </div>
                  <div className={styles.simListItem}>
                    <div>
                      <div className={styles.simDrugName}>Branch Store 02 (Bole)</div>
                      <div className={styles.simDrugSub}>Auto-PO generated: Par level maintained</div>
                    </div>
                    <span className={styles.simBadgePurple}>Re-ordered</span>
                  </div>
                </div>
                <div className={styles.previewOverlayStore}>
                  <div className={styles.overlayTagStore}>Live Multi-Store Inventory</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
