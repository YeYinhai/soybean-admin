import { computed } from 'vue';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
// import { routeName } from '@/router';
import { find } from 'lodash-es';
import { useAppStore, useThemeStore, useRouteStore } from '@/store';

/** 页面调整判断左侧菜单折叠 */
export async function siderCollapse(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const app = useAppStore();
  if (to.meta.siderVisible === false) {
    app.setSiderVisible(false);
  } else {
    app.setSiderVisible(true);
  }

  const theme = useThemeStore();
  const routeStore = useRouteStore();
  const isLayoutGeneral = computed(() => theme.layout.mode === 'layout-general');
  if (isLayoutGeneral.value) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    routeStore.siderMenus = find(routeStore?.menus, item => {
      return item.routePath === to.matched[0].path;
    }) as App.GlobalMenuOption;
  }
}
