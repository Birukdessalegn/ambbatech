"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "Custom Enterprise Software",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <section className={`section section-dark ${styles.contactHero}`}>
        <div className="bg-radial-glow" />
        <div className="container">
          <div className={styles.header}>
            <div className="pill-badge pill-badge-blue">Let&apos;s Connect</div>
            <h1 className={styles.title}>
              Let&apos;s talk about <span className={styles.blueText}>what you&apos;re building.</span>
            </h1>
            <p className={styles.subtitle}>
              Whether you are evaluating Kasina HMS or THE OAK CLUB, or need a bespoke system designed around your unique business operations, our engineering team is ready to assist.
            </p>
          </div>

          <div className={styles.contactLayout}>
            {/* Left: Contact Info */}
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <h3 className={styles.cardHeader}>AmbbaTech Headquarters</h3>
                <p className={styles.cardDesc}>
                  Headquartered in Addis Ababa, serving hospitality groups, venues, and commercial enterprises across Ethiopia and East Africa.
                </p>

                <div className={styles.contactList}>
                  <div className={styles.contactItem}>
                    <div className={styles.iconWrap}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <strong>Office Location</strong>
                      <span>Addis Ababa, Ethiopia</span>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconWrap}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <strong>Direct Inquiries</strong>
                      <a href="mailto:contact@ambbatech.com">contact@ambbatech.com</a>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconWrap}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <strong>Technical Support & Sales</strong>
                      <a href="tel:+251911000000">+251 911 00 00 00</a>
                    </div>
                  </div>
                </div>

                <div className={styles.workingHours}>
                  <strong>Operating Hours:</strong> Monday – Saturday, 8:30 AM – 6:00 PM EAT
                  <br />
                  <span className={styles.emergencySupport}>24/7 SLA Support for active hotel & venue deployments</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className={styles.formCol}>
              {submitted ? (
                <div className={styles.successState}>
                  <CheckCircle2 size={44} className={styles.successIcon} />
                  <h3>Message sent successfully</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Your message regarding{" "}
                    <strong>{formData.interest}</strong> has been directed to our project engineers. We will get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary-dark" style={{ marginTop: "16px" }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <h3 className={styles.formTitle}>Send a Message</h3>

                  <div className={styles.formGrid}>
                    <div className={styles.field}>
                      <label className={styles.label}>Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Biruk Dessalegn"
                        className={styles.input}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>Company / Organization *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ambba Hospitality Group"
                        className={styles.input}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="biruk@example.com"
                        className={styles.input}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className={styles.field}>
                      <label className={styles.label}>Phone / Mobile *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+251 9..."
                        className={styles.input}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className={styles.fieldFull}>
                      <label className={styles.label}>What are you looking for?</label>
                      <select
                        className={styles.select}
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      >
                        <option value="Kasina HMS Demo">Kasina Hotel Management System (Kasina HMS)</option>
                        <option value="THE OAK CLUB Demo">THE OAK CLUB (Club, Bar & Restaurant POS)</option>
                        <option value="Custom Enterprise Software">Custom Enterprise Business Software</option>
                        <option value="Web or Mobile Application">Web or Mobile Application Engineering</option>
                        <option value="General Partnership">General Partnership or Advisory</option>
                      </select>
                    </div>

                    <div className={styles.fieldFull}>
                      <label className={styles.label}>Message / Project Overview *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us what you're trying to solve, build, or modernize..."
                        className={styles.textarea}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }}>
                    Send Message <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
