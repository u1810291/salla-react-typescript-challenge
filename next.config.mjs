/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: './dist', // Changes the build output directory to `./dist/`.
  images: {
    loader: 'custom',
    loaderFile: './my/image/loader.js',
  },
  env: {
    API_URL: process.env.API_URL
  }
}
 
export default nextConfig