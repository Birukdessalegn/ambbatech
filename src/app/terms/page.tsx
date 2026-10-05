import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AmbbaTech",
  description: "AmbbaTech enterprise terms of service and SLA policies.",
};

export default function TermsPage() {
  return (
    <div style={{ paddingTop: "140px", paddingBottom: "100px", minHeight: "70vh" }}>
      <div className="container-narrow">
        <h1 style={{ fontSize: "36px", fontWeight: "800", color: "#FFFFFF", marginBottom: "20px" }}>
          Terms of Service
        </h1>
        <p style={{ color: "var(--text-dark-secondary)", lineHeight: "1.7", marginBottom: "20px" }}>
          Use of AmbbaTech software systems, including Kasina HMS, THE OAK CLUB, and bespoke custom applications, is governed by commercial enterprise service level agreements (SLAs) executed with each client.
        </p>
        <p style={{ color: "var(--text-dark-secondary)", lineHeight: "1.7" }}>
          For legal inquiries and enterprise contract documentation, please contact legal@ambbatech.com.
        </p>
      </div>
    </div>
  );
}
