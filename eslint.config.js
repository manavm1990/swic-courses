import { FlatCompat } from "@eslint/eslintrc";
import * as mdx from "eslint-plugin-mdx";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  // Next.js and TypeScript for your components
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.mdx"],
    ...mdx.flat,

    // * Keep stuff below the flattening above ☝️.
    languageOptions: {
      globals: {
        VideoYT: "readonly",
      },
    },
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },

  // Optional: Rules for code blocks inside MDX
  {
    files: ["**/*.mdx"],
    ...mdx.flatCodeBlocks,
  },

  ...compat.extends("prettier"),
  {
    ignores: ["**/node_modules/**", "**/.next/**", "**/out/**", "**/public/**"],
  },
];
