export default {
  reactStrictMode: false, // Disable React Strict Mode
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN hostname here
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/,
      use: 'raw-loader',
    });
    return config;
  },
};
