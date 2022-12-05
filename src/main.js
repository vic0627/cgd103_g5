import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import outComponents from "./components/outComponents.vue";

import "./css/reset.css";
import "./sass/style.scss";

const app = createApp(App);
app.use(router);
app.mount("#app");
