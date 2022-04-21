import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import "./assets/main.scss";

createApp(App).use(router).use(createPinia()).mount("#app");
