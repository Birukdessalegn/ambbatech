import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Store, Package, Barcode, Truck, RefreshCw, DollarSign, ShieldCheck, BarChart3, AlertTriangle, Layers, Building2 } from "lucide-react";
import styles from "./StoreSystem.module.css";

export const metadata: Metadata = {
  title: "Store & Inventory Management System | AmbbaTech",
  description:
    "Centralized warehouse and retail inventory system: multi-branch stock synchronization, barcode SKU scanning, automated supplier purchase orders, and shrinkage auditing.",
};

export default function StoreSystemPage() {
  const modules = [
    {
      title: "Multi-Branch Warehouse Tracking",
      desc: "Live inventory visibility across your central warehouse, regional distribution hubs, and retail store branches.",
      icon: Building2,
    },
    {
      title: "Fast Barcode & SKU Scanning",
      desc: "Instant stock intake, stock takes, and cashier checkout using handheld wireless barcode and 2D QR scanners.",
      icon: Barcode,
    },
    {
      title: "Automated Re-Order Par Levels",
      desc: "Configure minimum safety stock thresholds per item; the system automatically generates supplier purchase drafts.",
      icon: RefreshCw,
    },
    {
      title: "Supplier POs & GRN Matching",
      desc: "Three-way matching between Purchase Orders, supplier delivery invoices, and Goods Received Notes (GRN).",
      icon: Package,
    },
    {
      title: "Inter-Branch Stock Transfers",
      desc: "Formal dispatch notes, transfer requisitions, in-transit stock accounting, and receiving branch verification.",
      icon: Truck,
    },
    {
      title: "High-Volume Retail POS",
      desc: "Rapid touch & barcode cashier terminals supporting split payments, digital receipts, credit accounts, and loyalty.",
      icon: DollarSign,
    },
    {
      title: "Shrinkage & Loss Prevention",
      desc: "Spot-check cycle counts, damaged goods disposal workflows, and variance tracking against expected system balances.",
      icon: AlertTriangle,
    },
    {
      title: "FIFO & Weighted Stock Valuation",
      desc: "Accurate cost-of-goods-sold (COGS) calculations for accountants and tax auditors using validated inventory costing.",
      icon: Layers,
    },
    {
      title: "Role-Based Cashier Balancing",
      desc: "Blind float reconciliation, shift handover summaries, and multi-till discrepancy logs.",
      icon: ShieldCheck,
    },
    {
      title: "Executive Margin & Sales Telemetry",
      desc: "Hourly store revenue velocity, dead-stock warnings, highest-margin category breakdowns, and consolidated P&L.",
      icon: BarChart3,
    },
  ];

  const workflowSteps = [
    { step: "01", name: "Inbound Intake", desc: "Goods received against PO with digital barcode scanning and GRN sign-off." },
    { step: "02", name: "Multi-Store Allocation", desc: "Stock transferred to regional branches or shelved on retail floor." },
    { step: "03", name: "POS Ring & Deduction", desc: "Item sold at terminal; stock level decremented in central database immediately." },
    { step: "04", name: "Par Level Warning", desc: "Inventory crosses safety par; system flags automated replenishment trigger." },
    { step: "05", name: "Supplier Re-order", desc: "Purchase order automatically routed to verified wholesale vendor." },
    { step: "06", name: "Consolidated P&L", desc: "Margins and store revenue posted to general ledger without manual spreadsheets." },
  ];

  return (
    <div className={styles.page}>
      {/* Product Hero */}
      <section className={`section section-dark ${styles.storeHero}`}>
        <div className="bg-radial-glow" />
        <div className="container">
          <div className={styles.heroContent}>
            <div className="pill-badge pill-badge-blue" style={{ background: "rgba(139, 92, 246, 0.12)", color: "#A78BFA", borderColor: "rgba(139, 92, 246, 0.3)" }}>
              <Store size={14} /> Retail &amp; Logistics Platform
            </div>

            <h1 className={styles.heroTitle}>
              Store &amp; Inventory operations.<br />
              <span className={styles.purpleText}>One synchronized platform.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Built for wholesalers, multi-branch retailers, supermarkets, and distribution warehouses. Eliminate stockouts, stop inventory shrinkage, and connect your cashiers to your central supply chain.
            </p>

            <div className={styles.heroActions}>
              <Link href="/request-demo?product=store" className="btn btn-primary" style={{ backgroundColor: "#8B5CF6", borderColor: "#8B5CF6", boxShadow: "0 4px 14px rgba(139, 92, 246, 0.35)" }}>
                Request Store Demo <ArrowRight size={16} />
              </Link>
              <Link href="#workflow" className="btn btn-secondary-dark">
                View Logistics Flow
              </Link>
            </div>
          </div>

          {/* Large Hero UI Composition */}
          <div className={styles.heroMockupContainer}>
            <div className="browser-frame">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="browser-dot browser-dot-red" />
                  <span className="browser-dot browser-dot-yellow" />
                  <span className="browser-dot browser-dot-green" />
                </div>
                <div className="browser-address">
                  <span>https://</span>
                  <span>store.ambbatech.com/live/warehouse-matrix</span>
                </div>
                <div className={styles.storeLiveBadge}>
                  <span className={styles.purpleBlink} /> Multi-Store Sync Active • 4 Branches
                </div>
              </div>

              <div className={styles.mockupBody}>
                {/* Metric Summary */}
                <div className={styles.kpiRow}>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Monitored SKUs</span>
                    <span className={styles.kpiVal}>18,420 Items</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Central Warehouse</span>
                    <span className={styles.kpiValPurple}>98.2% In-Stock</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Today&apos;s Store POS</span>
                    <span className={styles.kpiVal}>$24,680 Gross</span>
                  </div>
                  <div className={styles.kpiItem}>
                    <span className={styles.kpiLabel}>Active Transfers</span>
                    <span className={styles.kpiValPurple}>3 In-Transit</span>
                  </div>
                </div>

                {/* Simulated Store Grid */}
                <div className={styles.storeGrid}>
                  <div className={styles.panelCard}>
                    <div className={styles.panelTitle}>Branch Inventory Synchronization</div>
                    <div className={styles.branchList}>
                      <div className={styles.branchRow}>
                        <div>
                          <strong>HQ Central Warehouse (Kality)</strong>
                          <span>12,400 Units • Primary Receiving Bay</span>
                        </div>
                        <span className={styles.statusSynced}>Live Master</span>
                      </div>
                      <div className={styles.branchRow}>
                        <div>
                          <strong>Bole Branch Retail Store</strong>
                          <span>2,840 Units • Barcode Checkout Active</span>
                        </div>
                        <span className={styles.statusSynced}>Synced</span>
                      </div>
                      <div className={styles.branchRow}>
                        <div>
                          <strong>Piazza Branch Store</strong>
                          <span>1,920 Units • Automated PO Re-order Dispatched</span>
                        </div>
                        <span className={styles.statusReorder}>PO Active</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.panelCard}>
                    <div className={styles.panelTitle}>Barcode Logistics &amp; Inbound Dispatch</div>
                    <div className={styles.dispatchStats}>
                      <div className={styles.dispatchItem}>
                        <div>
                          <strong>GRN-2024-884 • Verified</strong>
                          <span>Supplier: National Distro Ltd (320 cartons)</span>
                        </div>
                        <span className={styles.badgePurple}>Received</span>
                      </div>
                      <div className={styles.dispatchItem}>
                        <div>
                          <strong>Transfer TR-402 ➔ Bole Branch</strong>
                          <span>50x Premium Stock Units (In-Transit)</span>
                        </div>
                        <span className={styles.badgePurple}>In-Transit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className={`section section-dark-alt ${styles.modulesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className="pill-badge pill-badge-blue" style={{ background: "rgba(139, 92, 246, 0.12)", color: "#A78BFA", borderColor: "rgba(139, 92, 246, 0.3)" }}>
              Full Logistics &amp; POS Suite
            </div>
            <h2 className={styles.sectionTitle}>Engineered for scale and margin control</h2>
            <p className={styles.sectionSubtitle}>
              From small retail stores to sprawling multi-warehouse operations, AmbbaTech gives you total operational control over inventory, cashiers, and supplier replenishment.
            </p>
          </div>

          <div className={styles.modulesGrid}>
            {modules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className={styles.moduleCard}>
                  <div className={styles.moduleIconWrap}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.moduleTitle}>{m.title}</h3>
                  <p className={styles.moduleDesc}>{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className={`section section-light ${styles.workflowSection}`} id="workflow">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.workflowTag}>Supply Chain &amp; Store Flow</div>
            <h2 className={styles.workflowTitle}>The Store Management Workflow</h2>
            <p className={styles.workflowSubtitle}>
              Inbound GRN ➔ Multi-Store Allocation ➔ POS Checkout ➔ Par Level Trigger ➔ Supplier PO ➔ Consolidated Margin
            </p>
          </div>

          <div className={styles.flowTimeline}>
            {workflowSteps.map((wf, idx) => (
              <div key={wf.step} className={styles.flowCard}>
                <div className={styles.flowStepNum}>{wf.step}</div>
                <h4 className={styles.flowStepName}>{wf.name}</h4>
                <p className={styles.flowStepDesc}>{wf.desc}</p>
                {idx < workflowSteps.length - 1 && (
                  <div className={styles.flowArrow}>➔</div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.workflowCta}>
            <h3>Ready to optimize your stores and inventory?</h3>
            <p>Schedule a customized walkthrough to explore multi-branch stock transfers, barcode POS, and automated replenishment.</p>
            <Link href="/request-demo?product=store" className="btn btn-primary" style={{ backgroundColor: "#8B5CF6", borderColor: "#8B5CF6" }}>
              Schedule Store Walkthrough <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
