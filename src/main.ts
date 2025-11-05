import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n/index'
import './style.css'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

app.use(i18n)
app.use(head)
app.mount('#app')