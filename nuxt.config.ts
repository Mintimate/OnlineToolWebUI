// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: true,
    build: {
        transpile: ["compute-scroll-into-view"],
    },
    nitro: {
        devProxy: {
            "/api": {
                target: 'http://127.0.0.1:8083/',
                prependPath: true,
                changeOrigin: true,
            }
        },
    },
    css: ["@arco-design/web-vue/dist/arco.css", "@/assets/css/main.css"],
})
