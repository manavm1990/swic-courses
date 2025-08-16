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
    id: "fundamentals",
    title: "Environment & Fundamentals",
    description:
      "Get set up with the essential tools for web development and learn the fundamentals of programming mindset, version control, and JavaScript basics.",
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
    ],
  },
] as const satisfies Module[];
