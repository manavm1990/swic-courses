# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern web development course platform built for Southwestern Illinois College (SWIC). The platform serves as an educational resource for community college students who are new to web development, teaching JavaScript fundamentals, DOM manipulation, React, and Next.js.

The course content is structured as a series of modules containing individual lessons, with video content and interactive MDX-based lesson materials.

## Development Commands

### Core Development
- **Start development server**: `bun run dev` - Launches Next.js development server with hot reload
- **Build for production**: `bun run build` - Creates optimized production build
- **Start production server**: `bun run start` - Serves the production build

### Code Quality
- **Lint code**: `bunx eslint .` - Runs ESLint across the codebase including MDX files
- **Format code**: `bunx prettier --write .` - Formats all files using Prettier
- **Type checking**: `bunx tsc --noEmit` - Validates TypeScript types without compilation

### Testing Individual Components
Since this is primarily a content platform, testing is typically done through the development server:
- **Test specific lesson**: Navigate to `http://localhost:3000/{lesson-id}` in development
- **Preview specific module**: Check navigation and content rendering for each module

## Architecture Overview

### Content Management System
The platform uses a custom content management approach:
- **Lesson Data**: `src/data/lessons.ts` contains the centralized lesson registry with metadata
- **MDX Content**: Individual lesson content stored in `src/data/lessons/{lesson-id}.mdx`
- **Course Structure**: Hierarchical organization with modules containing multiple lessons

### Key Architectural Patterns
- **Static Site Generation**: Next.js App Router with static exports for optimal performance
- **MDX Processing**: Course content written in MDX, processed at build time with custom components
- **Type-Safe Content**: Strong TypeScript typing for lesson and module structures
- **Responsive Layout**: Sidebar navigation with mobile-responsive design using Tailwind CSS

### Core Components
- **SidebarLayout**: Main layout wrapper managing navigation state and responsive behavior
- **Video Player**: Custom video component with picture-in-picture support and timestamp navigation
- **Content Components**: Specialized components for course content (breadcrumbs, navigation links, etc.)

### Data Flow
1. Lesson metadata defined in `lessons.ts` with strongly-typed interfaces
2. MDX content files correspond to lesson IDs for dynamic content loading  
3. `getModules()` and `getLesson()` functions provide data access layer
4. Components consume typed data for rendering course structure

## Content Development

### Adding New Lessons
1. Add lesson metadata to the appropriate module in `src/data/lessons.ts`
2. Create corresponding MDX file in `src/data/lessons/{lesson-id}.mdx`
3. Ensure video metadata (if applicable) includes duration, thumbnail, and URL
4. Test lesson rendering and navigation in development mode

### Lesson Template Structure
Based on the copilot instructions, lessons should follow this pedagogical structure:
- Introduction (icebreaker, real-world scenario, objectives)
- Core Concept Overview (in-depth explanation, key terms, conceptual quiz)
- Hands-On Application (step-by-step process, examples, activities)
- Advanced Concepts & Comparisons (deeper dive, pros/cons, applications)
- Troubleshooting & Best Practices (common challenges, industry practices)
- Wrap-Up & Assessment (key takeaways, advanced quiz, hands-on assessment)

### Video Integration
Videos are integrated through the lesson metadata system:
- Thumbnail images should use appropriate aspect ratios
- Duration in seconds for progress tracking
- URLs can be external assets or local files

## Development Environment Setup

This project uses:
- **Bun** as the package manager and runtime
- **Next.js 15** with App Router and React 19
- **TailwindCSS 4** for styling with design tokens
- **TypeScript** with strict configuration
- **MDX** for content authoring with syntax highlighting via Shiki

### Key Configuration Files
- `next.config.mjs`: Next.js configuration with MDX processing
- `eslint.config.js`: ESLint setup including MDX-specific rules
- `tsconfig.json`: Strict TypeScript configuration with path aliases
- `.prettierrc`: Code formatting rules with import organization

## Deployment Considerations

The platform is designed as a static site that can be deployed to any static hosting provider:
- All content is processed at build time
- No server-side dependencies for content delivery
- Optimized for fast loading with static asset optimization
- Video content served from external CDN (assets.tailwindcss.com)

## Content Guidelines

### Target Audience
- Community college students new to web development
- Students with basic HTML/CSS knowledge but no programming experience
- Progressive skill building from JavaScript fundamentals to React/Next.js

### Content Philosophy
- Emphasis on practical, real-world applications
- Interactive code examples and hands-on activities
- Building core programming concepts through JavaScript
- Industry best practices and modern development tools
