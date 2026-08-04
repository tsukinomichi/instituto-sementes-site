import type { NextConfig } from "next";

const isPagesBuild = process.env.PAGES_BUILD === "true";
const pagesBasePath = isPagesBuild ? "/instituto-sementes-site" : "";

const nextConfig: NextConfig = {
  output: isPagesBuild ? "export" : undefined,
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath,
  trailingSlash: isPagesBuild,
  images: { unoptimized: isPagesBuild },
};

export default nextConfig;
