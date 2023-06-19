import {defineNuxtPlugin} from '#app'
import arco from '@arco-design/web-vue';
export default defineNuxtPlugin(
    (nuxtApp) => {
        nuxtApp.vueApp.use(arco)
    }
)
