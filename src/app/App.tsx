import { useState, useEffect } from 'react'
import { Header } from '../components/Header/Header.tsx'
import { Hero } from '../components/Hero/Hero.tsx'
import { About } from '../components/About/About.tsx'
import { TechStack } from '../components/TechStack/TechStack.tsx'
import { Projects } from '../components/Projects/Projects.tsx'
import { Contacts } from '../components/Contacts/Contacts.tsx'
import { Footer } from '../components/Footer/Footer.tsx'
import { profileContent } from '../data/profile.ts'
import { techStackContent } from '../data/skills.ts'
import { projectsContent } from '../data/projects.ts'
import type { Language } from '../types/profile.ts'
import styles from './App.module.css'

export function App() {
  const [language, setLanguage] = useState<Language>('ru')

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const currentProfile = profileContent[language]
  const currentStack = techStackContent[language]
  const currentProjects = projectsContent[language]

  return (
    <div className={styles.app}>
      <Header
        brand={currentProfile.brand}
        navigation={currentProfile.navigation}
        githubUrl={currentProfile.githubUrl}
        githubLabel={currentProfile.githubLabel}
        language={language}
        onLanguageChange={setLanguage}
      />

      <main className={styles.main}>
        <Hero profile={currentProfile} />
        <About
          title={currentProfile.about.title}
          paragraphs={currentProfile.about.paragraphs}
        />
        <TechStack
          title={currentStack.title}
          subtitle={currentStack.subtitle}
          categories={currentStack.categories}
        />
        <Projects
          title={currentProjects.title}
          subtitle={currentProjects.subtitle}
          highlightsTitle={currentProjects.highlightsTitle}
          items={currentProjects.items}
        />
        <Contacts
          title={currentProfile.contacts.title}
          subtitle={currentProfile.contacts.subtitle}
          channels={currentProfile.contacts.channels}
        />
      </main>

      <Footer
        footer={currentProfile.footer}
        channels={currentProfile.contacts.channels}
      />
    </div>
  )
}

export default App
