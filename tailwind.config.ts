import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: [],
    theme: {
        fontFamily: {
            sans: ["Roboto Flex", ...defaultTheme.fontFamily.sans],
        },
        container: {
            center: true,
        },
        colors: {
            primary: "rgb(var(--color-primary) / <alpha-value>)",
            secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        },
        // https://github.com/rogden/tailwind-config-viewer?tab=readme-ov-file#themereplacements
        configViewer: {
            themeReplacements: {
                "rgb(var(--color-primary) / <alpha-value>)": "rgb(255 115 179)",
                "rgb(var(--color-secondary) / <alpha-value>)": "rgb(111 114 185)",
            },
        },
        extend: {},
    },
    plugins: [],
} satisfies Config;
