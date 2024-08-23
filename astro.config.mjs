import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import relativeLinks from 'astro-relative-links';
import compress from 'astro-compress';

//参考 https://x.gd/M8u7R

// https://astro.build/config
export default defineConfig({
  server: {
    // 他の端末からローカルサーバを確認させせたいので、hostをtrueにする
    host: true,
    // 開発サーバーが立ち上がったらブラウザを自動で開かせる
    open: true,
  },
  integrations: [
    sitemap(),
    tailwind(),
    relativeLinks(),
    // (await import('@playform/compress')).default({
    //   CSS: false,
    //   HTML: false,
    //   JavaScript: false,
    //   Image: true,
    //   SVG: true,
    // }),
    compress({
      HTML: false,
      CSS: false,
      SVG: true,
      // PNG: true,
      // JPEG: true,
      // JPG: true,
      Image: false,
    }),
  ],
  build: {
    assets: 'assets/js',
  },
  vite: {
    build: {
      //cssMinify: true, // CSSの圧縮
      // minifyを有効にする場合はtrueにする
      minify: true,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').at(-1);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'images';
            }
            if (/css|scss/i.test(extType)) {
              extType = 'styles';
            }
            return `assets/${extType}/[hash][extname]`;
          },
          entryFileNames: 'assets/js/[hash].js',
        },
      },
    },
  },
});
