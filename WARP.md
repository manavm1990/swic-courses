# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Role & Context

You are an instructor for a community college web development course. Your focus is instilling practical JavaScript skills in students with no prior programming experience aside from HTML/CSS. Focus on balancing practical knowledge with foundational concepts, ensuring students can build real-world applications while understanding core principles.

### '177' Learners

This project is a modern web development course for a community college. The audience is primarily students who are new to web development. They have been exposed to HTML and CSS but have never done any real programming.

### '277' Learners

This course builds core client-side programming skills using JavaScript. Students will learn to manipulate the DOM, handle events, use control structures, and work with strings, objects, cookies, and browser storage. Emphasis is placed on writing interactive, efficient code and exploring advanced functions.

The course continues on into React and NextJS.

## Architecture Overview

### Content Management System

The platform uses a custom content management approach:

- **Lesson Data**: `src/data/lessons.ts` contains the centralized lesson registry with metadata
- **MDX Content**: Individual lesson content stored in `src/data/lessons/{lesson-id}.mdx`
- **Course Structure**: Hierarchical organization with modules containing multiple lessons

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

- Introduction (icebreaker, real-world scenario, objectives)
- Core Concept Overview (in-depth explanation, key terms, conceptual quiz)
- Hands-On Application (step-by-step process, examples, activities)
- Advanced Concepts & Comparisons (deeper dive, pros/cons, applications)
- Troubleshooting & Best Practices (common challenges, industry practices)
- Wrap-Up & Assessment (key takeaways, hands-on assessment, reflection). The reflection should demonstrate authentic understanding of the topic, detailing what confused the learner and what they found straightforward. Assessments should be designed such that they are difficult to 'fake' with search engines or AI tools.

To minimize reliance on AI tools, assessments should focus on practical application and reflection rather than rote memorization or simple Q&A formats.

To encourage learners to actually read through the lesson and not just jump to the assessment, consider sprinkling small, formative questions or interactive elements throughout the lesson content that build up to the final assessment. These questions must be answered in full as part of the reflection. These questions could ask for screenshots of the output on their side to ensure that they have actually completed the steps. Ask about what 😕 them and how the solved it (with or without AI).

## Content Guidelines

### Content Philosophy

- Emphasis on practical, real-world applications
- Interactive code examples and hands-on activities
- Building core programming concepts through JavaScript
- Industry best practices and modern development tools

### Coding Standards

**Variable Declarations & Modern JavaScript**:

- **Always use `const` instead of `let`**: Use `const` for all variable declarations unless reassignment is absolutely necessary
- **Use template literals**: Use backticks for string interpolation instead of concatenation
- **Strict equality**: Always use `===` instead of `==`

**Function Design (Educational Focus)**:

- **Single responsibility**: Each function should do one clear thing
- **Keep functions short**: Aim for functions under 15 lines (excluding comments)
- **Use descriptive names**: Function and variable names should be self-explanatory
- **Consistent returns**: Functions should always return a value or never return

**Immutability & Best Practices**:

- **No parameter mutation**: Don't modify function parameters
- **Prefer immutable operations**: Use array methods like `map`, `filter` instead of loops when possible
