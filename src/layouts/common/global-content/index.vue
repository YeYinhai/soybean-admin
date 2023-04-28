<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :name="theme.pageAnimateMode"
      mode="out-in"
      :appear="true"
      @before-leave="app.setDisableMainXScroll(true)"
      @after-enter="app.setDisableMainXScroll(false)"
    >
      <keep-alive :include="routeStore.cacheRoutes">
        <component
          :is="
            () => {
              debugger;
              if (Component.meta != undefined && Component.meta?.iframeKeepAlive === true) {
                return null;
              } else {
                return Component;
              }
            }
          "
          v-if="app.reloadFlag"
          :key="route.fullPath"
          :class="{ 'p-16px': showPadding }"
          class="flex-grow bg-#f6f9f8 dark:bg-#101014 transition duration-200 ease-in-out"
        />
      </keep-alive>
    </transition>
  </router-view>

  <!--iframe页-->
  <component
    :is="item.components.default"
    v-for="item in hasOpenComponentsArr"
    v-show="route1.path === item.path"
    :key="item.name"
    class="abc"
  ></component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { routes } from '@/router';
import { useAppStore, useRouteStore, useThemeStore } from '@/store';

defineOptions({ name: 'GlobalContent' });

interface Props {
  /** 显示padding */
  showPadding?: boolean;
}

withDefaults(defineProps<Props>(), {
  showPadding: true
});

const app = useAppStore();
const theme = useThemeStore();
const routeStore = useRouteStore();
const route1 = useRoute();
const router = useRouter();
// 获取缓存iframe组件实例。
const hasOpenComponentsArr = computed(() => {
  const arr: any = [];

  routeStore.cacheRoutes.forEach(function (value) {
    const obj = router.getRoutes().find(item => {
      return value === item.name && item.meta.iframeKeepAlive === true;
    });
    if (obj !== undefined) {
      routes.forEach(item => {
        if (item.name === obj.name) {
          obj.meta = item.meta;
        }
      });

      arr.push(obj);
    }
  });
  // debugger;
  return arr;
});
</script>

<style scoped></style>
