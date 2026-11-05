import { useState } from 'react'
import type { Language, NavItem } from '../../types/profile.ts'
import styles from './Header.module.css'

export interface HeaderProps {
  readonly brand: string
  readonly navigation: readonly NavItem[]
  readonly githubUrl: string
  readonly githubLabel: string
  readonly language: Language
  readonly onLanguageChange: (lang: Language) => void
}

const LANGUAGES: readonly Language[] = ['ru', 'en']

export function Header({
  brand,
  navigation,
  githubUrl,
  githubLabel,
  language,
  onLanguageChange,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          href="#top"
          className={styles.brand}
          onClick={handleCloseMobileMenu}
          aria-label={`${brand} — наверх страницы`}
        >
          <span className={styles.brandPrompt} aria-hidden="true">
            ~/
          </span>
          <span>{brand}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Основная навигация">
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div
            className={styles.langSwitch}
            role="group"
            aria-label="Переключение языка интерфейса"
          >
            {LANGUAGES.map((lang) => {
              const isActive = language === lang
              return (
                <button
                  key={lang}
                  type="button"
                  className={`${styles.langButton} ${isActive ? styles.langButtonActive : ''}`}
                  onClick={() => onLanguageChange(lang)}
                  aria-pressed={isActive}
                  aria-label={
                    lang === 'ru' ? 'Русский язык' : 'Английский язык'
                  }
                >
                  {lang.toUpperCase()}
                </button>
              )
            })}
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="Профиль на GitHub (откроется в новой вкладке)"
          >
            <span>{githubLabel}</span>
            <span className={styles.externalArrow} aria-hidden="true">
              ↗
            </span>
          </a>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isMobileMenuOpen ? 'Закрыть меню навигации' : 'Открыть меню навигации'
            }
          >
            <span className={styles.menuIcon} aria-hidden="true">
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className={styles.mobileNav}
          aria-label="Мобильная навигация"
        >
          <ul className={styles.mobileNavList}>
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={handleCloseMobileMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileGithubItem}>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileGithubLink}
                onClick={handleCloseMobileMenu}
              >
                <span>{githubLabel}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
