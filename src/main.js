import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { Photo } from './components'

const app = createApp(App)

app.use(router)
app.mount('#app')

export default {
    install: (app) => {
        app.component('Photo', Photo);
    }
};
