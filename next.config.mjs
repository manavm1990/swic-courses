import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  turbopack: {},
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [new URL("https://d8n3.c1.e2-8.dev/swic/**")],
    domains: ["y.yarn.co"],
  },
};

export default withMDX(nextConfig);
