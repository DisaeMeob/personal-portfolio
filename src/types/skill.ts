export interface SkillItem {
  readonly name: string
  readonly note?: string
}

export interface SkillCategory {
  readonly id: string
  readonly title: string
  readonly items: readonly SkillItem[]
}

export interface TechStackContent {
  readonly title: string
  readonly subtitle?: string
  readonly categories: readonly SkillCategory[]
}
