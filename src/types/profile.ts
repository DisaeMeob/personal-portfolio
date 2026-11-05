export type Language = 'ru' | 'en'

export interface NavItem {
  readonly id: string
  readonly label: string
  readonly href: `#${string}`
}

export interface HeroFocusItem {
  readonly label: string
  readonly value: string
}

export interface ContactChannel {
  readonly id: 'github' | 'telegram' | 'telegram-channel'
  readonly label: string
  readonly value: string
  readonly url: string
  readonly description: string
}

export interface ContactsContent {
  readonly title: string
  readonly subtitle: string
  readonly channels: readonly ContactChannel[]
}

export interface FooterContent {
  readonly copyright: string
  readonly role: string
  readonly builtWith: string
}

export interface ProfileData {
  readonly brand: string
  readonly name: string
  readonly role: string
  readonly summary: string
  readonly coreStack: readonly string[]
  readonly focusItems: readonly HeroFocusItem[]
  readonly githubUrl: string
  readonly githubLabel: string
  readonly actions: {
    readonly primaryCta: string
    readonly primaryHref: `#${string}`
    readonly secondaryCta: string
    readonly secondaryHref: `#${string}`
  }
  readonly navigation: readonly NavItem[]
  readonly about: {
    readonly title: string
    readonly paragraphs: readonly string[]
  }
  readonly contacts: ContactsContent
  readonly footer: FooterContent
}
