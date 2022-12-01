import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import "./css/reset.css"
import './sass/style.scss'

const app = createApp(App)
app.use(ViewUIPlus)
app.use(router)
app.mount('#app')