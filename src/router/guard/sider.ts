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
  if (to.meta.isSiderVisible === false) {
    app.setSiderVisible(false);
  } else {
    app.setSiderVisible(true);
  }

  const theme = useThemeStore();
  const routeStore = useRouteStore();
  const isLayoutGeneral = computed(() => theme.layout.mode === 'layout-general');
  if (isLayoutGeneral.value) {
    routeStore.siderMenus = find(routeStore.menus, item => {
      if (item.routePath === to.matched[0].path) {
        return true;
      }
      return false;
    }) as App.GlobalMenuOption;
  }
}
