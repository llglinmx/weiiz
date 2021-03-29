<template>
  <s-page page-class="PullScroll-Page">
    <s-pull-scroll ref="pullScroll" :show-down-success="true" :back-top="true" :pull-down="pullDown" :pull-up="loadData">
      <ul>
        <li
          v-for="(item,index) of list"
          :key="index"
          style="font-size:30rpx;padding:40rpx;text-align:center;border-bottom:1px solid #aaa"
        >{{item}}</li>
      </ul>
    </s-pull-scroll>
  </s-page>
</template>

<script>
export default {
  data () {
    return {
      list: []
    };
  },
  methods: {
    refresh () {
      this.$nextTick(() => {
        this.$refs.pullScroll.refresh();
      });
    },
    pullDown (pullScroll) {
      setTimeout(() => {
        this.loadData(pullScroll);
      }, 200);
    },
    loadData (pullScroll) {
      setTimeout(() => {
        if (pullScroll.page == 1) {
          this.list = [];
        }
        const curList = [];
        for (let i = this.list.length; i < this.list.length + 20; i++) {
          curList.push(i);
        }
        this.list = this.list.concat(curList);
        if (this.list.length > 100) {
          pullScroll.finish();
        } else {
          pullScroll.success();
        }
      }, 500);
    }
  },
  onReady () {
    this.refresh();
  }
};
</script>

<style lang="scss">
page {
  height: 100%;
}
.PullScroll-Page {
  height: 100%;
}
</style>
