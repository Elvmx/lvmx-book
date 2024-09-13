// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: false },
    css: ["~/assets/css/main.scss", "~/assets/css/theme.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
        },
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => {
                return tag.startsWith("swiper-");
            },
        },
    },
    app: {
        head: {
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
                {
                    rel: "stylesheet",
                    /**
                     * display=swap 页面会闪烁
                     * display=auto | 不设置   页面不会闪烁
                     */
                    href: "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Fira+Code&display=auto",
                },
            ],
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
                },
            ],
        },
    },
});
