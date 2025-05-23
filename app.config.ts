import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    preset: "nitro-prerender",
    prerender: {
      routes: [
        "/2025/",
        "/2025/zh/",
        "/2025/en/",
        "/2025/zh/registration",
        "/2025/en/registration",
        "/2025/zh/callforpaper",
        "/2025/en/callforpaper",
        "/2025/zh/venue",
        "/2025/en/venue",
        "/2025/zh/challenge",
        "/2025/en/challenge",
        "/2025/zh/volunteer",
        "/2025/en/volunteer",
      ],
      failOnError: true,
    },
    baseURL: "/2025/",
  },
});
