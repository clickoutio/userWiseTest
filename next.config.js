const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.inline\.svg$/;
    config.module.rules.push({
      test: /\.inline\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = () => {
  return nextConfig;
};
