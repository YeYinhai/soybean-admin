<template>
  <admin-layout
    :mode="mode"
    :scroll-mode="theme.scrollMode"
    :scroll-el-id="app.scrollElId"
    :full-content="app.contentFull"
    :fixed-top="theme.fixedHeaderAndTab"
    :header-height="theme.header.height"
    :tab-visible="false"
    :tab-height="theme.tab.height"
    :content-class="app.disableMainXScroll ? 'overflow-x-hidden' : ''"
    :sider-visible="siderVisible"
    :sider-collapse="app.siderCollapse"
    :sider-width="siderWidth"
    :sider-collapsed-width="siderCollapsedWidth"
    :footer-visible="theme.footer.visible"
    :fixed-footer="theme.footer.fixed"
    :right-footer="theme.footer.right"
    :breadcrumb-visible="false"
    :breadcrumb-height="50"
  >
    <template #header>
      <global-header v-bind="headerProps" />
    </template>
    <template #breadcrumb>
      <global-breadcrumb />
    </template>
    <template #tab>
      <global-tab />
    </template>
    <template #sider>
      <global-sider />
    </template>
    <div class="h-full">
      <iframe class="wh-full" :src="src"></iframe>
    </div>
    <template #footer>
      <global-footer />
    </template>
  </admin-layout>
  <n-back-top :key="theme.scrollMode" :listen-to="`#${app.scrollElId}`" class="z-100" />
  <setting-drawer />
</template>

<script setup lang="ts">
// import { AdminLayout } from '@soybeanjs/vue-materials';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore, useThemeStore } from '@/store';
import { useBasicLayout } from '@/composables';
import {
  GlobalFooter,
  GlobalHeader,
  GlobalSider,
  GlobalTab,
  SettingDrawer,
  AdminLayout,
  GlobalBreadcrumb
} from '../common';

defineOptions({ name: 'IFrameLayout' });

const app = useAppStore();
const theme = useThemeStore();

const { mode, headerProps, siderVisible, siderWidth, siderCollapsedWidth } = useBasicLayout();

const route = useRoute();
const src = ref(route.meta.href);
</script>

<style lang="scss">
#__SCROLL_EL_ID__ {
  @include scrollbar(8px, #e1e1e1);
}

.dark #__SCROLL_EL_ID__ {
  @include scrollbar(8px, #555);
}
</style>
