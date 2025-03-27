import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Exercice 16",
  description: "Revue de code documentée",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Noé Pételle", link: "/noe-petelle" },
      { text: "Marc-André Bilodeau", link: "/marcandre-bilodeau" },
    ],
  },
});
