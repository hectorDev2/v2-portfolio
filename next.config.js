/** @type {import('next').NextConfig} */
const nextConfig = {
   async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: '*',
        has: [
          {
            type: 'host',
            value: 'http://localhost:8888/wordpress',
          },
        ],
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
