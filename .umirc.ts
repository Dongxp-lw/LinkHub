import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "home" }
  ],
  npmClient: 'pnpm',
  headScripts:[{src:'//at.alicdn.com/t/c/font_4156478_cfbghzwhe3h.js'}]
});
