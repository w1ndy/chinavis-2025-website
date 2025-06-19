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
        "/2025/zh/doctoralcolloquium",
        "/2025/en/doctoralcolloquium",
        "/2025/zh/committee",
        "/2025/en/committee",
        "/2025/zh/poster",
        "/2025/en/poster",
        "/2025/zh/specialtopic",
        "/2025/en/specialtopic",
        "/2025/zh/exhibition",
        "/2025/en/exhibition",
        "/2025/zh/sponsor",
        "/2025/en/sponsor",
        "/2025/zh/cjkworkshop",
        "/2025/en/cjkworkshop",
      ],
      failOnError: true,
    },
    baseURL: "/2025/",
  },
});
