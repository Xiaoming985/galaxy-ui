/**
 * 因为直接引入.vue文件 TS会找不到对应的类型声明
 * 所以需要新建typings（命名没有明确规定，TS会根据tsconfig.json文件来寻找.d.ts文件）文件夹来专门放这些声明文件。
 * 或者安装 Vue.vscode-typescript-vue-plugin 插件
 */
declare module '*.vue' {
  import type { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}