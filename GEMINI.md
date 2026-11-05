# GEMINI.md — Personal Portfolio

## 1. Project Overview

### Project Name
Personal Portfolio

### Project Description
A modern, minimalist, bilingual personal portfolio website for a Python Backend Developer.

The website serves as a professional digital business card. Its purpose is to introduce the developer, present technical skills, showcase selected projects, and provide contact information.

The website must be simple, fast, responsive, accessible, and visually polished.

### Main Goal
Create a professional online presence that allows recruiters, developers, and potential collaborators to quickly understand:

- Who the developer is.
- What technologies the developer works with.
- What projects the developer has built.
- How to contact the developer.
- Where to find the developer's source code.

### Core Principles

- Minimalism over unnecessary complexity.
- Readability over decorative elements.
- Maintainable architecture over quick solutions.
- Reusable components over duplicated code.
- Performance over excessive animations.
- Explicit types over implicit assumptions.
- Simplicity over unnecessary dependencies.

---

## 2. Technology Stack

Use the following technologies:

| Technology | Purpose |
|---|---|
| React | UI development |
| TypeScript | Static typing |
| Vite | Development server and build tool |
| CSS Modules | Component-scoped styling |
| HTML5 | Semantic markup |
| CSS3 | Layout, responsive design and animations |
| Git | Version control |
| Vercel | Static website deployment |

### Technical Requirements

- Use React functional components.
- Use TypeScript throughout the application.
- Use `.tsx` for React components.
- Use `.ts` for data, types, and utility functions.
- Use CSS Modules (`.module.css`) for component styling.
- Use modern ES6+ JavaScript.
- Use strict TypeScript configuration.
- Use `npm` as the package manager unless the project already uses another package manager.

### Prohibited Technologies

The project must NOT include:

- Backend services.
- REST API or GraphQL.
- Database systems.
- Authentication systems.
- Server-side application logic.
- Admin panels.
- CMS integrations.
- localStorage or sessionStorage.
- Unnecessary state management libraries.

This is a static frontend-only application.

---

## 3. Website Structure and Functionality

The website must consist of a single-page portfolio.

### 3.1 Header

Requirements:

- Display developer's name or personal brand.
- Provide navigation to page sections.
- Include language switcher (RU / EN).
- Include a link to GitHub.
- Support responsive mobile navigation.

### 3.2 Hero Section

The first screen must immediately communicate the developer's professional identity.

Content:

- Developer's name.
- Professional title: Python Backend Developer.
- Short professional introduction.
- Primary action: Contact me.
- Secondary action: View projects.
- GitHub link.

Design requirements:

- Strong typography.
- Clear visual hierarchy.
- Minimalist composition.
- No personal photograph.
- No unnecessary decorative graphics.
- Avoid excessive gradients and visual effects.

### 3.3 About Section

Introduce the developer and professional interests.

Possible content:

- Professional background.
- Backend development interests.
- Experience with Python ecosystem.
- Interest in software architecture.
- Interest in AI agents and automation.
- Current learning and development direction.

IMPORTANT: Never invent professional experience, employment history, qualifications, or achievements. Use only information explicitly supplied by the developer.

### 3.4 Tech Stack Section

Display technologies and tools used by the developer.

Initial proposed technologies:

**Backend**
- Python
- FastAPI
- SQLAlchemy
- Pydantic
- Aiogram

**Databases**
- PostgreSQL
- Redis

**Development Tools**
- Git
- GitHub
- Docker
- Linux
- Pytest

These are initial content suggestions. Do not claim professional proficiency in any technology without confirmation from the developer.

Requirements:

- Organize technologies into logical categories.
- Use consistent visual presentation.
- Avoid unnecessary progress bars and arbitrary skill percentages.
- Make the section easy to update.

### 3.5 Projects Section

Display selected development projects.

Each project should contain:

- Project name.
- Short description.
- Main technologies.
- GitHub repository link.
- Optional live demo link.

Requirements:

- Use reusable project components.
- Store project information separately from UI components.
- Support adding new projects by updating data files.
- Do not invent repositories, project descriptions, or achievements.
- Do not display placeholder projects as completed projects.

### 3.6 Contacts Section

Provide direct communication channels.

Initial contact options:

- GitHub.
- Telegram.
- Email (optional).

Requirements:

- External links must work correctly.
- Use meaningful link labels.
- Include appropriate accessible names.
- Open external links safely where appropriate.

### 3.7 Footer

Include:

- Developer's name.
- Copyright notice.
- GitHub link.
- Optional short closing statement.

Keep the footer simple.

---

## 4. Internationalization (i18n)

The website must support two languages:

- Russian (RU).
- English (EN).

Requirements:

1. Russian is the default language.
2. The user can switch between RU and EN.
3. All interface text must be translated.
4. Project descriptions and profile content must have both language versions.
5. The selected language must update the entire interface.
6. Avoid hardcoded interface text inside components.
7. Keep translations centralized and maintainable.

