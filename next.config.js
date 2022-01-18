module.exports = {
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });

    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    SITE_NAME: process.env.SITE_NAME,
  },
};
