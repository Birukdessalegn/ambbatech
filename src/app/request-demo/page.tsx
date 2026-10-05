"use client";

import { useState } from "react";
import { Hotel, Wine, Cpu, CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import styles from "./RequestDemo.module.css";

export default function RequestDemoPage() {
  const [selectedProduct, setSelectedProduct] = useState<"kasina" | "oak" | "custom">("kasina");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessType: "Hotel / Resort",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

          <div className={styles.formContainer}>
            {submitted ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={44} />
                </div>
                <h2 className={styles.successTitle}>Thank you! Your request has been received.</h2>
                <p className={styles.successMessage}>
                  We have queued your demo request for{" "}
                  <strong>
                    {selectedProduct === "kasina"
                      ? "Kasina HMS"
                      : selectedProduct === "oak"
                      ? "THE OAK CLUB"
                      : "Custom Business Architecture"}
                  </strong>
                  . An AmbbaTech technical director will contact you at <strong>{formData.email || "your email"}</strong> within 24 hours to confirm your scheduled slot.
                </p>

                <div className={styles.nextStepsBox}>
                  <h4>What happens next?</h4>
                  <ul>
                    <li>1. We review your venue or business requirements.</li>
                    <li>2. We prepare a live sandbox demo pre-loaded with relevant operational data.</li>
                    <li>3. We answer all questions regarding integrations, hardware terminals, and rollout timelines.</li>
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
                  <label className={styles.label}>Select Product or Solution Interest:</label>
                  <div className={styles.selectorGrid}>
                    <button
                      type="button"
                      className={`${styles.selectCard} ${selectedProduct === "kasina" ? styles.selectKasinaActive : ""}`}
                      onClick={() => {
                        setSelectedProduct("kasina");
                        setFormData({ ...formData, businessType: "Hotel / Resort / Lodge" });
                      }}
                    >
                      <Hotel size={20} className={styles.cardIconGold} />
                      <div className={styles.cardText}>
                        <strong>Kasina HMS</strong>
                        <span>Hotel Management</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className={`${styles.selectCard} ${selectedProduct === "oak" ? styles.selectOakActive : ""}`}
                      onClick={() => {
                        setSelectedProduct("oak");
                        setFormData({ ...formData, businessType: "Club / Bar / Restaurant" });
                      }}
                    >
                      <Wine size={20} className={styles.cardIconEmerald} />
                      <div className={styles.cardText}>
                        <strong>THE OAK CLUB</strong>
                        <span>Club & Venue System</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      className={`${styles.selectCard} ${selectedProduct === "custom" ? styles.selectCustomActive : ""}`}
                      onClick={() => {
                        setSelectedProduct("custom");
                        setFormData({ ...formData, businessType: "Enterprise / Custom Workflow" });
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
                    <label className={styles.label}>Company / Property Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Skyline Luxury Hotel or Lounge"
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
                    <label className={styles.label}>Type of Business</label>
                    <input
                      type="text"
                      placeholder="e.g. 80-Room Hotel, Nightclub, Restaurant Group"
                      className={styles.input}
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    />
                  </div>

                  <div className={styles.fieldGroupFull}>
                    <label className={styles.label}>What operational challenges are you looking to solve?</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your current tools, team size, outlets, or key bottlenecks..."
                      className={styles.textarea}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                <button type="submit" className={`btn ${selectedProduct === "kasina" ? "btn-kasina" : selectedProduct === "oak" ? "btn-oak" : "btn-primary"} ${styles.submitBtn}`}>
                  Request Demo Confirmation <ArrowRight size={16} />
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
        </div>
      </section>
    </div>
  );
}