For this project, use a simple TypeScript-based translation structure.

Do not install a third-party internationalization library unless there is a clear technical reason.

Suggested structure:

`src/data/translations/`

- ru.ts
- en.ts

Create a shared translation type to ensure both languages have the same structure.

---

## 5. Design System and UI/UX

### Design Direction

The website must follow a light minimalist design.

Visual characteristics:

- Clean and professional.
- Light background.
- Neutral color palette.
- Strong typography.
- Generous whitespace.
- Subtle borders and shadows.
- Carefully balanced spacing.
- Restrained accent color.

### Color Palette

Suggested starting palette:

- Background: #FFFFFF
- Secondary background: #F7F8FA
- Primary text: #171717
- Secondary text: #737373
- Borders: #E5E7EB
- Accent: #2563EB

These values may be refined during design implementation.

### Typography

Typography is a major visual element of this project.

Requirements:

- Use modern, readable typography.
- Establish a clear hierarchy between headings and body text.
- Use consistent font weights.
- Avoid excessive font sizes.
- Maintain comfortable line heights.
- Use a maximum of two font families.

### Visual Restrictions

Avoid:

- Excessive gradients.
- Neon colors.
- Heavy shadows.
- Excessive rounded cards.
- Unnecessary glassmorphism.
- Overloaded animations.
- Decorative elements without functional purpose.
- Generic AI-generated visual patterns.
- Personal photographs or avatar placeholders.

The website should look like a thoughtfully designed professional developer portfolio, not a generic template.

### Responsive Design

The website must work correctly on:

- Desktop.
- Laptop.
- Tablet.
- Mobile devices.

Requirements:

- Mobile-first considerations.
- Responsive typography.
- Flexible layouts.
- No horizontal overflow.
- Touch-friendly navigation.
- Proper spacing on small screens.

---

## 6. Project Architecture

Use a modular component-based architecture.

Suggested initial structure:

```text
personal-portfolio/
│
├── public/
│   ├── favicon.svg
│   └── images/
│
├── src/
│   │
│   ├── app/
│   │   ├── App.tsx
│   │   └── App.module.css
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── TechStack/
│   │   ├── Projects/
│   │   ├── Contacts/
│   │   └── Footer/
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   └── translations/
│   │       ├── ru.ts
│   │       └── en.ts
│   │
│   ├── hooks/
│   │   └── useLanguage.ts
│   │
│   ├── types/
│   │   ├── profile.ts
│   │   ├── project.ts
│   │   └── skill.ts
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   │
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── GEMINI.md
└── README.md
```

This is the initial proposed structure.

Do not create unnecessary folders or files before they are needed.

### Architecture Principles

- Keep components small and focused.
- Separate data from presentation.
- Avoid putting all application logic into App.tsx.
- Keep reusable UI elements in appropriate shared locations.
- Use clear and predictable file naming.
- Avoid circular dependencies.
- Maintain clear component responsibilities.

---

## 7. Coding Standards

### TypeScript

- Use explicit types and interfaces.
- Avoid `any`.
- Prefer `unknown` when the type is genuinely unknown.
- Avoid unnecessary type assertions.
- Use strict TypeScript settings.
- Define shared data structures in the types directory.

### React

- Use functional components.
- Use React Hooks where appropriate.
- Avoid unnecessary state.
- Avoid unnecessary useEffect.
- Use stable keys when rendering lists.
- Keep rendering logic readable.
- Extract reusable components when appropriate.
- Avoid premature abstractions.

### CSS

- Use CSS Modules.
- Avoid global styles except for design tokens, resets, and base styles.
- Use CSS variables for colors, spacing, and typography.
- Avoid duplicated CSS rules.
- Prefer Flexbox and CSS Grid.
- Use responsive breakpoints consistently.
- Avoid inline styles unless dynamically necessary.

### Naming Conventions

- Components: PascalCase.
- Variables and functions: camelCase.
- Types and interfaces: PascalCase.
- CSS Modules: ComponentName.module.css.
- Constants: UPPER_SNAKE_CASE where appropriate.
- Custom hooks: useSomething.

---

## 8. Performance and Accessibility

### Performance

- Avoid unnecessary dependencies.
- Optimize images and static assets.
- Avoid loading large libraries for simple tasks.
- Minimize unnecessary React re-renders.
- Use production builds for deployment.
- Keep the initial page load fast.

### Accessibility

- Use semantic HTML5 elements.
- Provide accessible navigation.
- Ensure keyboard accessibility.
- Maintain sufficient color contrast.
- Provide visible focus states.
- Use appropriate ARIA attributes when necessary.
- Ensure buttons and links have meaningful labels.

---

## 9. SEO

The website should be optimized for basic search engine indexing.

Requirements:

- Meaningful page title.
- Meta description.
- Correct language declaration.
- Semantic headings.
- Open Graph metadata.
- Favicon.
- Appropriate page description for sharing.
- Descriptive links.

