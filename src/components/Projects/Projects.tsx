import type { ProjectItem } from '../../types/project.ts'
import styles from './Projects.module.css'

export interface ProjectsProps {
  readonly title: string
  readonly subtitle?: string
  readonly highlightsTitle: string
  readonly items: readonly ProjectItem[]
}

export function Projects({
  title,
  subtitle,
  highlightsTitle,
  items,
}: ProjectsProps) {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <div className={styles.header}>
        <div className={styles.eyebrow} aria-hidden="true">
          ~/projects
        </div>
        <h2 id="projects-title" className={styles.title}>
          {title}
        </h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div className={styles.list}>
        {items.map((project) => (
          <article key={project.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                <span className={styles.badgeType}>{project.type}</span>
                <span className={styles.badgeStatus}>{project.status}</span>
              </div>
              <h3 className={styles.projectTitle}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectTitleLink}
                  aria-label={`${project.title} на GitHub (откроется в новой вкладке)`}
                >
                  <span>{project.title}</span>
                  <span className={styles.externalIcon} aria-hidden="true">
                    ↗
                  </span>
                </a>
              </h3>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.highlightsBlock}>
              <h4 className={styles.highlightsTitle}>{highlightsTitle}</h4>
              <ul className={styles.highlightsList}>
                {project.highlights.map((highlight) => (
                  <li key={highlight} className={styles.highlightItem}>
                    <span className={styles.bullet} aria-hidden="true">
                      —
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footer}>
              <ul className={styles.techList} aria-label="Использованные технологии">
                {project.technologies.map((tech) => (
                  <li key={tech} className={styles.techBadge}>
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubButton}
                aria-label={`Исходный код ${project.title} на GitHub`}
              >
                <span>GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
