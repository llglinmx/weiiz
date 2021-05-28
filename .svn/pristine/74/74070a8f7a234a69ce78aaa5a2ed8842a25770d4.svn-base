<template>
  <s-page page-class="Tabs-Page">
    <div class="article">
      <p class="title">普通</p>
      <s-tabs @change="change" @render="render">
        <s-tab v-for="i of 5" :title="'Tab'+i" :key="i">内容{{i}}</s-tab>
      </s-tabs>
    </div>

    <div class="article">
      <p class="title">超出可滚动</p>
      <s-tabs @change="change" @render="render">
        <s-tab v-for="i of num" :title="'Tab'+i" :key="i">内容{{i}}</s-tab>
      </s-tabs>
    </div>

    <div class="article">
      <p class="title">异步拦截切换before-change</p>
      <s-tabs :before-change="beforeChange" @change="change" @render="render">
        <s-tab v-for="i of num" :title="'Tab'+i" :key="i">内容{{i}}</s-tab>
      </s-tabs>
    </div>

    <div class="article">
      <p class="title">使用name匹配</p>
      <s-tabs @change="change" @render="render">
        <s-tab v-for="i of 5" :title="'Tab'+i" :key="i" :name="i+'name'">内容{{i}}</s-tab>
      </s-tabs>
    </div>

    <div class="article">
      <p class="title">自定义导航间距样式</p>
      <s-tabs class="custom-tabs" @change="change" @render="render">
        <s-tab title="Tab1">1</s-tab>
        <s-tab title="Tab2" disabled>2</s-tab>
      </s-tabs>
    </div>

    <div class="article">
      <p class="title">slot-tab为true时</p>
      <p class="desc">s-tab下的内容将成为导航的内容填充，面板区域需要自己写，可配合swiper实现滑动效果</p>
      <s-tabs slot-tab v-model="activeTab" @change="change" @render="render">
        <s-tab v-for="item of tabList" :key="item">Tab{{item}}</s-tab>
      </s-tabs>
    </div>
  </s-page>
</template>

<script>

export default {
  data () {
    return {
      activeColor: 'blue',
      num: 14,
      tabList: [1, 2, 3, 4, 5, 6, 7],
      activeTab: 3
    };
  },
  methods: {
    beforeChange (name) {
      console.log('beforeChange:', name);
      return new Promise(resolve => {
        uni.showModal({
          title: '提示',
          content: '确定切换吗?',
          success: function (res) {
            resolve(res.confirm);
          }
        });
      });
    },
    change (name) {
      console.log('change:', name);
    },
    render (name) {
      console.log('render:', name);
    }
  },
  onLoad () {
    // const deep = () => {
    //   setTimeout(() => {
    //     if (this.num < 16) {
    //       this.num++;
    //       deep();
    //     }
    //   }, 2000);
    // };
    // deep();
  }
};
</script>

<style lang="scss">
.Tabs-Page {
  padding: 0 0 100rpx 0;
  .article {
    .title {
      padding: 20rpx;
      font-size: 30rpx;
      text-align: center;
    }
    .desc {
      padding: 0 30rpx;
      font-size: 26rpx;
    }
  }
  ::v-deep .s-tabs {
    .s-tab-nav {
      padding: 0 20rpx;
    }
    .s-tab-panel {
      padding: 30rpx 40rpx;
    }
  }
  .custom-tabs {
    ::v-deep .s-tabs-nav-list {
      display: flex;
      justify-content: center;
      .s-tab-nav {
        flex: 0 0 auto;
      }
    }
  }
}
</style>
