import styles from './About.module.css'

export interface AboutProps {
  readonly title: string
  readonly paragraphs: readonly string[]
}

export function About({ title, paragraphs }: AboutProps) {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={styles.header}>
        <div className={styles.eyebrow} aria-hidden="true">
          ~/about
        </div>
        <h2 id="about-title" className={styles.title}>
          {title}
        </h2>
      </div>

      <div className={styles.content}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
