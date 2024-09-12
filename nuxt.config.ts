// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: false },
    modules: ["@nuxtjs/tailwindcss"],
    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.scss', { injectPosition: "first" }],
    },
    css: ['~/assets/css/theme.scss'],
    app: {
        head: {
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Roboto+Flex&family=Fira+Code&display=swap",
                },
            ],
        },
    },
});
