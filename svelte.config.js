// svelte.config.js
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const dev = process.argv.includes("dev");

export default {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        // Set the base path for GitHub Pages
        paths: {
            base: dev ? "" : process.env.BASE_PATH, // Replace 'your-repo-name' with your GitHub repository name
        },
        // Other configuration options
    },
};
