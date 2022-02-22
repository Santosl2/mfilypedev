module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "images.unsplash.com",
      "i.imgur.com",
    ],
  },
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });

    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    SITE_NAME: process.env.SITE_NAME,
    GITHUB_URL: process.env.GITHUB_URL,
    LINKEDIN_URL: process.env.LINKEDIN_URL,
    INSTAGRAM_URL: process.env.INSTAGRAM_URL,
  },
};
