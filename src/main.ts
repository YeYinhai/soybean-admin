import { createApp } from 'vue';
import naive from 'naive-ui';
import formCreate from '@form-create/naive-ui';
import ElementPlus from 'element-plus';
import App from './App.vue';
import AppLoading from './components/common/app-loading.vue';
import { setupDirectives } from './directives';
import { setupRouter } from './router';
import { setupAssets } from './plugins';
import { setupStore } from './store';
import { setupI18n } from './locales';

async function setupApp() {
  // import assets: js、css
  setupAssets();

  // app loading
  const appLoading = createApp(AppLoading);

  appLoading.mount('#appLoading');

  const app = createApp(App);

  app.use(naive);
  app.use(formCreate);
  app.use(ElementPlus);
  // store plugin: pinia
  setupStore(app);

  // vue custom directives
  setupDirectives(app);

  // vue router
  await setupRouter(app);

  setupI18n(app);

  // mount app
  app.mount('#app');
}

setupApp();
