import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import YummyUI from "@yummy-ui/components";
import "@yummy-ui/theme-chalk/src/index.scss";

createApp(App).use(YummyUI).mount("#app");
