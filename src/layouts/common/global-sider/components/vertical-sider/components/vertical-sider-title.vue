<template>
  <router-link
    v-show="showTitle"
    :to="routeHomePath"
    class="flex-center w-full nowrap-hidden pl-16px"
    style="justify-content: left; box-shadow: 0 1px 2px rgb(0 21 41 / 8%)"
  >
    <!-- <system-logo class="text-32px text-primary" /> -->
    <h2 class="pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out" @click="toggleLocal">
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
  return routeStore.siderMenus?.label;
});
</script>

<style scoped></style>
