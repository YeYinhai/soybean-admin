<!-- 一定要这样的结构，最外面要有DIV。不然路由监听会失效 -->
<template>
  <div>
    <div v-if="isVisible" class="h-full">
      <iframe class="wh-full" :src="iframeSrc"></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useIframe } from '@/hooks';

export default defineComponent({
  name: 'DataSet',
  props: {
    routeName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { isVisible } = useIframe(props);
    const iframeSrc = ref('https://v3.cn.vuejs.org/');

    return { isVisible, iframeSrc };
  }
});
</script>

<style scoped></style>
