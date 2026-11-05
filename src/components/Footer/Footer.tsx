import type { ContactChannel, FooterContent } from '../../types/profile.ts'
import styles from './Footer.module.css'

export interface FooterProps {
  readonly footer: FooterContent
  readonly channels: readonly ContactChannel[]
}

export function Footer({ footer, channels }: FooterProps) {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.infoCol}>
          <div className={styles.primaryRow}>
            <span className={styles.copyright}>{footer.copyright}</span>
            <span className={styles.divider} aria-hidden="true">
              ·
            </span>
            <span className={styles.role}>{footer.role}</span>
          </div>
          <p className={styles.techStack}>{footer.builtWith}</p>
        </div>

        <nav aria-label="Ссылки в подвале">
          <ul className={styles.linksList}>
            {channels.map((channel) => (
              <li key={channel.id}>
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                  aria-label={`${channel.label} (${channel.value})`}
                >
                  <span>{channel.label}</span>
                  <span className={styles.arrowIcon} aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
