import type { Language, ProfileData } from '../types/profile.ts'

export const profileContent: Record<Language, ProfileData> = {
  ru: {
    brand: 'aleksandr.py',
    name: 'Александр',
    role: 'Python Backend Developer',
    summary:
      'Разработка серверных приложений на Python и FastAPI. Уделяю внимание структуре кода, надежности работы с базами данных и изучению архитектурных подходов к построению backend-систем.',
    coreStack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Redis',
      'Celery',
      'Pytest',
      'Git',
    ],
    focusItems: [
      {
        label: 'Специализация',
        value: 'Backend-разработка на Python и проектирование API',
      },
      {
        label: 'Базовый стек',
        value: 'Python · FastAPI · PostgreSQL · SQLAlchemy',
      },
      {
        label: 'Направление развития',
        value: 'Архитектура сервисов, асинхронность и фоновые задачи',
      },
    ],
    githubUrl: 'https://github.com/DisaeMeob',
    githubLabel: 'GitHub',
    actions: {
      primaryCta: 'Связаться',
      primaryHref: '#contacts',
      secondaryCta: 'Смотреть проекты',
      secondaryHref: '#projects',
    },
    navigation: [
      { id: 'about', label: 'О себе', href: '#about' },
      { id: 'stack', label: 'Стек', href: '#stack' },
      { id: 'projects', label: 'Проекты', href: '#projects' },
      { id: 'contacts', label: 'Контакты', href: '#contacts' },
    ],
    about: {
      title: 'О себе',
      paragraphs: [
        'Привет! Меня зовут Александр, я занимаюсь backend-разработкой на Python. Создаю веб-сервисы и API, работаю с реляционными базами данных и настраиваю фоновые процессы.',
        'В разработке для меня важны читаемость кода, предсказуемость поведения системы и покрытие функциональности тестами. Активно развиваюсь в направлении backend-разработки и углубляю знания в области архитектуры программного обеспечения.',
      ],
    },
    contacts: {
      title: 'Контакты',
      subtitle:
        'Открыт для предложений о сотрудничестве, обсуждения проектов и профессионального общения. Напишите мне в удобном для вас канале:',
      channels: [
        {
          id: 'github',
          label: 'GitHub',
          value: 'DisaeMeob',
          url: 'https://github.com/DisaeMeob',
          description: 'Репозитории и исходный код проектов.',
        },
        {
          id: 'telegram',
          label: 'Telegram',
          value: '@disaee',
          url: 'https://t.me/disaee',
          description: 'Личная связь и сообщения.',
        },
        {
          id: 'telegram-channel',
          label: 'IT Разборка',
          value: '@it_razborka',
          url: 'https://t.me/it_razborka',
          description: 'Публикации, заметки и материалы об IT и программировании.',
        },
      ],
    },
    footer: {
      copyright: '© 2026 Александр',
      role: 'Python Backend Developer',
      builtWith: 'Собрано на React & TypeScript',
    },
  },
  en: {
    brand: 'aleksandr.py',
    name: 'Aleksandr',
    role: 'Python Backend Developer',
    summary:
      'Developing server-side applications with Python and FastAPI. Focused on code structure, database reliability, and learning modern backend architecture patterns.',
    coreStack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'Redis',
      'Celery',
      'Pytest',
      'Git',
    ],
    focusItems: [
      {
        label: 'Focus',
        value: 'Python backend development & API design',
      },
      {
        label: 'Core Stack',
        value: 'Python · FastAPI · PostgreSQL · SQLAlchemy',
      },
      {
        label: 'Growth Direction',
        value: 'Software architecture, async workflows & background processing',
      },
    ],
    githubUrl: 'https://github.com/DisaeMeob',
    githubLabel: 'GitHub',
    actions: {
      primaryCta: 'Contact me',
      primaryHref: '#contacts',
      secondaryCta: 'View projects',
      secondaryHref: '#projects',
    },
    navigation: [
      { id: 'about', label: 'About', href: '#about' },
      { id: 'stack', label: 'Stack', href: '#stack' },
      { id: 'projects', label: 'Projects', href: '#projects' },
      { id: 'contacts', label: 'Contacts', href: '#contacts' },
    ],
    about: {
      title: 'About',
      paragraphs: [
        "Hi! I'm Aleksandr, a Python backend developer. I build web services and APIs, work with relational databases, and configure background task processing.",
        'I value clean code, predictable system behavior, and automated test coverage. I actively advance my backend skills and deepen my understanding of software architecture principles.',
      ],
    },
    contacts: {
      title: 'Contacts',
      subtitle:
        'Open to collaboration opportunities, project inquiries, and engineering discussions. Feel free to reach out via:',
      channels: [
        {
          id: 'github',
          label: 'GitHub',
          value: 'DisaeMeob',
          url: 'https://github.com/DisaeMeob',
          description: 'Code repositories and project source code.',
        },
        {
          id: 'telegram',
          label: 'Telegram',
          value: '@disaee',
          url: 'https://t.me/disaee',
          description: 'Direct messaging and quick replies.',
        },
        {
          id: 'telegram-channel',
          label: 'IT Razborka',
          value: '@it_razborka',
          url: 'https://t.me/it_razborka',
          description: 'Posts, notes, and materials about IT and programming.',
        },
      ],
    },
    footer: {
      copyright: '© 2026 Aleksandr',
      role: 'Python Backend Developer',
      builtWith: 'Built with React & TypeScript',
    },
  },
}
