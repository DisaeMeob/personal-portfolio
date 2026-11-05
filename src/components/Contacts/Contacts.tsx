import type { ContactChannel } from '../../types/profile.ts'
import styles from './Contacts.module.css'

export interface ContactsProps {
  readonly title: string
  readonly subtitle: string
  readonly channels: readonly ContactChannel[]
}

function TelegramIcon() {
  return (
    <svg
      className={styles.iconSvg}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21.5 2 2 9.5l7 3 2.5 7.5L16 14l5.5-12z" />
      <path d="M9 12.5 15.5 6" />
    </svg>
  )
}

function TelegramChannelIcon() {
  return (
    <svg
      className={styles.iconSvg}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Broadcast / megaphone icon for channel */}
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      className={styles.iconSvg}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

export function Contacts({ title, subtitle, channels }: ContactsProps) {
  return (
    <section id="contacts" className={styles.contacts} aria-labelledby="contacts-title">
      <div className={styles.header}>
        <div className={styles.eyebrow} aria-hidden="true">
          ~/contacts
        </div>
        <h2 id="contacts-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.channelsGrid}>
        {channels.map((channel) => {
          let icon = <GitHubIcon />
          if (channel.id === 'telegram') {
            icon = <TelegramIcon />
          } else if (channel.id === 'telegram-channel') {
            icon = <TelegramChannelIcon />
          }

          return (
            <a
              key={channel.id}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelCard}
              aria-label={`${channel.label}: ${channel.value} (откроется в новой вкладке)`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{icon}</div>
                <div className={styles.labelGroup}>
                  <span className={styles.channelLabel}>{channel.label}</span>
                  <span className={styles.channelValue}>{channel.value}</span>
                </div>
                <span className={styles.arrowIcon} aria-hidden="true">
                  ↗
                </span>
              </div>

              <p className={styles.channelDescription}>{channel.description}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}
