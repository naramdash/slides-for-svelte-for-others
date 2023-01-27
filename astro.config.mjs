import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), vue(), mdx()],
  site: "https://naramdash.github.io",
  base: "/slides-for-svelte-for-others",
});
