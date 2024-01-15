import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import YumyumUI from "@yumyum-ui/components";
import "@yumyum-ui/theme-chalk/src/index.scss";

createApp(App).use(YumyumUI).mount("#app");
