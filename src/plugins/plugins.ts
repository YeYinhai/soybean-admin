import type { App } from 'vue';
// 或者 naive
import naive from 'naive-ui';
import formCreate from '@form-create/naive-ui';
// element
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import 'dayjs/locale/zh-cn';
// 引入fast-crud
// eslint-disable-next-line import/order
import { FastCrud } from '@fast-crud/fast-crud';
import '@fast-crud/fast-crud/dist/style.css';

// element
import ui from '@fast-crud/ui-element';

// naive
// import ui from "@fast-crud/ui-naive";

/** 引入第三方组件等 */
export default function setupPlugins(app: App) {
  app.use(naive);
  app.use(formCreate);
  app.use(ElementPlus, { locale: zhCn });
  // 先安装ui
  app.use(ui);
  // 然后安装FastCrud
  app.use(FastCrud, {});
}
