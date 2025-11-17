import type { Video } from "@/types/video.types";

export type Module = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  video: Video | null;
};

export function getModules() {
  return lessons;
}

export async function getLesson(slug: string): Promise<
  | (Lesson & {
      module: Module;
      next: Lesson | null;
    })
  | null
> {
  const lessonModule = lessons.find(({ lessons }) =>
    lessons.some(({ id }) => id === slug),
  );

  if (!lessonModule) return null;

  const index = lessonModule.lessons.findIndex(({ id }) => id === slug);
  const currentLesson = lessonModule.lessons[index];

  if (!currentLesson) return null;

  const nextLesson = lessonModule.lessons[index + 1] ?? null;

  return {
    ...currentLesson,
    module: lessonModule,
    next: nextLesson,
  };
}

export async function getLessonContent(slug: string) {
  return (await import(`@/data/lessons/${slug}.mdx`)).default;
}

const lessons = [
  {
    id: "environment-setup",
    title: "Development Environment & Setup",
    description:
      "Get your development environment configured and learn essential tools for professional web development.",
    lessons: [
      {
        id: "how-to-learn-programming",
        title: "Welcome to SWIC Web Development",
        description:
          "Course introduction, learning mindset, and how to effectively use AI tools for web development.",
        video: null,
      },
      {
        id: "developer-tools-overview",
        title: "Modern Developer Tools",
        description:
          "Overview of professional development tools: Git, GitHub, VS Code, Node.js, and the modern web development workflow.",
        video: null,
      },
      {
        id: "mac-setup-guide",
        title: "Mac Setup Guide",
        description:
          "Complete setup instructions for Mac users: Homebrew, VS Code, Node.js, and Git.",
        video: null,
      },
      {
        id: "windows-setup-guide",
        title: "Windows Setup Guide",
        description:
          "Step-by-step setup instructions for Windows users with direct downloads and installations.",
        video: null,
      },
      {
        id: "terminal-fundamentals",
        title: "Terminal Fundamentals",
        description:
          "Learn the basics of using the terminal, including navigation, file manipulation, and command execution.",
        video: null,
      },
      {
        id: "git-fundamentals",
        title: "Git Fundamentals",
        description:
          "Learn Git workflow with text files and how to write meaningful commit messages from day one.",
        video: null,
      },
      {
        id: "learn-md",
        title: "Learn Markdown",
        description:
          "Master the basics of Markdown syntax for formatting text documents.",
        video: null,
      },
      {
        id: "terminal-x-git",
        title: "Terminal + Git",
        description: "Reinforce using Git and Terminal commands.",
        video: null,
      },
      {
        id: "node-template-repo",
        title: "Node.js Template Repository",
        description:
          "Learn how to set up a Node.js template repository for your projects.",
        video: null,
      },
    ],
  },
  {
    id: "web-fundamentals",
    title: "Web Development Fundamentals",
    description:
      "Understanding how the web works and introduction to programming concepts that will guide your development journey.",
    lessons: [
      {
        id: "how-computers-and-web-work",
        title: "How Computers and the Web Work",
        description:
          "Understanding the foundational concepts of how computers process information and how the web functions under the hood.",
        video: null,
      },
      {
        id: "js-introduction",
        title: "What is JavaScript?",
        description:
          "Introduction to JavaScript: what it is, what it can do, and how it fits into modern web development.",
        video: null,
      },
      {
        id: "ai-reality-check",
        title: "AI Reality Check: Beyond the Hype",
        description:
          "A balanced look at AI's role in development: separating hype from reality, addressing concerns, and using AI as a learning tool.",
        video: null,
      },
      {
        id: "semantic-html",
        title: "Semantic HTML: Why It Matters",
        description:
          "Learn the importance of semantic HTML for accessibility, SEO, and maintainable code. Avoid common mistakes and write clean, meaningful markup.",
        video: {
          duration: 1222,
          thumbnail: "https://videos.learnjs.tech/swic/videos/html.png",
          url: "https://videos.learnjs.tech/swic/videos/html.mp4",
        },
      },
      {
        id: "css-fundamentals-review",
        title: "CSS Fundamentals Review",
        description:
          "Review essential CSS concepts: selectors, properties, box model, and layout basics. Build the foundation needed for Tailwind and browser-based styling.",
        video: null,
      },
    ],
  },
  {
    id: "js-basics",
    title: "JavaScript Basics",
    description:
      "Learn the fundamentals of JavaScript, including variables, data types, operators, and basic syntax.",
    lessons: [
      {
        id: "js-values-types-ops",
        title: "Values, Types, and Operators",
        description:
          "Explore JavaScript's core data types, operators, and how to work with them effectively.",
        video: null,
      },
      {
        id: "program-structure",
        title: "Program Structure & Variables",
        description:
          "Learn about variables, program structure, and hands-on JavaScript coding using the browser console.",
        video: null,
      },
      {
        id: "control-flow-and-loops",
        title: "Control Flow, Conditionals and Loops",
        description:
          "Learn how programs make decisions with conditionals and handle repetitive tasks with loops - the building blocks of intelligent programs.",
        video: null,
      },
      {
        id: "js-functions",
        title: "JavaScript Functions",
        description:
          "Learn to create reusable blocks of code with functions - the building blocks of organized programming and modular applications.",
        video: null,
      },
      {
        id: "js-objects-and-arrays-basics",
        title: "Objects and Arrays: Data Organization",
        description:
          "Master JavaScript's fundamental data structures for organizing information - objects for related properties and arrays for collections.",
        video: {
          duration: 2134,
          thumbnail: "https://videos.learnjs.tech/swic/videos/objects.png",
          url: "https://videos.learnjs.tech/swic/videos/objects-arrays.mp4",
        },
      },
      {
        id: "callbacks-and-array-methods",
        title: "Callbacks and Array Methods",
        description:
          "Learn to process collections efficiently using callback functions with map, filter, and forEach - turning data transformation into simple, readable code.",
        video: null,
      },
      {
        id: "js-object-methods-intro",
        title: "Object Methods Basics",
        description:
          "Intro to built-in Object helpers: keys, values, entries, assign, and spread. Learn how they pair with map/filter for shaping and inspecting data.",
        video: null,
      },
    ],
  },
  {
    id: "js-modules",
    title: "Modules",
    description:
      "Learn how to organize JavaScript code using ES Modules (ESM): import, export, and best practices for modular development.",
    lessons: [
      {
        id: "modules",
        title: "JavaScript ES Modules (ESM)",
        description:
          "Understand how to split your code into reusable modules using modern JavaScript import/export syntax.",
        video: null,
      },
    ],
  },
  {
    id: "browser-javascript-dom",
    title: "Browser JavaScript & DOM",
    description:
      "Bridge from console JavaScript to interactive web applications by mastering DOM manipulation, event handling, and browser APIs.",
    lessons: [
      {
        id: "console-to-browser",
        title: "From Console to Browser",
        description:
          "Understanding the browser environment, developer tools, and how JavaScript runs in web pages. Setting up your development workflow.",
        video: {
          duration: 801,
          thumbnail: "https://videos.learnjs.tech/swic/videos/dom.png",
          url: "https://videos.learnjs.tech/swic/videos/dom.mp4",
        },
      },
      {
        id: "dom-fundamentals",
        title: "DOM Fundamentals",
        description:
          "What is the DOM? Understanding the document tree structure, nodes vs elements, and how browsers parse HTML into JavaScript objects.",
        video: null,
      },
      {
        id: "selecting-elements",
        title: "Selecting DOM Elements",
        description:
          "Master querySelector and querySelectorAll to find elements. Learn CSS selectors, NodeList vs Arrays, and element relationships.",
        video: null,
      },
      {
        id: "manipulating-content-styles",
        title: "Manipulating Content & Styles",
        description:
          "Change text, HTML content, and styles dynamically. Work with classList to toggle Tailwind classes and create interactive interfaces.",
        video: null,
      },
      {
        id: "creating-elements",
        title: "Creating & Adding Elements",
        description:
          "Generate new DOM elements programmatically. Learn createElement, appendChild, and building dynamic content from JavaScript data.",
        video: null,
      },
      {
        id: "event-handling-basics",
        title: "Event Handling Basics",
        description:
          "Respond to user interactions with addEventListener. Handle clicks, form input, and other events to create responsive web applications.",
        video: null,
      },
      {
        id: "function-components",
        title: "Function Components",
        description:
          "Learn to build reusable UI components with JavaScript functions that return DOM elements. Understand component structure and composition.",
        video: {
          duration: 703,
          thumbnail:
            "https://d8n3.c1.e2-8.dev/swic/videos/function-components.png",
          url: "https://videos.learnjs.tech/swic/videos/function-components.mp4",
        },
      },
      {
        id: "js-local-storage",
        title: "Browser Storage Fundamentals",
        description:
          "Understand how browsers store data with localStorage. Learn when to use it, how to handle errors, and build persistent applications.",
        video: null,
      },
      {
        id: "interactive-project",
        title: "Interactive Project: Task Manager",
        description:
          "Apply DOM manipulation skills to build a functional task manager app with add, edit, delete, and toggle functionality.",
        video: null,
      },
    ],
  },
  {
    id: "js-fundamentals-review",
    title: "JS Review & React Prep",
    description:
      "This review will reacquaint you with the core concepts of JavaScript, including variables, functions, and control flow.",
    lessons: [
      {
        id: "js-variables-and-types",
        title: "Variables and Types",
        description: "Understanding variables and data types in JavaScript.",
        video: null,
      },
      {
        id: "functions-and-scope",
        title: "Functions and Scope",
        description:
          "A review of function concepts in JavaScript, focusing on their relevance in React.",
        video: null,
      },
      {
        id: "objects-and-arrays",
        title: "Objects and Arrays",
        description:
          "Master JavaScript objects and arrays - essential data structures for React development.",
        video: null,
      },
      {
        id: "paradigms",
        title: "Programming Paradigms",
        description:
          "An overview of different programming paradigms (e.g., imperative, functional, object-oriented) and their significance in JavaScript.",
        video: null,
      },
      {
        id: "dom-review-component-patterns",
        title: "DOM Review & Component Patterns",
        description:
          "Review the DOM API and learn component-based thinking patterns in vanilla JavaScript - the foundation for React development.",
        video: null,
      },
    ],
  },
  {
    id: "js-testing",
    title: "Testing & Code Quality",
    description:
      "Professional testing practices for catching bugs before users do - from manual console debugging to automated testing with modern tools.",
    lessons: [
      {
        id: "js-testing-basics",
        title: "JavaScript Testing Basics",
        description:
          "Learn the fundamentals of testing - from console.log debugging to automated testing with Vitest. Perfect introduction for beginners.",
        video: {
          duration: 424,
          thumbnail: "https://videos.learnjs.tech/swic/videos/vitest.png",
          url: "https://videos.learnjs.tech/swic/videos/vitest.mp4",
        },
      },
      {
        id: "js-testing-advanced",
        title: "JavaScript Testing Advanced",
        description:
          "Advanced testing practices including complex data structures, immutability testing, and test-driven development workflow.",
        video: {
          duration: 424,
          thumbnail: "https://videos.learnjs.tech/swic/videos/vitest.png",
          url: "https://videos.learnjs.tech/swic/videos/vitest.mp4",
        },
      },
    ],
  },
  {
    id: "react-fundamentals",
    title: "React Fundamentals",
    description:
      "Build interactive UIs with React. Learn components, state management, props, and modern React patterns through hands-on projects.",
    lessons: [
      {
        id: "react-vite-starter-walkthrough",
        title: "React + Vite Starter Walkthrough",
        description:
          "Walk through Vite’s React starter: index.html root mount point, createRoot/StrictMode in main.jsx, App component with useState and HMR.",
        video: {
          duration: 1084,
          thumbnail:
            "https://d8n3.c1.e2-8.dev/swic/videos/vite-react-count.png",
          url: "https://videos.learnjs.tech/swic/videos/vite-react-count.mp4",
        },
      },
      {
        id: "react-ttt",
        title: "Building Tic-Tac-Toe",
        description:
          "Build a complete tic-tac-toe game following React's official tutorial. Learn state management, component hierarchy, and time travel with immutable updates.",
        video: null,
      },
      {
        id: "react-local-storage",
        title: "localStorage",
        description:
          "Learn how to use localStorage to persist React state across sessions. Build a simple app that saves user preferences and data locally.",
        video: {
          duration: 1181,
          thumbnail: "https://d8n3.c1.e2-8.dev/swic/videos/react-local.png",
          url: "https://videos.learnjs.tech/swic/videos/react-local-storage.mp4",
        },
      },
      {
        id: "react-immutability",
        title: "Immutability",
        description:
          "Learn immutability by flushing out a React to-do app. Understand why immutable updates are crucial for React's rendering performance.",
        video: null,
      },
      {
        id: "react-uncontrolled-forms",
        title: "React Forms: The Modern Uncontrolled Way",
        description:
          "Build a contact form using modern uncontrolled React inputs with the form action prop and FormData.",
        video: null,
      },
    ],
  },
] as const satisfies Module[];
