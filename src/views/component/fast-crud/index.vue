<template>
  <div class="PageFeatureSearchMulti">
    <fs-crud ref="crudRef" v-bind="crudBinding" />
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref, shallowRef, onMounted } from 'vue';
import { NButton } from 'naive-ui';
import type {
  AddReq,
  CreateCrudOptionsProps,
  CreateCrudOptionsRet,
  DelReq,
  EditReq,
  UserPageQuery,
  UserPageRes
} from '@fast-crud/fast-crud';
import { dict, useCrud, useFs } from '@fast-crud/fast-crud';
import _ from 'lodash-es';

// 此处为crudOptions配置
const createCrudOptions = function ({}: CreateCrudOptionsProps): CreateCrudOptionsRet {
  // 本地模拟后台crud接口方法 ----开始
  const records = [
    { id: 1, name: 'Hello World', city: 'sh', type: 1 },
    { id: 2, name: 'Hello World', city: 'sz', type: 0 }
  ];

  const pageRequest = async (query: UserPageQuery): Promise<UserPageRes> => {
    return {
      records,
      currentPage: 1,
      pageSize: 20,
      total: records.length
    };
  };
  const editRequest = async ({ form, row }: EditReq) => {
    const target = _.find(records, item => {
      return row.id === item.id;
    });
    _.merge(target, form);
    return target;
  };
  const delRequest = async ({ row }: DelReq) => {
    _.remove(records, item => {
      return item.id === row.id;
    });
  };
  const addRequest = async ({ form }: AddReq) => {
    const maxRecord = _.maxBy(records, item => {
      return item.id;
    });
    form.id = (maxRecord?.id || 0) + 1;
    records.push(form);
    return form;
  };
  // 本地模拟后台crud接口方法 -----结束

  return {
    // 自定义变量返回
    customExport: {},
    crudOptions: {
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest
      },
      tabs: {
        show: true,
        name: 'city'
      },
      search: {
        container: {
          layout: 'multi-line',
          action: {
            label: '操作'
            // col: { span: 4 }
          }
        }
        // options: {
        //   labelCol: {
        //     style: {
        //       width: '100px'
        //     }
        //   }
        // }
      },
      columns: {
        name: {
          title: '姓名',
          type: 'text',
          search: { show: true },
          column: {
            resizable: true,
            width: 200
          }
        },
        city: {
          title: '城市',
          type: 'dict-select',
          search: { show: true },
          dict: dict({
            value: 'id',
            label: 'text',
            data: [
              { id: 'sz', text: '深圳', color: 'success' },
              { id: 'gz', text: '广州' },
              { id: 'bj', text: '北京' },
              { id: 'wh', text: '武汉' },
              { id: 'sh', text: '上海' }
            ]
          })
        },
        name1: {
          title: '自定义',
          type: 'text',
          search: {
            show: true,
            // col: {
            //   span: 6
            // },
            component: {
              // 引用自定义组件
              name: shallowRef(NButton),
              props: {
                type: 'primary',
                circle: true
              },
              slots: {
                // 插槽示例
                default({ form, scope }) {
                  return <span>counter on cell: </span>;
                }
              },
              on: {
                // 监听事件
                onClick({ $event, row }) {
                  // eslint-disable-next-line no-alert
                  alert('1');
                }
              }
            }
          }
        },
        name2: {
          title: '姓名',
          type: 'text',
          search: { show: true },
          column: {
            resizable: true,
            width: 200
          }
        },
        name3: {
          title: '姓名',
          type: 'text',
          search: { show: true },
          column: {
            resizable: true,
            width: 200
          }
        },
        name4: {
          title: '姓名',
          type: 'text',
          search: { show: true },
          column: {
            resizable: true,
            width: 200
          }
        },
        name5: {
          title: '姓名',
          type: 'text',
          search: { show: true },
          column: {
            resizable: true,
            width: 200
          }
        },
        type: {
          title: '类型',
          type: 'dict-select',
          dict: dict({
            data: [
              { value: 1, label: '开始' },
              { value: 0, label: '停止' }
            ]
          })
        }
      }
    }
  };
};

// 此处为组件定义
export default defineComponent({
  name: 'FsCrudHelloWorld',
  setup() {
    // // crud组件的ref
    // const crudRef: Ref = ref();
    // // crud 配置的ref
    // const crudBinding: Ref<CrudBinding> = ref();
    // // 暴露的方法
    // const { crudExpose } = useExpose({ crudRef, crudBinding });
    // // 你的crud配置
    // const { crudOptions, customExport } = createCrudOptions({ crudExpose, context });
    // // 初始化crud配置
    // const { resetCrudOptions, appendCrudBinding } = useCrud({ crudExpose, crudOptions });

    //  =======以上为fs的初始化代码=========
    //  =======你可以简写为下面这一行========
    const { crudRef, crudBinding, crudExpose, context } = useFs({ createCrudOptions, context: {} });

    // 页面打开后获取列表数据
    onMounted(() => {
      crudExpose.doRefresh();
    });
    return {
      crudBinding,
      crudRef,
      ...context
    };
  }
});
</script>
<style lang="scss">
.PageFeatureSearchMulti {
  .fs-search {
    .fs-search-multi-line-buttons {
      position: absolute;
      bottom: -38px;
      right: 160px;
    }
    .ant-form-item-label:before {
      border-bottom: 1px solid #eee;
      content: '';
      position: absolute;
      bottom: 1px;
      left: 2px;
      right: 8px;
    }
  }
}
</style>
