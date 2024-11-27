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
};

export default nextConfig;
