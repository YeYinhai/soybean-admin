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
          :is="Component"
          v-if="app.reloadFlag"
          :key="route.fullPath"
          :class="{ 'p-16px': showPadding }"
          class="flex-grow bg-#f6f9f8 dark:bg-#101014 transition duration-200 ease-in-out"
        />
      </keep-alive>
    </transition>
  </router-view>

  <!--iframe页-->
  <transition
    :name="theme.pageAnimateMode"
    mode="out-in"
    :appear="true"
    @before-leave="app.setDisableMainXScroll(true)"
    @after-enter="app.setDisableMainXScroll(false)"
  >
    <div class="h-full">
      <component
        :is="item.default"
        v-for="item in iframeComponentsArr"
        :key="item.name + '_div2'"
        :route-name="item.name"
        :class="{ 'p-16px': showPadding }"
        class="flex-grow bg-#f6f9f8 dark:bg-#101014 transition duration-100 ease-in-out h-full"
      />
    </div>
  </transition>
  <!-- <p>Current path: {{ route1.path }}</p>
  <p>Query params: {{ route1.query }}</p>
  <p>Route params: {{ route1.params }}</p> -->
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';
import { views } from '@/views';
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
const router = useRouter();

// 获取缓存iframe组件实例。
const iframeComponentsArr = computed(() => {
  const arr: any = [];

  routeStore.cacheRoutes.forEach(function (value) {
    const component = router.getRoutes().find(item => {
      return value === item.name && item.meta.iframeKeepAlive === true;
    });
    if (component !== undefined) {
      const name = component.name;
      // @ts-ignore name 可能为空，但是实际上上面已经判断过了。
      arr.push({ default: defineAsyncComponent(views[name]), name });
    }
  });

  return arr;
});
</script>

<style scoped></style>