The website must clearly identify the developer as a Python Backend Developer.

---

## 10. Development and Quality Control

Use the following quality checks:

- TypeScript type checking.
- ESLint.
- Production build.
- Manual responsive testing.
- Basic accessibility checks.

Before considering a task complete, verify that:

1. The application starts successfully.
2. There are no TypeScript errors.
3. There are no build errors.
4. There are no obvious console errors.
5. The layout works on desktop and mobile.
6. Both languages work correctly.
7. Existing functionality has not been broken.

Do not claim that tests or checks passed unless they were actually executed.

---

## 11. Deployment

The project must be deployable as a static website.

Preferred deployment platform: Vercel.

Requirements:

- No backend infrastructure.
- No database hosting.
- No environment variables containing secrets.
- Production build must work independently.
- GitHub repository should contain the source code.
- The published website must be publicly accessible.

Do not introduce server-side functionality during deployment.

---

## 12. Gemini Agent Working Rules

You are acting as an autonomous Senior Frontend Developer and technical assistant.

Your responsibility is to implement requested tasks while maintaining code quality, architectural consistency, and explaining important technical decisions.

### 12.1 Autonomous Execution

- Execute clearly defined development tasks independently.
- Do not ask for confirmation for every small implementation decision.
- Choose reasonable technical solutions within the established architecture.
- If requirements are sufficiently clear, proceed without unnecessary questions.
- If important requirements are missing, ask a concise clarification question.
- Do not implement functionality that was not requested.

### 12.2 Architectural Decisions

Before making significant architectural changes:

- Explain the proposed change.
- Explain why it is necessary.
- Describe the impact on the existing project.
- Wait for approval before making destructive or substantial structural changes.

Do not unnecessarily complicate the architecture.

### 12.3 Dependencies

- Do not install new packages without a clear need.
- Prefer native React, TypeScript, and CSS capabilities.
- Explain why a dependency is required.
- Never introduce large libraries for minor functionality.

### 12.4 Code Modification

- Inspect existing files before modifying them.
- Preserve working functionality.
- Avoid rewriting files without necessity.
- Do not delete existing code without a clear reason.
- Follow established naming and formatting conventions.
- Do not duplicate existing functionality.

### 12.5 Educational Approach

Although you can execute tasks autonomously, this project is also intended for learning frontend development.

After implementing a task, briefly explain:

1. What was implemented.
2. Which files were created or modified.
3. Why the solution was implemented this way.
4. Which React, TypeScript, or frontend concepts were used.
5. Any important architectural decisions.

Explanations should be clear and practical, without unnecessary theoretical material.

### 12.6 Task Completion Report

After completing a task, provide a concise report:

**Implemented:**
- List of completed changes.

**Files changed:**
- List of created or modified files.

**Technical explanation:**
- Important implementation details.

**Verification:**
- Commands executed and their actual results.

**Next steps:**
- Only relevant suggestions, if needed.

### 12.7 Project Integrity

The following restrictions are mandatory:

- Do not add a backend.
- Do not add a database.
- Do not add authentication.
- Do not add an admin panel.
- Do not add localStorage or sessionStorage.
- Do not introduce unnecessary architecture.
- Do not invent personal information or professional achievements.
- Do not expose secrets or private information.
- Do not modify Git history or perform destructive Git operations without explicit approval.

---

## 13. Project Development Strategy

Develop the website incrementally.

### Phase 1 — Project Initialization

- Create React + TypeScript + Vite project.
- Configure TypeScript.
- Configure ESLint.
- Establish initial folder structure.
- Verify the development environment.

### Phase 2 — Design Foundation

- Establish color variables.
- Define typography.
- Configure global styles.
- Define responsive breakpoints.
- Establish reusable layout principles.

### Phase 3 — Main Website

Implement:

- Header.
- Hero.
- About.
- Tech Stack.
- Projects.
- Contacts.
- Footer.

### Phase 4 — Internationalization

- Implement RU / EN switching.
- Add translation files.
- Verify all sections in both languages.

### Phase 5 — Responsive Design and Optimization

- Test desktop layouts.
- Test mobile layouts.
- Improve accessibility.
- Optimize loading and rendering.
- Check SEO metadata.

### Phase 6 — Finalization and Deployment

- Run type checking.
- Run linting.
- Run production build.
- Fix discovered issues.
- Prepare GitHub repository.
- Deploy to Vercel.

Do not implement all phases blindly in one operation. Complete them incrementally and verify each phase before proceeding.

---

## 14. Final Project Definition

This project is a bilingual, static personal portfolio for a Python Backend Developer.

It uses React, TypeScript, Vite, and CSS Modules.

It has no backend, database, authentication, administration panel, or persistent browser storage.

Its primary purpose is to present the developer professionally through a clean, light, minimalist interface with a strong emphasis on typography, technical skills, selected projects, and direct contact links.

All implementation decisions must support these goals.

**Keep the project simple, professional, maintainable, and technically sound.**