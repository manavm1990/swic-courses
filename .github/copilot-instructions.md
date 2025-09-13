# Project Overview

This project is a modern web development course for a community college. The audience is primarily students who are new to web development. They have been exposed to HTML and CSS but have never done any real programming.

This course builds core client-side programming skills using JavaScript. Students will learn to manipulate the DOM, handle events, use control structures, and work with strings, objects, cookies, and browser storage. Emphasis is placed on writing interactive, efficient code and exploring advanced functions.

The course continues on into React and NextJS.

**Lesson Timing**: Design lessons to take approximately 2 hours total (including any pre-work reading). Consider the pace appropriate for community college students new to programming.

## JavaScript Coding Standards

**CRITICAL**: All JavaScript code examples and generated content MUST follow these standards (based on course linting rules):

**Variable Declarations & Modern JavaScript**:
- **Always use `const` instead of `let`**: Use `const` for all variable declarations unless reassignment is absolutely necessary
- **Prefer arrow functions**: Use `() => {}` syntax for cleaner, modern code
- **Use template literals**: Use backticks for string interpolation instead of concatenation
- **Strict equality**: Always use `===` instead of `==`

**Function Design (Educational Focus)**:
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

**Examples**:
```javascript
// ✅ CORRECT - Modern, clean, educational code
const PASSING_GRADE = 70;

const calculateAverage = (grades) => {
  if (!grades.length) {
    return 0;
  }
  
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
};

const students = ['Alice', 'Bob', 'Charlie'];
const message = `Found ${students.length} students`;

// ❌ INCORRECT - Avoid these patterns
// var message = 'Hello'; // Don't use var
// let numbers = [1, 2, 3]; // Use const unless reassignment needed
// function calc(g) { ... } // Poor parameter name
// if (grade == 70) { ... } // Use strict equality ===
```

**Exception**: Only use `let` when variable reassignment is explicitly required and cannot be refactored to use `const`.

## Lesson Template

```md
# Lesson Title

## Introduction

- Icebreaker: Engaging question or scenario related to the topic.
- Real-world scenario: Practical example of the topic's relevance.
- Lesson objectives: Overview of what learners will learn.
- Introduction to the concept: Explain what it is, what it does, and how it fits in the ecosystem.

## Core Concept Overview

- In-depth explanation of the topic
- Key terms and definitions
- Analogy or comparison to simplify complex ideas
- Conceptual quiz (5–10 questions) for knowledge check

## Hands-On Application

- Step-by-step process or framework
- Real-world examples and case studies
- Hands-on activity or simulation
- Enhancement exercise

## Advanced Concepts & Comparisons

- Deeper dive into subtopics
- Comparison with alternative models or frameworks
- Discussion of pros and cons
- Build a simplified real-world application
- Retrospective on application build

## Troubleshooting & Best Practices

- Anticipating common challenges
- Industry best practices for scalability
- Troubleshooting or enhancing a large-scale application
- Questions and suggestions for additional features

## Wrap-Up & Assessment

- Key takeaways and recap of main points
- Advanced conceptual quiz (15–20 questions)
- Hands-on assessment or real-world problem-solving task
```
