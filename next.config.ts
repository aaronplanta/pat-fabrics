import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },

    basePath: isProd ? '/pat-fabrics' : '',
    assetPrefix: isProd ? '/pat-fabrics/' : '',

    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;