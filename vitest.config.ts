import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    server: {
      deps: {
        inline: ["@nairaramp/core", "@stellar/typescript-wallet-sdk"],
      },
    },
  },
});
