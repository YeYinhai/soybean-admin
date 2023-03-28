<template>
  <dit-dialog :title="_title" :visible.sync="visible" width="46%" top='24vh' :close-on-click-modal="false" @open="_onOpen" @close="onClose">
    <div class="form-container form-aqzs__aqzscaresult" :class="formContainerClass">
      <avue-form :option="option" v-model="model" ref="from" @submit="submit" @error="error">
        <template slot="tableName">
          <avue-crud ref="tableCrud" :data="aqzsHyzsDTOList" :option="tableOption">
          </avue-crud>
        </template>
        <template slot="menuForm">
          <el-button type="info" icon="el-icon-close" @click="cancel">关闭</el-button>
        </template>
      </avue-form>
    </div>
  </dit-dialog>
</template>
<script>
import { mixins } from '@dvue/index.js';

/**
     * 安全指数-城安-计算结果-表单
     */
export default {
  name: 'form-aqzscaresult',
  mixins: [mixins.formBase],
  data() {
    return {
      title: '安全指数-城安-计算结果',
      addAction: 'postAqzsCaResult',
      editAction: 'putAqzsCaResult',
      infoAction: 'getAqzsCaResultInfo',
      model: {
        tableName: null
      },

      aqzsHyzsDTOList: [
        {
          xzqhId: null,
          xzqhName: null,
          key: 'XIAOAN',
          name: '消安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'PINGAN',
          name: '瓶安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'XUNAN',
          name: '巡安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'QIAN',
          name: '企安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'DAOAN',
          name: '道安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'DIAN',
          name: '地安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'XUNAN2',
          name: '汛安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'TIAN',
          name: '梯安',
          value: null
        }
      ]

    };
  },
  computed: {
    option() {
      return {
        detail: this.isDetail,
        // mockBtn: this.isMockBtn,
        emptyBtn: false,
        header: false,
        align: 'center',
        menuAlign: 'center',
        // menuWidth: 120,
        highlightCurrentRow: true,
        // height: 600,
        column: [
          {
            // label: '模板名称',
            prop: 'tableName',
            // type: 'input',
            cell: false,
            span: 24
          }
        ]
      };
    },
    tableOption() {
      return {
        index: true,
        indexLabel: '序号',
        indexWidth: 100,
        emptyBtn: false,
        labelWidth: 110,
        menu: false,
        header: false,
        align: 'center',
        border: true,
        menuAlign: 'center',
        // menuWidth: 120,
        // index: true,
        // indexLabel: '序号',
        // idexWidth: '70',
        addBtn: false,
        delBtn: false,
        editBtn: false,
        viewBtn: false,
        columnBtn: false,
        highlightCurrentRow: true,
        // height: 800,
        column: [
          {
            label: '行业名称',
            prop: 'name',
            cell: false
          },
          {
            label: '安全指数',
            type: 'number',
            prop: 'value',
            cell: this.powerWeigh
          }
        ]
      };
    }
  },
  watch: {},
  methods: {
    // 初始化
    init() {

    },
    // 获取信息详情
    getInfo() {
      debugger;
      this.aqzsHyzsDTOList = this.row.aqzsHyzsDTOList;
    },

    onOpen() {
      this.init();
      if (this.actionType === 'info' || this.actionType === 'edit') {
        debugger;
        // 请求详情
        this.getInfo();
      }
    },

    onClose() {
      this.model = {
        tableName: null
      };
      this.aqzsHyzsDTOList = [
        {
          xzqhId: null,
          xzqhName: null,
          key: 'XIAOAN',
          name: '消安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'PINGAN',
          name: '瓶安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'XUNAN',
          name: '巡安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'QIAN',
          name: '企安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'DAOAN',
          name: '道安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'DIAN',
          name: '地安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'XUNAN2',
          name: '汛安',
          value: null
        },
        {
          xzqhId: null,
          xzqhName: null,
          key: 'TIAN',
          name: '梯安',
          value: null
        }
      ];
    }
  }
};
</script>

<style lang='scss' scoped>
.form-container {
  ::v-deep .el-form-item__content {
    margin-left: 0 !important;
  }

  // ::v-deep .avue-form {
  //   padding: 0 !important;
  // }

  // ::v-deep .header-items {
  //   padding: 10px !important;

  //   .el-form-item__content {
  //     padding-left: 110px !important;
  //   }
  // }
}
</style>
