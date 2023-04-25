import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  build: {
    target: "modules",
    //打包文件目录
    outDir: "es",
    //压缩
    minify: false,
    //css分离
    //cssCodeSplit: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue"],
      input: ["index.ts"],
      output: [
        {
          format: "es",
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: resolve(__dirname, "../../build/es"),
          // dir: 'es', // 对应方式一
          preserveModulesRoot: "src",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: resolve(__dirname, "../../build/lib"),
          // dir: 'lib', // 对应方式一
          preserveModulesRoot: "src",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
      formats: ["es", "cjs"],
      name: "galaxy-ui",
    },
  },
  plugins: [
    vue(),
    // 不配置dts，打包出来的项目只能在js中使用，在ts项目中使用会报错

    // 方式一：
    // dts({
    //   tsConfigFilePath: '../../tsconfig.json',
    // }),
    // dts({
    //   // 指定使用的 tsconfig.json，如果不配置也可以在 components 下新建 tsconfig.json
    //   tsConfigFilePath: '../../tsconfig.json',
    //   // 因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
    //   outputDir: 'lib'
    // })

    // 方式二：
    dts({
      // 指定使用的 tsconfig.json，如果不配置也可以在 components 下新建 tsconfig.json
      tsConfigFilePath: "../../tsconfig.json",
      outputDir: [
        resolve(__dirname, "../../build/es/components"),
        resolve(__dirname, "../../build/lib/components"),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "components"),
    },
  },
});
