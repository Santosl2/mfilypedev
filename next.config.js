module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });

    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    SITE_NAME: process.env.SITE_NAME,
  },
};
