import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

import { getModules } from "@/data/lessons";

type SearchDoc = {
  id: string;
  slug: string;
  path: string;
  title: string;
  moduleTitle: string;
  text: string;
  excerpt: string;
};

function mdxToPlainText(source: string): string {
  let text = source;

  text = text.replace(/^(import|export).*$\n?/gm, "");
  text = text.replace(/```[\s\S]*?```/g, "");
  text = text.replace(/`([^`]+)`/g, "$1");
  text = text.replace(/<\/?[^>]+>/g, "");
  text = text.replace(/^#+\s+/gm, "");
  text = text.replace(/\*\*([^*]+)\*\*/g, "$1");
  text = text.replace(/\*([^*]+)\*/g, "$1");
  text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");
  text = text.replace(/\s+/g, " ").trim();

  return text;
}

export async function GET() {
  const modules = getModules();
  const docs: SearchDoc[] = [];

  for (const module of modules) {
    for (const lesson of module.lessons) {
      const slug = lesson.id;
      const filePath = path.join(
        process.cwd(),
        "src",
        "data",
        "lessons",
        `${slug}.mdx`,
      );

      let raw = "";
      try {
        raw = await fs.readFile(filePath, "utf8");
      } catch {
        raw = "";
      }

      const text = mdxToPlainText(raw);
      const excerpt = text.slice(0, 240);

      docs.push({
        id: slug,
        slug,
        path: `/${slug}`,
        title: lesson.title,
        moduleTitle: module.title,
        text,
        excerpt,
      });
    }
  }

  return NextResponse.json({ docs });
}
