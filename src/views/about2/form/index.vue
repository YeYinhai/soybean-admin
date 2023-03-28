<template>
  <dit-container class="home-container home-aqzs__aqzscaresult">
    <template #main>
      <div class="home-header">
        <dit-query-form
          ref="queryForm"
          v-model="queryModel"
          :option="queryOption"
          :search-index="7"
          @search="search"
          @reset="resetQueryModel"
        >
        </dit-query-form>
      </div>
      <div class="home-body">
        <avue-crud
          ref="tableCrud"
          v-model:page="page"
          :data="data.list"
          :option="tableOption"
          :table-loading="loading"
          @size-change="handlePageSizeChange"
          @current-change="handleCurrentPageChange"
          @row-click="handleCurrentRowChange"
          @refresh-change="refresh"
        >
          <!-- 行操作按钮  -->
          <template #menu="{ row, type, size }">
            <el-button icon="el-icon-view" :type="type" @click="openInfoView(row)">详 情 </el-button>
          </template>
          <!-- 行内模板  -->
        </avue-crud>
      </div>
    </template>
    <div>
      <formView ref="formView" @reload="reloadTableData"></formView>
    </div>
  </dit-container>
</template>

<script>
import { mixins } from '@dvue/index.js';
import formView from './form';

/**
 * 安全指数-城安-计算结果-首页
 */
export default {
  name: 'HomeAqzscaresult',
  components: {
    formView
  },
  mixins: [mixins.tableBase],
  data() {
    return {
      tableAction: 'getAqzsCaResultPage',
      deleteAction: 'deleteAqzsCaResult',
      // datetimerange: null,

      queryModel: {
        datetimerange: [],
        startTime: null,
        endTime: null
      }
    };
  },
  computed: {
    queryOption() {
      return {
        submitBtn: false,
        emptyBtn: false,
        menuPosition: 'left',
        span: 8,
        column: [
          {
            label: '日期范围',
            prop: 'datetimerange',
            type: 'daterange',
            format: 'yyyy-MM-dd',
            valueFormat: 'yyyy-MM-dd',
            startPlaceholder: '填报开始时间',
            endPlaceholder: '填报结束时间'
          }
        ]
      };
    },
    tableOption() {
      return {
        align: 'center',
        menuAlign: 'center',
        index: true,
        indexLabel: '序号',
        addBtn: false,
        delBtn: false,
        editBtn: false,
        viewBtn: false,
        columnBtn: false,
        highlightCurrentRow: true,
        height: 800,
        column: [
          { label: '城安指数', prop: 'score' },
          { label: '统计时间', prop: 'statisticsTime' }
        ]
      };
    }
  },
  watch: {
    'queryModel.datetimerange': {
      handler(value) {
        if (value) {
          this.queryModel.startTime = this.queryModel.datetimerange[0];
          this.queryModel.endTime = this.queryModel.datetimerange[1];
        }
      }
    }
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
$query-form-row: 1;
@import '~@/assets/style/home.scss';

.home-aqzs__aqzscaresult {
}
</style>
