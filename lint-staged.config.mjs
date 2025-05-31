import path from "node:path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

export default {
  "*.{ts,tsx,mdx}": ["prettier --write", buildEslintCommand],
  "*.{json,md}": ["prettier --write"],
};
