import type { Config } from "tailwindcss";

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        container: {
            center: true,
        },
        // https://github.com/rogden/tailwind-config-viewer?tab=readme-ov-file#themereplacements
        configViewer: {
            themeReplacements: {
                "rgb(var(--color-primary) / <alpha-value>)": "rgb(255 115 179)",
                "rgb(var(--color-secondary) / <alpha-value>)": "rgb(111 114 185)",
            },
        },
        extend: {
            fontFamily: {
                roboto: ["Roboto Flex"],
            },
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
} satisfies Config;
