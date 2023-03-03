import { resolve } from("path");
import { defineConfig } from("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                aboutUs: resolve(__dirname, "about-us.html"),
                
            },
        },
    },
});