import type { ProfileData } from '../../types/profile.ts'
import styles from './Hero.module.css'

export interface HeroProps {
  readonly profile: ProfileData
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.headerBlock}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowCode}>{profile.name}</span>
          <span className={styles.eyebrowDivider} aria-hidden="true">
            /
          </span>
          <span className={styles.eyebrowTag}>Backend Engineering</span>
        </div>

        <h1 id="hero-title" className={styles.title}>
          {profile.role}
        </h1>

        <p className={styles.summary}>{profile.summary}</p>
      </div>

      <ul className={styles.stackList} aria-label="Ключевые технологии">
        {profile.coreStack.map((tech) => (
          <li key={tech} className={styles.stackBadge}>
            {tech}
          </li>
        ))}
      </ul>

      <div className={styles.ctaGroup}>
        <a href={profile.actions.primaryHref} className={styles.primaryButton}>
          {profile.actions.primaryCta}
        </a>

        <a
          href={profile.actions.secondaryHref}
          className={styles.secondaryButton}
        >
          {profile.actions.secondaryCta}
        </a>

        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubButton}
          aria-label="Исходный код на GitHub (откроется в новой вкладке)"
        >
          <span>{profile.githubLabel}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <dl className={styles.focusGrid}>
        {profile.focusItems.map((item) => (
          <div key={item.label} className={styles.focusCard}>
            <dt className={styles.focusLabel}>{item.label}</dt>
            <dd className={styles.focusValue}>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
