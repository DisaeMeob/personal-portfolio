import type { Language } from '../types/profile.ts'
import type { TechStackContent } from '../types/skill.ts'

export const techStackContent: Record<Language, TechStackContent> = {
  ru: {
    title: 'Технологический стек',
    subtitle: 'Инструменты и технологии, с которыми я работаю в процессе разработки и обучения',
    categories: [
      {
        id: 'backend',
        title: 'Backend',
        items: [
          { name: 'Python' },
          { name: 'FastAPI' },
        ],
      },
      {
        id: 'database',
        title: 'Базы данных и ORM',
        items: [
          { name: 'PostgreSQL' },
          { name: 'SQLAlchemy' },
        ],
      },
      {
        id: 'background',
        title: 'Фоновые задачи и кэширование',
        items: [
          { name: 'Celery' },
          { name: 'Redis' },
        ],
      },
      {
        id: 'tools',
        title: 'Тестирование и инструменты',
        items: [
          { name: 'Pytest' },
          { name: 'Git' },
        ],
      },
    ],
  },
  en: {
    title: 'Tech Stack',
    subtitle: 'Technologies and tools I work with across development and learning',
    categories: [
      {
        id: 'backend',
        title: 'Backend',
        items: [
          { name: 'Python' },
          { name: 'FastAPI' },
        ],
      },
      {
        id: 'database',
        title: 'Databases & ORM',
        items: [
          { name: 'PostgreSQL' },
          { name: 'SQLAlchemy' },
        ],
      },
      {
        id: 'background',
        title: 'Background Tasks & Caching',
        items: [
          { name: 'Celery' },
          { name: 'Redis' },
        ],
      },
      {
        id: 'tools',
        title: 'Testing & Tools',
        items: [
          { name: 'Pytest' },
          { name: 'Git' },
        ],
      },
    ],
  },
}
