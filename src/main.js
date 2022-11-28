<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
=======
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";
>>>>>>> ADAM

import "./css/reset.css";
import "./sass/style.scss";

<<<<<<< HEAD
const app = createApp(App);
app.use(ViewUIPlus);
app.use(router);
app.mount("#app");
=======
const app = createApp(App)
app.use(router)
app.mount('#app')
>>>>>>> dev
