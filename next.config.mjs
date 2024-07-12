/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: './dist', // Changes the build output directory to `./dist/`.
  env: {
    API_URL: process.env.API_URL
  }
}
 
export default nextConfig