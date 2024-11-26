// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: "./",
    output: 'export',  // Enables static HTML export
    images: {
        unoptimized: true // Required for static export
    }
}

module.exports = nextConfig