<template>
  <s-page page-class="Table-Page">
    <s-table
      :border="true"
      :columns="columns"
      :list="list"
      :sort-by.sync="sortBy"
      :sort-order.sync="sortOrder"
      @sort="switchSort"
    >
      <template #default="{ row, column, rowIndex }">
        <template v-if="column.key == 'index'">
          <image v-if="rowIndex < 3" class="index-img" :src="'/static/imgs/statistics/index' + (rowIndex + 1) + '.png'" />
          <template v-else>{{ rowIndex + 1 }}</template>
        </template>
        <template v-else>{{ row[column.key] }}</template>
      </template>
    </s-table>
  </s-page>
</template>

<script>
export default {
  data () {
    return {
      sortBy: '',
      sortOrder: '', // asc，desc
      columns: [
        { title: '排名', key: 'index', width: 120 },
        { title: '区名称', key: 'area_name' },
        { title: '消费金额', key: 'total', sortBy: '4' },
        { title: '消费人次', key: 'consume_times', sortBy: '2', width: 150 },
        { title: '拉动比', key: 'pull_ratio', sortBy: '3', width: 150 }
      ],
      list: [
        { area_name: '虹口区', total: 100, amount: 11, consume_times: 21, pull_ratio: 1.25 },
        { area_name: '徐汇区', total: 110, amount: 22, consume_times: 65, pull_ratio: 1.91 },
        { area_name: '奉贤区', total: 120, amount: 33, consume_times: 54, pull_ratio: 2.86 },
        { area_name: '青浦区', total: 130, amount: 44, consume_times: 82, pull_ratio: 3.8 },
        { area_name: '嘉定区', total: 140, amount: 55, consume_times: 48, pull_ratio: 1.77 }
      ]
    };
  },
  methods: {
    switchSort () {
      // 点击排序后触发
    }
  }
};
</script>

<style lang="scss">
.Table-Page {
  padding: 30rpx;
  ::v-deep .s-table {
    &-header {
      min-height: 72rpx;
      font-size: 24rpx;
      color: #181818;
    }
    &-tr {
      min-height: 100rpx;
      color: #000000;
      &:nth-child(1) {
        background-color: mix(#f9cb29, transparent, 10%);
      }
      &:nth-child(2) {
        background-color: mix(#bfbfbf, transparent, 10%);
      }
      &:nth-child(3) {
        background-color: mix(#834e00, transparent, 10%);
      }
    }
    .index-img {
      width: 55rpx;
      height: 48rpx;
      display: block;
    }
  }
}
</style>
