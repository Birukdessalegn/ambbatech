"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Hotel, Wine, Pill, Store, Cpu, CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import styles from "./RequestDemo.module.css";

type ProductKey = "hotel" | "club" | "pharmaceutical" | "store" | "custom";

function RequestDemoForm() {
  const searchParams = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<ProductKey>("hotel");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessType: "Hotel / Resort",
    message: "",
  });

  useEffect(() => {
    const p = searchParams.get("product");
    if (p === "kasina" || p === "hotel") {
      setSelectedProduct("hotel");
      setFormData((prev) => ({ ...prev, businessType: "Hotel / Resort / Lodge" }));
    } else if (p === "oak" || p === "club") {
      setSelectedProduct("club");
      setFormData((prev) => ({ ...prev, businessType: "Club / Bar / Restaurant" }));
    } else if (p === "pharmaceutical" || p === "pharma") {
      setSelectedProduct("pharmaceutical");
      setFormData((prev) => ({ ...prev, businessType: "Pharmacy / Dispensary / Wholesaler" }));
    } else if (p === "store" || p === "retail") {
      setSelectedProduct("store");
      setFormData((prev) => ({ ...prev, businessType: "Retail Store / Supermarket / Warehouse" }));
    } else if (p === "custom") {
      setSelectedProduct("custom");
      setFormData((prev) => ({ ...prev, businessType: "Enterprise / Custom Architecture" }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getProductDisplayName = (key: ProductKey) => {
    switch (key) {
      case "hotel":
        return "Hotel Management System";
      case "club":
        return "Club & Restaurant Management System";
      case "pharmaceutical":
        return "Pharmaceutical Management System";
      case "store":
        return "Store & Inventory Management System";
      case "custom":
        return "Custom Enterprise Architecture";
    }
  };

  const getSubmitBtnClass = () => {
    if (selectedProduct === "hotel") return "btn-kasina";
    if (selectedProduct === "club") return "btn-oak";
    return "btn-primary";
  };

  const getSubmitBtnStyle = () => {
    if (selectedProduct === "pharmaceutical") return { backgroundColor: "#06B6D4", borderColor: "#06B6D4", color: "#0B1020" };
    if (selectedProduct === "store") return { backgroundColor: "#8B5CF6", borderColor: "#8B5CF6", color: "#FFFFFF" };
    return undefined;
  };

  return (
    <div className={styles.formContainer}>
      {submitted ? (
        <div className={styles.successCard}>
          <div className={styles.successIcon}>
            <CheckCircle2 size={44} />
          </div>
          <h2 className={styles.successTitle}>Thank you! Your request has been received.</h2>
          <p className={styles.successMessage}>
            We have queued your demo walkthrough for{" "}
            <strong>{getProductDisplayName(selectedProduct)}</strong>. An AmbbaTech systems architect will contact you at <strong>{formData.email || "your email"}</strong> within 24 hours to schedule your session.
          </p>

          <div className={styles.nextStepsBox}>
            <h4>What happens next?</h4>
            <ul>
              <li>1. We review your property, outlet count, or warehouse scope.</li>
              <li>2. We prepare a live sandbox demo pre-loaded with relevant operational workflows.</li>
              <li>3. We review integrations, hardware terminals, POS receipt printers, and rollout timelines.</li>
            </ul>
          </div>

          <button onClick={() => setSubmitted(false)} className="btn btn-secondary-dark" style={{ marginTop: "20px" }}>
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Product Selection Tabs */}
          <div className={styles.productSelectorGroup}>
            <label className={styles.label}>Select Operational System or Solution:</label>
            <div className={styles.selectorGrid}>
              <button
                type="button"
                className={`${styles.selectCard} ${selectedProduct === "hotel" ? styles.selectKasinaActive : ""}`}
                onClick={() => {
                  setSelectedProduct("hotel");
                  setFormData({ ...formData, businessType: "Hotel / Resort / Lodge" });
                }}
              >
                <Hotel size={20} className={styles.cardIconGold} />
                <div className={styles.cardText}>
                  <strong>Hotel System</strong>
                  <span>Hospitality PMS</span>
                </div>
              </button>

              <button
                type="button"
                className={`${styles.selectCard} ${selectedProduct === "club" ? styles.selectOakActive : ""}`}
                onClick={() => {
                  setSelectedProduct("club");
                  setFormData({ ...formData, businessType: "Club / Bar / Restaurant" });
                }}
              >
                <Wine size={20} className={styles.cardIconEmerald} />
                <div className={styles.cardText}>
                  <strong>Club &amp; Restaurant</strong>
                  <span>Venue &amp; Dining POS</span>
                </div>
              </button>

              <button
                type="button"
                className={`${styles.selectCard} ${selectedProduct === "pharmaceutical" ? styles.selectPharmaActive : ""}`}
                onClick={() => {
                  setSelectedProduct("pharmaceutical");
                  setFormData({ ...formData, businessType: "Pharmacy / Dispensary / Wholesaler" });
                }}
              >
                <Pill size={20} className={styles.cardIconCyan} />
                <div className={styles.cardText}>
                  <strong>Pharmaceutical</strong>
                  <span>Dispensary &amp; Expiry</span>
                </div>
              </button>

              <button
                type="button"
                className={`${styles.selectCard} ${selectedProduct === "store" ? styles.selectStoreActive : ""}`}
                onClick={() => {
                  setSelectedProduct("store");
                  setFormData({ ...formData, businessType: "Retail Store / Supermarket / Warehouse" });
                }}
              >
                <Store size={20} className={styles.cardIconPurple} />
                <div className={styles.cardText}>
                  <strong>Store System</strong>
                  <span>Inventory &amp; Retail POS</span>
                </div>
              </button>

              <button
                type="button"
                className={`${styles.selectCard} ${selectedProduct === "custom" ? styles.selectCustomActive : ""}`}
                onClick={() => {
                  setSelectedProduct("custom");
                  setFormData({ ...formData, businessType: "Enterprise / Custom Architecture" });
                }}
              >
                <Cpu size={20} className={styles.cardIconBlue} />
                <div className={styles.cardText}>
                  <strong>Custom Solution</strong>
                  <span>Bespoke Engineering</span>
                </div>
              </button>
            </div>
          </div>

          {/* Form Inputs Grid */}
          <div className={styles.inputGrid}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Dawit Haile"
                className={styles.input}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Company / Property / Business Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Skyline Grand Hotel, MedCare Pharmacy, Prime Retail"
                className={styles.input}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Work Email Address *</label>
              <input
                type="email"
                required
                placeholder="dawit@company.com"
                className={styles.input}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Phone / WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="+251 9..."
                className={styles.input}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className={styles.fieldGroupFull}>
              <label className={styles.label}>Type of Business &amp; Scale</label>
              <input
                type="text"
                placeholder="e.g. 80-Room Hotel, 3 Pharmacy Branches, Supermarket Chain"
                className={styles.input}
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              />
            </div>

            <div className={styles.fieldGroupFull}>
              <label className={styles.label}>What operational challenges are you looking to solve?</label>
              <textarea
                rows={4}
                placeholder="Tell us about your current software, branch count, stock control challenges, or key bottlenecks..."
                className={styles.textarea}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className={`btn ${getSubmitBtnClass()} ${styles.submitBtn}`}
            style={getSubmitBtnStyle()}
          >
            Request Demo Walkthrough <ArrowRight size={16} />
          </button>
        </form>
      )}

      {/* Side Reassurance Strip */}
      <div className={styles.sideReassurance}>
        <div className={styles.reassureItem}>
          <ShieldCheck size={20} className={styles.reassureIcon} />
          <div>
            <strong>Enterprise Confidentiality</strong>
            <p>All operational data and discussions remain strictly private under standard NDA.</p>
          </div>
        </div>

        <div className={styles.reassureItem}>
          <Clock size={20} className={styles.reassureIcon} />
          <div>
            <strong>Rapid 24-Hour Response</strong>
            <p>You speak directly with systems engineers, not non-technical sales agents.</p>
          </div>
        </div>

        <div className={styles.reassureItem}>
          <MapPin size={20} className={styles.reassureIcon} />
          <div>
            <strong>On-Site in Addis Ababa</strong>
            <p>In-person boardroom demonstrations available across Addis Ababa and regional hubs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RequestDemoPage() {
  return (
    <div className={styles.page}>
      <section className={`section section-dark ${styles.heroSection}`}>
        <div className="bg-radial-glow" />
        <div className="container">
          <div className={styles.header}>
            <div className="pill-badge pill-badge-blue">Guided Walkthrough</div>
            <h1 className={styles.title}>
              See how AmbbaTech software <span className={styles.blueText}>fits your business.</span>
            </h1>
            <p className={styles.subtitle}>
              Schedule a personalized 30-minute demonstration with our software engineers. We will demonstrate live operational workflows mapped to your actual business requirements.
            </p>
          </div>

          <Suspense fallback={<div style={{ textAlign: "center", color: "#94A3B8", padding: "40px" }}>Loading demo scheduler...</div>}>
            <RequestDemoForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
