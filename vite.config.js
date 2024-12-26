import {defineConfig} from "vite";
import webExtension, { readJsonFile } from "vite-plugin-web-extension";

const target = process.env.TARGET || "chrome";

export default defineConfig({
  plugins: [
    webExtension({
      browser: target,
      manifest: () => {
        const pkg = readJsonFile("package.json");
        const template = readJsonFile("./manifest.json");

        return {
          ...template,
          version: pkg.version,
        };
      },
    }),
  ],
});
