import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "./css/reset.css"
import './sass/style.scss'
import { MotionPlugin } from '@vueuse/motion'
const app = createApp(App)
app.use(MotionPlugin)
app.use(router)

app.mount('#app')