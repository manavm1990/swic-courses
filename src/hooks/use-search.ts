"use client";

import { useCallback, useEffect, useState } from "react";
import Fuse from "fuse.js";

type SearchDoc = {
  id: string;
  slug: string;
  path: string;
  title: string;
  moduleTitle: string;
  text: string;
  excerpt: string;
};

type SearchResult = SearchDoc & { score: number };

export function useSearch() {
  const [fuse, setFuse] = useState<Fuse<SearchDoc> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadIndex() {
      try {
        setIsLoading(true);
        const res = await fetch("/search-index");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as { docs: SearchDoc[] };

        if (cancelled) return;

        const fuseInstance = new Fuse(data.docs, {
          keys: ["title", "moduleTitle", "text"],
          includeScore: true,
          threshold: 0.3,
          ignoreLocation: true,
        });

        setFuse(fuseInstance);
        setError(null);
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    loadIndex();
    return () => {
      cancelled = true;
    };
  }, []);

  const search = useCallback(
    (query: string): SearchResult[] => {
      if (!fuse) return [];
      const trimmed = query.trim();
      if (!trimmed) return [];
      return fuse
        .search(trimmed)
        .slice(0, 20)
        .map((r) => ({ ...r.item, score: r.score ?? 0 }));
    },
    [fuse],
  );

  return { search, isLoading, error };
}
