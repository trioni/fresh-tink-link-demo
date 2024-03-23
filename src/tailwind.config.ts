import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    colors: ({ colors }) => ({
      ...colors,
      "teal": "#427782",
      "gray": "#f5f8f9",
    }),
  },
} satisfies Config
