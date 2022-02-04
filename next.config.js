/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  swcMinify: false,
  assetPrefix: isProd ? 'https://raw.githubusercontent.com/daoan1412/cv2022/main/docs' : '',
}

module.exports = nextConfig
