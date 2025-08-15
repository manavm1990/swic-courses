import {
  Breadcrumb,
  BreadcrumbHome,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/components/breadcrumbs";
import { ContentLink } from "@/components/content-link";
import { Logo } from "@/components/logo";
import { PageSection } from "@/components/page-section";
import { SidebarLayoutContent } from "@/components/sidebar-layout";
import { getModules } from "@/data/lessons";
import { PlayIcon } from "@/icons/play-icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SWIC Web Development",
  description:
    "A modern web development course that teaches you how to build using real world tools and practices.",
};

export default function Page() {
  const modules = getModules();

  return (
    <SidebarLayoutContent
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator />
          <Breadcrumb>Overview</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute -inset-x-2 top-0 -z-10 h-80 overflow-hidden rounded-t-2xl mask-b-from-60% sm:h-88 md:h-112 lg:-inset-x-4 lg:h-128">
          <div className="absolute inset-0 rounded-t-2xl outline-1 -outline-offset-1 outline-gray-950/10 dark:outline-white/10" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <div className="px-4 pt-48 pb-12 lg:py-24">
              <Logo className="h-8 fill-gray-950 dark:fill-white" />
              <h1 className="sr-only">Course overview</h1>
              <p className="mt-7 max-w-lg text-base/7 text-pretty text-gray-600 dark:text-gray-400">
                A modern web development course that teaches you how to build
                using real world tools and practices. From getting comfortable
                with the terminal and Git to understanding JavaScript as a
                programming language and onwards to React and NextJS.
              </p>

              <div className="mt-10">
                <Link
                  href={`/${modules[0]?.lessons[0]?.id}`}
                  className="inline-flex items-center gap-x-2 rounded-full bg-gray-950 px-3 py-0.5 text-sm/7 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <PlayIcon className="fill-white" />
                  Start the course
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-16 pb-10 sm:px-4">
              {modules.map((module, index: number) => (
                <PageSection
                  key={module.id}
                  id={module.id}
                  title={`Part ${index + 1}`}
                >
                  <div className="max-w-2xl">
                    <h2 className="text-2xl/7 font-medium tracking-tight text-pretty text-gray-950 dark:text-white">
                      {module.title}
                    </h2>
                    <p className="mt-4 text-base/7 text-gray-700 sm:text-sm/7 dark:text-gray-400">
                      {module.description}
                    </p>

                    <ol className="mt-6 space-y-4">
                      {module.lessons.map((lesson) => (
                        <li key={lesson.id}>
                          <ContentLink
                            title={lesson.title}
                            description={lesson.description}
                            href={`/${lesson.id}`}
                            type="video"
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </PageSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarLayoutContent>
  );
}
