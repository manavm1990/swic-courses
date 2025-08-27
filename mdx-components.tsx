import { Figure } from "@/components/figure";
import { VideoYT } from "@/components/video-yt";
import { transformerColorizedBrackets } from "@shikijs/colorized-brackets";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import React, { type ReactNode } from "react";
import { createHighlighter, type Highlighter } from "shiki";
import theme from "./src/app/syntax-theme.json";

const IMAGE_PROPS_REGEX = /^[^|]+\|\d+x\d+(\|unoptimized)?$/;

function getTextContent(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";

  if (Array.isArray(node)) return node.map(getTextContent).join("");

  if (typeof node === "object" && "props" in node)
    return getTextContent(
      (node as { props: { children: ReactNode } }).props.children,
    );

  return "";
}

function generateId(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

let highlighter: Highlighter | null = null;

// Cleanup for Shikli Highlighter
export function disposeHighlighter() {
  if (highlighter) {
    highlighter.dispose();
    highlighter = null;
  }
}

async function getHighlighter() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      langs: ["javascript", "css", "html", "bash", "json", "markdown"],
      themes: [theme],
    });
  }
  return highlighter;
}

async function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const out = (await getHighlighter()).codeToHtml(code, {
    lang,
    theme: theme.name,
    transformers: [
      transformerColorizedBrackets({
        themes: {
          "Tailwind CSS": [
            "var(--color-purple-200)",
            "var(--color-cyan-300)",
            "var(--color-blue-300)",
            "var(--color-emerald-300)",
            "var(--color-pink-300)",
            "var(--color-amber-200)",
          ],
        },
      }),
    ],
  });

  return (
    <div
      className="max-w-full overflow-x-auto rounded-lg bg-gray-100 p-3 sm:p-4 dark:bg-gray-800"
      dangerouslySetInnerHTML={{ __html: out }}
    />
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => {
      const id = generateId(getTextContent(children));
      return (
        <h1 id={id}>
          <a href={`#${id}`} className="no-underline hover:underline">
            {children}
          </a>
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = generateId(getTextContent(children));
      return (
        <h2 id={id}>
          <a href={`#${id}`} className="no-underline hover:underline">
            {children}
          </a>
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = generateId(getTextContent(children));
      return (
        <h3 id={id}>
          <a href={`#${id}`} className="no-underline hover:underline">
            {children}
          </a>
        </h3>
      );
    },
    h4: ({ children }) => {
      const id = generateId(getTextContent(children));
      return (
        <h4 id={id}>
          <a href={`#${id}`} className="no-underline hover:underline">
            {children}
          </a>
        </h4>
      );
    },
    img: ({ alt, ...props }) => {
      const schemePlaceholder = encodeURIComponent("{scheme}");
      let width, height, unoptimized;

      /**
       * MD is annotated with image dimensions after the alt tag
       * Can also include unoptimized flag for animated images
       *
       * @example ![alt text|300x200](image.png)
       * @example ![alt text|300x200|unoptimized](animated.gif)
       */
      if (IMAGE_PROPS_REGEX.test(alt)) {
        const parts = alt.split("|");
        [width, height] = parts[1].split("x").map(Number);
        alt = parts[0];
        unoptimized = parts[2] === "unoptimized";
      }

      if (props.src.includes(schemePlaceholder))
        return (
          <>
            <Image
              {...props}
              alt={alt}
              width={width}
              height={height}
              src={props.src.replace(schemePlaceholder, "light")}
              className="dark:hidden"
              unoptimized={unoptimized}
            />

            <Image
              {...props}
              alt={alt}
              width={width}
              height={height}
              src={props.src.replace(schemePlaceholder, "dark")}
              className="not-dark:hidden"
              unoptimized={unoptimized}
            />
          </>
        );

      return (
        <Image
          {...props}
          alt={alt}
          width={width}
          height={height}
          unoptimized={unoptimized}
        />
      );
    },
    async pre(props) {
      const child = React.Children.only(props.children);
      if (!child) return null;
      const { children: code, className } = child.props;
      const lang = className ? className.replace("language-", "") : "";
      return <CodeBlock code={code} lang={lang} />;
    },
    code: ({ children, className }) => {
      // If it's inside a pre tag, let pre handle it
      if (className?.startsWith("language-"))
        return <code className={className}>{children}</code>;

      // Otherwise, it's inline code
      return (
        <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm break-words dark:bg-gray-800">
          {children}
        </code>
      );
    },
    VideoYT: VideoYT,
    Figure: Figure,
    ...components,
  };
}
