/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.salla.network',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL
  }
}
 
export default nextConfig