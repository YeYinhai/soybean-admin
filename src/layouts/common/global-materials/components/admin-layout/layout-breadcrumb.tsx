import type { FunctionalComponent } from 'vue-demi';
import type { TabProps } from './types';
import style from './layout.module.css';

/** AdminBreadcrumb组件 */
const AdminBreadcrumb: FunctionalComponent<TabProps> = (props, { slots }) => {
  return (
    props.visible && (
      <>
        <div
          v-show={!props.hide}
          class={[
            style['layout-breadcrumb'],
            ':soy: flex-shrink-0',
            props.class,
            { ':soy: absolute left-0 w-full': props.fixed }
          ]}
        >
          {slots.default?.()}
        </div>
        <div
          v-show={!props.hide && props.fixed}
          class={[style['layout-breadcrumb-placement'], ':soy: flex-shrink-0 overflow-hidden']}
        ></div>
      </>
    )
  );
};

export default AdminBreadcrumb;
