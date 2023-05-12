import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/yummy-ui/',
  title: "yummy-ui",
  description: "vue3组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/' },
      { text: '组件', link: '/components/button/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '安装', link: '/guide/install' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基本',
          items: [
            { text: 'Button 按钮', link: '/components/button/' },
            // { text: 'Grid 栅格', link: '/components/grid/' },
            // { text: 'Icon 图标', link: '/components/icon/' }
          ]
        },
        {
          text: '其他组件', // 导航
          items: [
            { text: '敬请期待', link: '#' }
            // { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb/' }
          ]
        },
      ]
    },

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      { icon: 'github', link: 'https://github.com/Xiaoming985/yummy-ui' }
    ],

    lastUpdatedText: '最近更新时间',

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Xiaoming985'
    },
  }
})
