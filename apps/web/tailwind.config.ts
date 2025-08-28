import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  presets: [
    // TODO: extend shared preset when available
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
