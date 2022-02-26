import reactPlugin from "vite-plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const config = {
  jsx: "react",
  plugins: [
    reactPlugin,
    /* VitePWA({
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Dealthy",
        short_name: "Dealthy",
        description: "Medical care in your house",
        theme_color: "#FF66C4",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }), */
  ],
};

export default config;
