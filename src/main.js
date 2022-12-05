import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import navComponentsVue from './components/navComponents.vue';
import footerComponentsVue from './components/footerComponents.vue';


import "./css/reset.css"
import './sass/style.scss'

const app = createApp(App)
app.component('nav-component', navComponentsVue)
app.component('footer-component', footerComponentsVue)
app.use(router)
app.mount('#app')