// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Optional: Add any SVGR options here
          },
        },
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "static/media/",
            publicPath: "/_next/static/media/",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
