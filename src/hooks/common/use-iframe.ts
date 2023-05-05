import { ref, computed, watch, getCurrentInstance, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface Props {
  routeName: string;
  [propName: string]: any; // 允许对象包含任意其他属性
}

/** 重载 */
export default function useIframe(props: Props) {
  const _this = getCurrentInstance();
  const isVisible = ref(true);
  const route = useRoute();

  const isShow = computed(() => {
    return route.name === props.routeName;
  });

  /** 隐藏iframe示例 */
  watch(isShow, (newValue, oldValue) => {
    if (
      _this !== null &&
      _this?.parent !== null &&
      _this?.parent.parent !== null &&
      _this?.parent?.type.name !== 'KeepAlive'
    ) {
      if (newValue === false) {
        _this.parent.parent.proxy!.$el.style.display = 'none';
      } else if (newValue === true) {
        _this.parent.parent.proxy!.$el.style.display = '';
      }
    }
  });

  onMounted(() => {
    /** 销毁router-view里面的组件，减少不必要的同组件同时存在。 */
    // KeepAlive GlobalContent
    if (_this?.parent?.type.name === 'KeepAlive') {
      isVisible.value = false;
      _this.parent.proxy!.$el.style.display = 'none';
    } else if (_this?.parent?.proxy!.$el !== null) {
      isVisible.value = true;
    }
  });

  return {
    isVisible,
    isShow
  };
}
