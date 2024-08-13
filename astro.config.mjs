import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";
import compress from "astro-compress";

// https://astro.build/config
//参考 https://x.gd/M8u7R
export default defineConfig({
  server: {
    // 他の端末からローカルサーバを確認させせたいので、hostをtrueにする
    host: true,
    // 開発サーバーが立ち上がったらブラウザを自動で開かせる
    open: true
  },
  integrations: [
    sitemap(),
    tailwind(),
    relativeLinks(), // 相対リンクに対応
    compress({
      html: true,
      svg: true,
      png: true,
      jpeg: true,
      jpg: true
    }),
    relativeLinks()
  ],
  build: {
    assets: "assets/js"
  },
  vite: {
    build: {
      // minifyを有効にする場合はtrueにする
      minify: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split(".").at(-1);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = "images";
            }
            if (/css|scss/i.test(extType)) {
              extType = "styles";
            }
            return `assets/${extType}/[hash][extname]`;
          },
          entryFileNames: "assets/js/[hash].js"
        }
      }
    }
  }
});
