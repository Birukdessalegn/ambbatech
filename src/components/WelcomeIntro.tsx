"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import AmbbaLogo from "@/components/AmbbaLogo";
import styles from "./WelcomeIntro.module.css";

export default function WelcomeIntro() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // If already dismissed in this session, hide immediately
    try {
      if (sessionStorage.getItem("ambbatech_intro_completed")) {
        setVisible(false);
      }
    } catch {
      // Safe catch for restricted browser storage
    }
  }, []);

  const handleDismiss = () => {
    if (exiting) return;

    try {
      sessionStorage.setItem("ambbatech_intro_completed", "true");
      document.documentElement.classList.add("intro-dismissed");
    } catch {
      // Safe catch
    }

    setExiting(true);
    setTimeout(() => {
      setVisible(false);
    }, 550);
  };

  useEffect(() => {
    if (!visible) return;

    // Allow dismissing via Enter, Space, or Escape keys
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        handleDismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, exiting]);

  return (
    <>
      {/* Synchronous inline script that runs before initial paint to prevent flash on reload */}
      <script
        id="ambbatech-intro-check"
        dangerouslySetInnerHTML={{
          __html: `(function(){try{if(sessionStorage.getItem('ambbatech_intro_completed')){document.documentElement.classList.add('intro-dismissed');}}catch(e){}})();`,
        }}
      />

      {visible && (
        <div
          className={`${styles.introOverlay} ${exiting ? styles.fadeOut : ""}`}
          onClick={handleDismiss}
          onTouchEnd={handleDismiss}
          role="button"
          tabIndex={0}
          aria-label="Click or tap to enter website"
        >
          {/* Background Grids & Radial Glow */}
          <div className={styles.ambientGlow} />
          <div className={styles.gridCanvas} />

          {/* Center Content */}
          <div className={styles.contentWrap}>
            {/* Animated Cybernetic 3D Plateau (Amba / አምባ) Structure */}
            <div className={styles.plateauContainer}>
              <svg
                viewBox="0 0 440 200"
                className={styles.plateauSvg}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="plateauBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4F7CFF" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#27D3FF" stopOpacity="0.03" />
                  </linearGradient>
                  <linearGradient id="plateauMidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4F7CFF" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#27D3FF" stopOpacity="0.08" />
                  </linearGradient>
                  <linearGradient id="plateauSummitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#27D3FF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4F7CFF" stopOpacity="0.15" />
                  </linearGradient>
                  <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Base Tier 0 — Ground Contours */}
                <polygon
                  points="40,160 220,192 400,160 220,128"
                  fill="url(#plateauBaseGrad)"
                  stroke="#27D3FF"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className={styles.tierBase}
                />

                {/* Tier 1 — Lower Mesa Contour */}
                <polygon
                  points="80,135 220,160 360,135 220,110"
                  fill="url(#plateauMidGrad)"
                  stroke="#4F7CFF"
                  strokeWidth="1.2"
                  className={styles.tierOne}
                />

                {/* Tier 2 — Steep Cliff Strata */}
                <polygon
                  points="120,105 220,125 320,105 220,85"
                  fill="url(#plateauMidGrad)"
                  stroke="#27D3FF"
                  strokeWidth="1.5"
                  className={styles.tierTwo}
                />

                {/* Tier 3 — Flat-Topped Summit (Amba Tableland) */}
                <polygon
                  points="155,70 220,84 285,70 220,56"
                  fill="url(#plateauSummitGrad)"
                  stroke="#27D3FF"
                  strokeWidth="2"
                  filter="url(#cyanGlow)"
                  className={styles.tierSummit}
                />

                {/* Structural Ridge Lines connecting Base to Flat Summit */}
                <line x1="40" y1="160" x2="155" y2="70" stroke="#27D3FF" strokeWidth="1" opacity="0.4" />
                <line x1="400" y1="160" x2="285" y2="70" stroke="#27D3FF" strokeWidth="1" opacity="0.4" />
                <line x1="220" y1="192" x2="220" y2="84" stroke="#27D3FF" strokeWidth="1.8" opacity="0.8" />
                <line x1="220" y1="128" x2="220" y2="56" stroke="#4F7CFF" strokeWidth="1" opacity="0.35" />

                {/* Topographic Altitude Grid Nodes */}
                <circle cx="155" cy="70" r="3" fill="#27D3FF" />
                <circle cx="285" cy="70" r="3" fill="#27D3FF" />
                <circle cx="220" cy="84" r="3.5" fill="#FFFFFF" />
                <circle cx="220" cy="56" r="3" fill="#27D3FF" />

                {/* Summit Center Aura */}
                <circle cx="220" cy="70" r="18" fill="none" stroke="#27D3FF" strokeWidth="1" strokeDasharray="3 3" className={styles.summitPulse} />
              </svg>

              {/* Elevated AmbbaTech Monogram sitting atop the plateau */}
              <div className={styles.logoBadgeOnPlateau}>
                <AmbbaLogo size={46} className={styles.logoSvg} />
              </div>
            </div>

            {/* Amba Origin Eyebrow */}
            <div className={styles.ambaMeaningBadge}>
              <span className={styles.geezChar}>አምባ</span>
              <span className={styles.badgeDivider}>•</span>
              <span>AMBBA: THE ELEVATED PLATEAU</span>
            </div>

            {/* Welcome Eyebrow & Brand Title */}
            <div className={styles.welcomeEyebrow}>WELCOME TO</div>

            <h1 className={styles.brandTitle}>
              AMBBA<span className={styles.brandAccent}>TECH</span>
            </h1>

            <p className={styles.brandTagline}>
              Unshakeable foundation. Software built around your business.
            </p>

            {/* Interactive Call-To-Action Prompt */}
            <div className={styles.continuePrompt}>
              <span>Tap or click anywhere to continue</span>
              <ArrowRight size={15} className={styles.promptArrow} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
