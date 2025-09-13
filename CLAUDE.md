# CLAUDE.md

This file provides guidance for Claude when working with the modern web development course platform for Southwestern Illinois College (SWIC).

## Role & Context

Claude assists with content creation, code development, and educational design for this community college web development course. The primary audience is students new to programming who have basic HTML/CSS knowledge but no JavaScript experience.

## Content Creation Guidelines

### Lesson Development Philosophy

- **Progressive Learning**: Build from simple concepts to complex applications
- **Practical Focus**: Emphasize real-world, applicable skills over theoretical concepts
- **Interactive Approach**: Include hands-on activities, code examples, and assessments
- **Clear Progression**: Each lesson should build logically on previous knowledge
- **Appropriate Pacing**: Design lessons for ~2 hours total (including pre-work), suitable for community college students new to programming

### Lesson Template Usage

Follow the streamlined template structure:

```md
## Introduction

- Engaging icebreaker or real-world scenario
- Clear learning objectives
- Context within the broader course

## Core Concept Overview

- In-depth explanation with analogies
- Key terms and definitions
- Conceptual knowledge check (5-10 questions)

## Hands-On Application

- Step-by-step guided practice
- Real-world examples
- Interactive coding activities

## Advanced Concepts & Comparisons

- Deeper exploration of the topic
- Comparison with alternatives
- Building a practical application

## Troubleshooting & Best Practices

- Common pitfalls and solutions
- Industry standards and practices
- Performance and maintainability tips

## Wrap-Up & Assessment

- Key takeaways summary
- Comprehensive assessment (15-20 questions)
- Hands-on project or problem-solving task
```

### Content Standards

**Tone & Voice**:

- Conversational and encouraging
- Clear explanations without condescension
- Acknowledge that programming concepts can be challenging
- Use analogies from everyday life to explain technical concepts

**Code Examples**:

- Always provide complete, working examples
- Include comments explaining key concepts
- Start simple and gradually increase complexity
- Test all code before inclusion

**JavaScript Coding Standards** (CRITICAL - Based on Course Linting Rules):

**Variable Declarations & Modern JavaScript**:
- **Always use `const` instead of `let`**: Use `const` for all variable declarations unless reassignment is absolutely necessary
- **Prefer arrow functions**: Use `() => {}` syntax for cleaner, modern code
- **Use template literals**: Use backticks for string interpolation instead of concatenation
- **Strict equality**: Always use `===` instead of `==`

**Function Design (Keep Examples Simple & Educational)**:
- **Single responsibility**: Each function should do one clear thing
- **Keep functions short**: Aim for functions under 15 lines (excluding comments)
- **Limit parameters**: Maximum 3-4 parameters per function
- **Use descriptive names**: Function and variable names should be self-explanatory
- **Early returns**: Avoid `else` after `return` statements

**Code Clarity & Maintainability**:
- **Meaningful variable names**: Minimum 3 characters (except loop counters: i, j, k)
- **camelCase naming**: Consistent naming convention throughout
- **Avoid nested complexity**: Keep nesting levels shallow for readability
- **No nested ternary operators**: Use clear if/else for complex conditions

**Immutability & Best Practices**:
- **No parameter mutation**: Don't modify function parameters
- **Prefer immutable operations**: Use array methods like `map`, `filter` instead of loops when possible
- **One variable per declaration**: Avoid `let a, b, c;` style declarations
- **Consistent returns**: Functions should always return a value or never return

**Examples should demonstrate these standards while remaining educational and approachable.**

**Technical Accuracy**:

- Use modern JavaScript standards (ES2024/ES2025 features where appropriate)
- Follow modern best practices
- Ensure compatibility with course tech stack (Next.js, React, TypeScript)
- Validate against the existing codebase patterns

## Development Context

### Technology Stack Understanding

- **Runtime**: Bun for package management and development
- **Framework**: Next.js 15 with App Router and React 19
- **Content**: MDX files with TypeScript integration
- **Styling**: TailwindCSS 4 with design tokens
- **Code Quality**: ESLint, Prettier, and strict TypeScript

### Course Structure

- **Lesson Registry**: `src/data/lessons.ts` contains all lesson metadata
- **Content Files**: Individual lessons in `src/data/lessons/{lesson-id}.mdx`
- **Hierarchical Organization**: Modules containing multiple related lessons
- **Video Integration**: Metadata-driven video player with timestamp navigation

### Key Functions for Content Access

```javascript
// Access lesson data
const lesson = getLesson(lessonId);
const modules = getModules();
```

## Content Creation Workflow

### Adding New Lessons

1. **Plan Learning Objectives**: Define what students will accomplish
2. **Create Lesson Metadata**: Add entry to appropriate module in `lessons.ts`
3. **Draft Content**: Follow lesson template structure in MDX format
4. **Include Assessments**: Add both conceptual and hands-on evaluations
5. **Test Integration**: Verify lesson renders correctly in development
6. **Review Progression**: Ensure lesson fits logically in course sequence

### Code Example Standards

```javascript
// Good: Clear, commented, complete
function greetUser(name) {
  // Validate input to handle edge cases
  if (!name) {
    return "Hello, stranger!";
  }

  // Create personalized greeting
  return `Hello, ${name}!`;
}

// Demonstrate usage
console.log(greetUser("Sarah")); // "Hello, Sarah!"
console.log(greetUser("")); // "Hello, stranger!"
```

### Assessment Design

- **Conceptual Quizzes**: Test understanding of core principles
- **Hands-On Activities**: Apply concepts through coding exercises
- **Real-World Applications**: Connect learning to practical scenarios
- **Progressive Difficulty**: Start accessible, build to challenging

## Student Success Focus

### Learning Support Strategies

- Provide multiple explanation approaches for difficult concepts
- Include troubleshooting sections for common errors
- Offer extension activities for advanced learners
- Create clear pathways between lessons

### Accessibility Considerations

- Use clear, descriptive headings and structure
- Provide alternative explanations for visual concepts
- Include keyboard navigation considerations in code examples
- Test content readability and comprehension

## Quality Assurance

### Content Review Checklist

- [ ] Learning objectives clearly stated and achievable
- [ ] Code examples are complete and functional
- [ ] Assessments align with stated objectives
- [ ] Content follows progressive difficulty curve
- [ ] Real-world applications are relevant and current
- [ ] Troubleshooting section addresses likely student issues

### Technical Validation

- [ ] MDX syntax is correct and renders properly
- [ ] All code examples execute without errors
- [ ] Links and references are accurate and current
- [ ] Content integrates properly with existing course structure

## Communication Guidelines

When working with course content:

- **Ask Clarifying Questions**: Ensure understanding of specific learning goals
- **Provide Options**: Offer multiple approaches when appropriate
- **Explain Decisions**: Justify content and structural choices
- **Consider Sequence**: Think about how each lesson connects to others
- **Focus on Students**: Always prioritize student learning outcomes

This documentation should be updated as the course evolves and new patterns emerge in content creation and student feedback.
