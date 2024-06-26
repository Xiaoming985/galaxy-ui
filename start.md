### 参考
- monorepo + pnpm + vite + vue + ts + vitepress 搭建UI组件库：
  - https://github.com/huccct/tass-ui
  - https://www.404bugs.com/index.php/details/1076509603444609024
  - https://blog.csdn.net/qq_45225759/article/details/127889381
  - https://github.com/wei-design/web-vue/blob/feature/major-dev/start.md
  - https://www.bilibili.com/video/BV16S4y1P7DZ/?spm_id_from=333.337.search-card.all.click&vd_source=e6e19c70d43e7c7a7d1579a12601c7e7
  - https://www.bilibili.com/video/BV1aT4y1z7Qo/?spm_id_from=333.788&vd_source=e6e19c70d43e7c7a7d1579a12601c7e7
- 配置eslint + prettier：
  - https://blog.csdn.net/long_cheng_lv/article/details/126690741

### 安装pnpm
```
npm install -g pnpm
```

### 初始化项目
```
mkdir yumyum-ui
cd yumyum-ui
pnpm init # @yumyum-ui 为组织名，发布npm包时，需要新建一个组织
```

### 新建.npmrc文件

### 新建pnpm-workspace.yaml文件
pnpm-workspace.yaml defines the root of the workspace and enables you to include / exclude directories from the workspace. 默认情况下，包含所有子目录。
```yaml
# pnpm-workspace.yaml
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```
即使使用了自定义目录位置通配符，根目录下的package目录也总是被包含.
```yaml
# 当前项目配置
packages:
  - packages/** # 存放所有组件
  - docs # 文档
  - examples # 使用案例
```

### 新建packages、docs、examples目录

### 进入examples目录，手动搭建一个vite项目
```
pnpm init
pnpm install vue@next typescript sass -D -w
pnpm install vite @vitejs/plugin-vue vue-tsc -D
添加启动脚本 "script": {"dev": "vite"}
# 开发环境中的依赖一般全部安装在整个项目根目录下，方便每个包都可以引用，所以在安装的时候需要加个 -w
# 当然，也可以使用pnpm create vite构建

# 另外，在项目的根目录，即跟examples目录的平级的package.json中的添加启动脚本 "script": {"dev": "pnpm -C examples dev"}，这样就可以在根目录下启动examples工程了
```

### 根目录下新建tsconfig.json

### packages目录下新建utils目录
```
pnpm init
# 执行完成后，修改该目录下的package.json        =>       "name": "@yumyum-ui/utils"
```

### packages目录下新建components目录
```
pnpm init
# 执行完成后，修改该目录下的package.json        =>       "name": "@yumyum-ui/components"

pnpm install @yumyum-ui/utils 
# 在components中引入utils，执行完成后会看到"dependencies": {"@yumyum-ui/utils": "workspace:^1.0.0"}
# 自动构建了软链接指向了utils目录，注意组织名（@yumyum-ui）不重复，否则可能会从npm库中下了一个同名的包
```

### 使用vite打包components
```ts
// components/vite.config.ts
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
import { resolve } from "path"

export default defineConfig(
  {
    build: {
      target: 'modules',
      //打包文件目录
      outDir: "es",
      //压缩
      minify: false,
      //css分离
      //cssCodeSplit: true,
      rollupOptions: {
        //忽略打包vue文件
        external: ['vue'],
        input: ['index.ts'],
        output: [
          {
            format: 'es',
            //不用打包成.es.js,这里我们想把它打包成.js
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: true,
            //配置打包根目录
            dir: resolve(__dirname, '../../build/es'), // 'es'
            preserveModulesRoot: 'src'
          },
          {
            format: 'cjs',
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: true,
            //配置打包根目录
            dir: resolve(__dirname, '../../build/lib'), // 'lib'
            preserveModulesRoot: 'src'
          }
        ]
      },
      lib: {
        entry: './index.ts',
        formats: ['es', 'cjs'],
        name: 'yumyum-ui'
      }
    },
    plugins: [
      vue(),
      dts({
        // 指定使用的 tsconfig.json，如果不配置也可以在 components 下新建 tsconfig.json
        tsConfigFilePath: '../../tsconfig.json',
        // 因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
        outputDir: [ // outputDir: 'lib'
          resolve(__dirname, '../../build/es/components'),
          resolve(__dirname, '../../build/lib/components')
        ]
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'components')
      }
    }
  }
)
```

### package.json说明
```json
{
  // ...
  "main": "lib/index.js",
  "module": "es/index.js", // # module：组件库默认入口文件是传统的 CommonJS 模块，但是如果环境支持 ESModule 的话构建工具会优先使用 module 入口
  "files": [ // files：files 是指需要发布到 npm 上的目录，因为不可能 components 下的所有目录都被发布上去
    "es",
    "lib"
  ],
  // ...
}
```

