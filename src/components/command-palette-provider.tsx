"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { CommandPalette } from "@/components/command-palette";

type CommandPaletteContextValue = {
  openPalette: () => void;
  closePalette: () => void;
};

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(
  null,
);

export function useCommandPalette() {
  const value = useContext(CommandPaletteContext);
  if (!value) {
    throw new Error(
      "useCommandPalette must be used within CommandPaletteProvider",
    );
  }
  return value;
}

export function CommandPaletteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openPalette = useCallback(() => setIsOpen(true), []);
  const closePalette = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      const isEditable =
        tag === "input" ||
        tag === "textarea" ||
        target?.isContentEditable ||
        tag === "select";

      if (isEditable) return;

      const isModK =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isModK) {
        event.preventDefault();
        openPalette();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openPalette]);

  return (
    <CommandPaletteContext.Provider value={{ openPalette, closePalette }}>
      {children}
      <CommandPalette isOpen={isOpen} onClose={closePalette} />
    </CommandPaletteContext.Provider>
  );
}
