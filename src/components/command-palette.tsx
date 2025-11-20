"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { useSearch } from "@/hooks/use-search";

type CommandPaletteProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const { search, isLoading, error } = useSearch();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const results = useMemo(() => search(query), [search, query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [isOpen]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!results.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      const result = results[activeIndex];
      if (result) {
        router.push(result.path);
        onClose();
      }
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:pt-24"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/40" />

      <DialogPanel className="relative w-full max-w-xl rounded-xl border border-gray-200 bg-white shadow-xl dark:border-white/10 dark:bg-gray-900">
        <div className="border-b border-gray-200 px-4 py-2.5 dark:border-white/10">
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search lessons by title or content…"
            className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
          />
        </div>

        <div className="max-h-80 overflow-y-auto px-1 py-2 text-sm">
          {isLoading && (
            <div className="px-3 py-2 text-gray-500">Loading…</div>
          )}

          {error && (
            <div className="px-3 py-2 text-red-600">
              Failed to load search index.
            </div>
          )}

          {!isLoading && !error && !results.length && query && (
            <div className="px-3 py-2 text-gray-500">
              No results for “{query}”.
            </div>
          )}

          {!query && !isLoading && (
            <div className="px-3 py-2 text-gray-500">
              Start typing to search across all lessons.
            </div>
          )}

          <ul>
            {results.map((result, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={result.id}>
                  <button
                    type="button"
                    onClick={() => {
                      router.push(result.path);
                      onClose();
                    }}
                    className={`flex w-full flex-col items-start gap-1 rounded-md px-3 py-2 text-left ${
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800/60"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {result.title}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {result.moduleTitle}
                      </span>
                    </div>
                    {result.excerpt && (
                      <p className="line-clamp-2 text-xs text-gray-600 dark:text-gray-400">
                        {result.excerpt}
                      </p>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
