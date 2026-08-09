/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 跳过构建期的静态生成校验
  staticPageGenerationTimeout: 1000,
  experimental: {
    missingSuspenseWithCSROnly: true,
  }
};

module.exports = nextConfig;
