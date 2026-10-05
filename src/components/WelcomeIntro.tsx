"use client";

import { useEffect, useState } from "react";
import styles from "./WelcomeIntro.module.css";

export default function WelcomeIntro() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Check if user already saw the intro in this browser session
    const hasSeenIntro = sessionStorage.getItem("ambbatech_intro_seen");
    if (hasSeenIntro) {
      setVisible(false);
      return;
    }

    // Lock body scroll during splash
    document.body.style.overflow = "hidden";

    // Begin fade-out sequence after plateau ascends and text finishes
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2400);

    // Complete removal from DOM
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("ambbatech_intro_seen", "true");
    }, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleFastForward = () => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("ambbatech_intro_seen", "true");
    }, 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`${styles.introOverlay} ${exiting ? styles.fadeOut : ""}`}
      onClick={handleFastForward}
      title="Click to skip"
    >
      {/* Background Grids & Radial Glow */}
      <div className={styles.ambientGlow} />
      <div className={styles.gridCanvas} />

      {/* Center Cinematic Content */}
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
            <svg
              width="44"
              height="44"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.logoSvg}
            >
              <rect width="32" height="32" rx="8" fill="#151F38" />
              <path
                d="M16 6L7 24H12.5L16 16.5L19.5 24H25L16 6Z"
                fill="#4F7CFF"
              />
              <path
                d="M12 18H20L18.5 21H13.5L12 18Z"
                fill="#27D3FF"
                opacity="0.85"
              />
            </svg>
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

        {/* Luminous Loading Bar */}
        <div className={styles.loaderBarContainer}>
          <div className={styles.loaderBarFill} />
        </div>

        <div className={styles.skipHint}>Click anywhere to enter</div>
      </div>
    </div>
  );
}
