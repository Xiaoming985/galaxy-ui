import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import GalaxyUI from "@galaxy-ui/components";
import "@galaxy-ui/theme-chalk/src/index.scss";

createApp(App).use(GalaxyUI).mount("#app");
