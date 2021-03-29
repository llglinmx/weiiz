<template>
  <s-page page-class="Emit-Page">
    <div style="text-align:center;">
      测试onEmitPage生命周期，
      首先useEmitPageMixin设为true，
      只对页面路由栈中的页面生效，
    </div>
    <div style="text-align:center;margin-top:40rpx">
      使用场景:从列表页进入详情，详情数据变动触发列表页更新
    </div>
    <div class="btn btn-plain-primary btn-radius" @click="handleEmitPage">触发</div>
  </s-page>
</template>

<script>

export default {
  components: {},
  data: () => ({}),
  onEmitPage (a) {
    console.log('onEmitPage:', a);
  },
  methods: {
    handleEmitPage () {
      this.$emitPage('/pages/emitPage/emitPage', 1);
    }
  },
  watch: {},
  // 页面周期函数--监听页面加载
  onLoad () { },
  // 页面周期函数--监听页面初次渲染完成
  onReady () { },
  // 页面周期函数--监听页面显示(not-nvue)
  onShow () { },
  // 页面周期函数--监听页面隐藏
  onHide () { },
  // 页面周期函数--监听页面卸载
  onUnload () { },
  // 页面处理函数--监听用户下拉动作
  onPullDownRefresh () {
    uni.stopPullDownRefresh();
  },
  // 页面处理函数--监听用户上拉触底
  onReachBottom () { }
  // 页面处理函数--监听页面滚动(not-nvue)
  /* onPageScroll(event) {}, */
  // 页面处理函数--用户点击右上角分享
  /* onShareAppMessage(options) {}, */
};
</script>

<style lang="scss">
.Emit-Page {
  padding: 40rpx;
  .btn {
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    &:not(:first-child) {
      margin-top: 40rpx;
    }
  }
}
</style>
