import type { Language } from '../types/profile.ts'
import type { ProjectsContent } from '../types/project.ts'

export const projectsContent: Record<Language, ProjectsContent> = {
  ru: {
    title: 'Проекты',
    subtitle: 'Практические backend-проекты с открытым исходным кодом',
    highlightsTitle: 'Ключевые особенности:',
    items: [
      {
        id: 'hotel-booking-api',
        title: 'Hotel Booking API',
        type: 'REST API Service',
        status: 'Учебный проект',
        description:
          'Асинхронный REST API сервис бронирования отелей и номеров. Реализует аутентификацию по JWT, валидацию данных, репозиторный слой для работы с базой данных, проверку доступности номеров с контролем пересечения дат и фоновые задачи.',
        highlights: [
          'Регистрация, JWT-аутентификация в cookie и безопасное хеширование паролей',
          'Поиск и фильтрация отелей и номеров с учётом удобств и дат заезда',
          'Алгоритм бронирования с проверкой доступности комнат на стороне СУБД',
          'Фоновая обработка задач с использованием Celery и Redis',
          'Интеграционное тестирование эндпоинтов с использованием Pytest',
        ],
        technologies: [
          'Python',
          'FastAPI',
          'PostgreSQL',
          'SQLAlchemy 2.0',
          'Pydantic v2',
          'Redis',
          'Celery',
          'Alembic',
          'Pytest',
        ],
        githubUrl: 'https://github.com/DisaeMeob/ai_booking',
        githubLabel: 'Репозиторий проекта',
      },
      {
        id: 'loskutok-catalog-bot',
        title: 'Telegram-бот каталога швейной фурнитуры',
        type: 'Telegram Bot',
        status: 'Pet-проект',
        description:
          'Telegram-бот для каталога магазина швейной фурнитуры. Реализует глубокую 4-уровневую структуру категорий в реляционной базе данных, учёт вариаций товаров по характеристикам (размер, цвет, цена), FSM-диалоги администрирования и инлайн-навигацию.',
        highlights: [
          'Многоуровневая иерархия каталога с каскадными связями в SQLAlchemy',
          'Модель вариантов товаров с гибким набором характеристик и медиафайлов',
          'Интерактивная навигация по каталогу на базе InlineKeyboardMarkup',
          'Пошаговые FSM-сценарии для добавления и редактирования товаров',
          'Кастомные фильтры прав администратора и middleware для сессий БД',
        ],
        technologies: [
          'Python',
          'Aiogram 3',
          'PostgreSQL',
          'SQLAlchemy',
          'Asyncpg',
        ],
        githubUrl: 'https://github.com/DisaeMeob/loskutok',
        githubLabel: 'Репозиторий проекта',
      },
    ],
  },
  en: {
    title: 'Projects',
    subtitle: 'Hands-on open-source backend projects',
    highlightsTitle: 'Key Features:',
    items: [
      {
        id: 'hotel-booking-api',
        title: 'Hotel Booking API',
        type: 'REST API Service',
        status: 'Pet Project',
        description:
          'Asynchronous REST API service for hotel and room bookings. Features JWT-based authentication, strict data validation, repository pattern for database interactions, date collision checks for room availability, and background tasks.',
        highlights: [
          'User registration, cookie-based JWT authentication, and secure password hashing',
          'Search and filtering of hotels and rooms by amenities and dates',
          'Booking logic with database-level availability validation for selected date ranges',
          'Asynchronous background task processing using Celery and Redis',
          'Integration testing for API endpoints using Pytest',
        ],
        technologies: [
          'Python',
          'FastAPI',
          'PostgreSQL',
          'SQLAlchemy 2.0',
          'Pydantic v2',
          'Redis',
          'Celery',
          'Alembic',
          'Pytest',
        ],
        githubUrl: 'https://github.com/DisaeMeob/ai_booking',
        githubLabel: 'Project Repository',
      },
      {
        id: 'loskutok-catalog-bot',
        title: 'Sewing Supplies Catalog Telegram Bot',
        type: 'Telegram Bot',
        status: 'Pet Project',
        description:
          'Telegram bot for a sewing supplies store catalog. Implements a 4-level category hierarchy in PostgreSQL, product variations by attributes (size, color, price), admin FSM workflows, and inline navigation.',
        highlights: [
          'Multi-level category hierarchy with cascade relationships in SQLAlchemy',
          'Product variant model supporting flexible attributes and media files',
          'Interactive inline navigation based on InlineKeyboardMarkup',
          'Step-by-step FSM dialogs for adding and managing catalog items',
          'Custom admin authorization filters and database session middleware',
        ],
        technologies: [
          'Python',
          'Aiogram 3',
          'PostgreSQL',
          'SQLAlchemy',
          'Asyncpg',
        ],
        githubUrl: 'https://github.com/DisaeMeob/loskutok',
        githubLabel: 'Project Repository',
      },
    ],
  },
}
