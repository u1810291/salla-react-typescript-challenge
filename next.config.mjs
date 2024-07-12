/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: './dist', // Changes the build output directory to `./dist/`.
  images: {
    loader: 'custom',
    loaderFile: '/public/images/icons/spinner.svg',
  },
  env: {
    API_URL: process.env.API_URL
  }
}
 
export default nextConfig