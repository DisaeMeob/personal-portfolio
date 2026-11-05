export interface ProjectItem {
  readonly id: string
  readonly title: string
  readonly type: string
  readonly status: string
  readonly description: string
  readonly highlights: readonly string[]
  readonly technologies: readonly string[]
  readonly githubUrl: string
  readonly githubLabel?: string
}

export interface ProjectsContent {
  readonly title: string
  readonly subtitle?: string
  readonly highlightsTitle: string
  readonly items: readonly ProjectItem[]
}
