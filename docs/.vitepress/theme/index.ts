import DefaultTheme from 'vitepress/theme';
import '@yammy-ui/theme-chalk/src/index.scss';
import YammyUI from '@yammy-ui/components';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(YammyUI);
  }
};