/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: [
    //         "images.pexels.com/",
    //         "https://dummyjson.com/",
    //         "https:/fakestoreapi.com",
    //     ]
    // }
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyjson.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
            },
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
            },
        ],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
