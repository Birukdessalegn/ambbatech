import styles from "./TechStack.module.css";

export default function TechStack() {
  const technologies = [
    { name: "React", category: "Interface Architecture" },
    { name: "Next.js", category: "Full-Stack Web" },
    { name: "Node.js", category: "API Services" },
    { name: "Spring Boot", category: "Enterprise Backend" },
    { name: "Flutter", category: "Cross-Platform Mobile" },
    { name: "PostgreSQL", category: "Relational Storage" },
    { name: "MySQL", category: "Transactional DB" },
    { name: "MongoDB", category: "Document Store" },
    { name: "Redis", category: "High-Speed Caching" },
  ];

  return (
    <section className={`section section-dark-alt ${styles.techSection}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.introCol}>
            <span className={styles.techTag}>Reliable Architecture</span>
            <h3 className={styles.title}>Built with modern technology.</h3>
            <p className={styles.subtext}>
              Technology exists to support the product, ensure 99.9% uptime, and scale without friction.
            </p>
          </div>

          <div className={styles.techPillGrid}>
            {technologies.map((tech, idx) => (
              <div key={idx} className={styles.techPill}>
                <span className={styles.techDot} />
                <div className={styles.techMeta}>
                  <strong className={styles.techName}>{tech.name}</strong>
                  <span className={styles.techCategory}>{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
