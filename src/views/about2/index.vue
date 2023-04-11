<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="warning" @click="open('#007AFF')">Warning</el-button>
    <el-button type="danger" @click="open('red')">Danger</el-button>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { useThemeStore } from '@/store';

type ThemeState = Theme.Setting;

export default defineComponent({
  components: {},
  props: {
    info: {
      type: Object as PropType<ThemeState>,
      default: null
    }
  },
  setup() {
    const theme = useThemeStore();
    return { theme };
  },

  watch: {
    'theme.themeColor': {
      handler(val) {
        // console.log(val);
      }
    }
  },

  created() {},

  mounted() {},

  methods: {
    open(color: string) {
      this.theme.themeColor = color;
    }
  }
});
</script>

<style scoped></style>
