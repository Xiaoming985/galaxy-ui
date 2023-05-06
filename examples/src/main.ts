import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import YammyUI from "@yammy-ui/components";
import "@yammy-ui/theme-chalk/src/index.scss";

createApp(App).use(YammyUI).mount("#app");
