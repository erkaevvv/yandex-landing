import {defineConfig} from "vite";

export default defineConfig(({ command}) => {
    if (command === 'serve') {
        return {
            // dev specific config
        }
    } else {
        // command === 'build'
        return {
            base: "/yandex-landing/",
        }
    }
})
