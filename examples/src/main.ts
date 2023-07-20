import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import YumyumUI from "@yumyum-ui/components";
// import "@yumyum-ui/theme-chalk/src/index.scss"; // ? 这里没有引进来是为什么（注释了也没有重新编译，ctrl+左键也无法跳转过去）

createApp(App).use(YumyumUI).mount("#app");
