<template>
  <s-page page-class="Home-Page">
    <ul class="tab-list">
      <li v-for="(item,index) of list" :key="index" @click="jumpTo(item)">{{item.style.navigationBarTitleText}}</li>
    </ul>
  </s-page>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          path: 'pages/popup/popup',
          style: {
            navigationBarTitleText: 'popup 弹框'
          }
        },
        {
          path: 'pages/dialog/dialog',
          style: {
            navigationBarTitleText: 'dialog 模态弹窗'
          }
        },
        {
          path: 'pages/toast/toast',
          style: {
            navigationBarTitleText: 'toast 提示弹窗'
          }
        },
        {
          path: 'pages/picker/picker',
          style: {
            navigationBarTitleText: 'picker 选择'
          }
        },
        {
          path: 'pages/tabs/tabs',
          style: {
            navigationBarTitleText: 'tabs 选项卡切换'
          }
        },
        // {
        //   "path": "pages/pullScroll/pullScroll",
        //   "style": {
        //     "navigationBarTitleText": "下拉刷新，上拉加载"
        //   }
        // },
        {
          path: 'pages/table/table',
          style: {
            navigationBarTitleText: 'table 表格'
          }
        },
        {
          path: 'pages/search/search',
          style: {
            navigationBarTitleText: 'search 搜索'
          }
        },
        {
          path: 'pages/empty/empty',
          style: {
            navigationBarTitleText: 'empty 空布局'
          }
        },
        {
          path: 'pages/hairline/hairline',
          style: {
            navigationBarTitleText: 'hairline 0.5像素的边框容器'
          }
        },
        {
          path: 'pages/emitPage/emitPage',
          style: {
            navigationBarTitleText: 'onEmitPage 生命周期'
          }
        }
      ]
    };
  },
  methods: {
    jumpTo (item) {
      uni.navigateTo({ url: '/' + item.path });
    }
  }
};
</script>

<style lang="scss">
.Home-Page {
  .tab-list {
    li {
      font-size: 28rpx;
      padding: 24rpx;
      text-align: center;

      &:not(:first-child) {
        border-top: 2rpx solid #eaeaea;
      }
    }
  }
}
</style>
