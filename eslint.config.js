import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import * as mdx from "eslint-plugin-mdx";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  // Next.js and TypeScript for your components
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // MDX configuration
  {
    files: ["**/*.mdx"],
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },

  // Optional: Rules for code blocks inside MDX
  {
    files: ["**/*.mdx"],
    ...mdx.flatCodeBlocks,
  },

  // Prettier (disables conflicting formatting rules)
  ...compat.extends("prettier"),

  // Ignore patterns
  {
    ignores: ["**/node_modules/**", "**/.next/**", "**/out/**", "**/public/**"],
  },
];
