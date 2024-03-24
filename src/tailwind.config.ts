import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    colors: ({ colors }) => ({
      ...colors,
      "teal": {
        ...colors.teal,
        DEFAULT: "#427782",
        dark: "#3c6d77",
      },
      "gray": {
        ...colors.gray,
        DEFAULT: "#f5f8f9",
      },
    }),
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
  },
} satisfies Config;
