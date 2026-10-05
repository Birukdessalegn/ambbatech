import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AmbbaTech",
  description: "AmbbaTech privacy policy and data protection commitments.",
};

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "70vh" }}>
      <div className="container-narrow">
        <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#FFFFFF", marginBottom: "20px" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "var(--text-dark-secondary)", lineHeight: "1.7", marginBottom: "20px" }}>
          At AmbbaTech, we treat your business data with the highest enterprise confidentiality. We do not sell, rent, or monetize your company’s operational or guest records.
        </p>
        <p style={{ color: "var(--text-dark-secondary)", lineHeight: "1.7" }}>
          For inquiries regarding data governance, server locations, and compliance, reach out directly to privacy@ambbatech.com.
        </p>
      </div>
    </div>
  );
}
