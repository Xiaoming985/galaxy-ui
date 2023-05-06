import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import GalaxyUI from "@yammy-ui/components";
import "@yammy-ui/theme-chalk/src/index.scss";

createApp(App).use(GalaxyUI).mount("#app");
