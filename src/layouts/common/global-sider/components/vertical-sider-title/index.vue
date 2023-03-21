<template>
  <router-link :to="routeHomePath" class="flex-center w-full nowrap-hidden">
    <system-logo class="text-32px text-primary" />
    <h2
      v-show="showTitle"
      class="pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out"
      @click="toggleLocal"
    >
      {{ title }}
    </h2>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { routePath } from '@/router';
import { useRouteStore } from '@/store';
import { setLocale } from '@/locales';
const routeStore = useRouteStore();

defineOptions({ name: 'VerticalSiderTitle' });

interface Props {
  /** 显示名字 */
  showTitle: boolean;
}

defineProps<Props>();

const routeHomePath = routePath('root');

let flag = true;
function toggleLocal() {
  flag = !flag;
  setLocale(flag ? 'en' : 'zh-CN');
}

const title = computed(() => {
  debugger;
  return routeStore.siderMenus?.label;
});
</script>

<style scoped></style>
