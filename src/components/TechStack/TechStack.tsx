import type { SkillCategory } from '../../types/skill.ts'
import styles from './TechStack.module.css'

export interface TechStackProps {
  readonly title: string
  readonly subtitle?: string
  readonly categories: readonly SkillCategory[]
}

export function TechStack({ title, subtitle, categories }: TechStackProps) {
  return (
    <section id="stack" className={styles.stack} aria-labelledby="stack-title">
      <div className={styles.header}>
        <div className={styles.eyebrow} aria-hidden="true">
          ~/stack
        </div>
        <h2 id="stack-title" className={styles.title}>
          {title}
        </h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categoryCard}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <ul className={styles.itemList} aria-label={category.title}>
              {category.items.map((item) => (
                <li key={item.name} className={styles.itemBadge}>
                  <span className={styles.itemDot} aria-hidden="true" />
                  <span className={styles.itemName}>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