### 配置eslint
```
pnpm i eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin -D -w
```
- eslint: ESLint 的核心代码。
- eslint-plugin-vue：包含常用的 vue 规范。
- @typescript-eslint/parser：ESLint 的解析器，用于解析 typescript，从而检查和规范 Typescript 代码。
- @typescript-eslint/eslint-plugin：包含了各类定义好的检测 Typescript 代码的规范。
- eslint-plugin-import：意在提供对ES6+ import/export语法的支持，有助于防止你写错文件路径或者引用的变量名
- 根目录package.json添加script脚本："lint": "eslint . --ext .vue,.js,.ts,.jsx,.tsx --fix"
  
#### 新建.eslintrc.js
```js
// 也可以使用pnpm eslint --init生成，生成的文件跟以下配置差不多，稍作修改即可
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended" // 安装prettier后，新增
  ],
  "overrides": [
  ],
  "parser": "vue-eslint-parser", // 新增/修改，原 => "parser": "@typescript-eslint/parser"
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser", // 新增
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "rules": { // 新增
    "@typescript-eslint/ban-types": [
      "error",
    {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ]
  }
}
```

#### 新建.eslintignore
```
node_modules
dist
pnpm-lock.yaml
.eslintrc.js
```

### 配置prettier
```
pnpm i prettier eslint-plugin-prettier eslint-config-prettier -D -w
```

### VitePress 文档
- Node.js >= 16
- 安装
```
pnpm install vitepress -D -w
```
- 初始化
```
npx vitepress init
```
```
  vitepress v1.0.0-alpha.74

┌   Welcome to VitePress! 
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Site title:
│  yumyum-ui
│
◇  Site description:
│  vue3组件库
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run npm run docs:dev and start writing.
```

### iconfont制作
- iconfont-阿里巴巴矢量图标库：https://www.iconfont.cn/

### theme-chalk
- 新建packages/theme-chalk目录
- 在packages/theme-chalk下执行：pnpm init
- 修改该目录下的package.json         =>        "name": "@yumyum-ui/theme-chalk"

### 编写组件


### 发布npm包
- package.json 中 files 属性，用于指定上传到npm的目录/文件
- .npmignore文件也可用于指定忽略上传的文件
- pnpm run build:components 执行成功后会在根目录下生成build目录
- cd build
- npm init 生成package.json文件，并修改（版本号等），另外还可手动添加README.md，有助于npm展示简介
- npm publish
```json
{
  "name": "yumyum-ui",
  "version": "0.0.1",
  "description": "A high quality UI Toolkit built on Vue.js3+.",
  "main": "lib/components/index.js",
  "module": "es/components/index.js",
  "exports": {
    ".": {
      "import": "./es/components/index.js",
      "require": "./lib/components/index.js"
    },
    "./*": "./*"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/xiaoming985/yumyum-ui"
  },
  "homepage": "https://xiaoming985.github.io/yumyum-ui",
  "bugs": {
    "url": "https://github.com/xiaoming985/yumyum-ui/issues"
  },
  "files": [
    "es",
    "lib"
  ],
  "keywords": [
    "yumyum-ui",
    "vue3组件库",
    "components",
    "vue ui library",
    "yumyumui",
    "YumyumUI",
    "vue"
  ],
  "typings": "lib/index.d.ts",
  "author": "xiaoming985",
  "license": "MIT"
}
```

### github actions
```yaml
# .github/workflows/main.yaml
# name 可以自定义
name: Deploy GitHub Pages

# 触发条件：在 push 到 main 分支后
on:
  push:
    branches:
      - main

# 任务
jobs:
  build-and-deploy:
    # 服务器环境：最新版 Ubuntu
    runs-on: ubuntu-latest
    steps:
      # 拉取代码
      - name: Checkout
        uses: actions/checkout@v3
        with:
          persist-credentials: false

      # 设置Node环境
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 16

      # 设置pnpm环境
      - name: Setup PNPM
        uses: pnpm/action-setup@v2
        with:
          version: 7.18.1

      # 安装依赖
      - name: Install 🔧
        run: pnpm install
      
      # 打包
      - name: Build 🏗️
        run: pnpm run docs:build
        # env:
        #   NODE_ENV: production

      # 生成静态文件
      # - name: Build
      #   run: pnpm install && pnpm run docs:build

      # 部署到 GitHub Pages
      - name: Deploy to GH Pages 🚀
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist # vitepress 生成的静态文件存放的地方
```