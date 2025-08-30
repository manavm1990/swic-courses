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
  video: {
    thumbnail: string;
    url: string;
  } | null;
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
        id: "javascript-introduction",
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
        title: "Variables and Types - React Prep",
        description: "Understanding variables and data types in JavaScript.",
        video: null,
      },
      {
        id: "functions-and-scope",
        title: "Functions and Scope - React Prep",
        description:
          "A review of function concepts in JavaScript, focusing on their relevance in React.",
        video: null,
      },
      {
        id: "objects-and-arrays",
        title: "Objects and Arrays - React Prep",
        description:
          "Master JavaScript objects and arrays - essential data structures for React development.",
        video: null,
      },
    ],
  },
] as const satisfies Module[];
