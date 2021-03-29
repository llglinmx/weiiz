<template>
  <s-page page-class="Popup-Page">
    <div>
      <div class="btn btn-plain-primary btn-radius" @click="showCenterVisible = true">中</div>
      <div class="btn btn-plain-primary btn-radius" @click="showLeftVisible = true">左</div>
      <div class="btn btn-plain-primary btn-radius" @click="showRightVisible = true">右</div>
      <div class="btn btn-plain-primary btn-radius" @click="showTopVisible = true">上</div>
      <div class="btn btn-plain-primary btn-radius" @click="showBottomVisible = true">下</div>

      <div class="btn btn-primary btn-radius" @click="showAutoCloseVisible = true">2秒后自动关闭</div>
      <div class="btn btn-primary btn-radius" @click="showBeforeHideVisible = true">关闭拦截</div>
    </div>

    <s-popup
      position="center"
      background="#fff"
      width="400"
      height="400"
      border-radius="10px"
      close-btn
      v-model="showCenterVisible"
    ></s-popup>
    <s-popup position="left" background="#fff" width="400" v-model="showLeftVisible"></s-popup>
    <s-popup position="right" background="#fff" width="400" v-model="showRightVisible"></s-popup>
    <s-popup position="top" background="#fff" height="200" v-model="showTopVisible"></s-popup>
    <s-popup position="bottom" background="#fff" height="200" v-model="showBottomVisible"></s-popup>
    <s-popup position="center" background="#fff" width="400" height="400" :duration="2000" v-model="showAutoCloseVisible"></s-popup>
    <s-popup
      position="center"
      background="#fff"
      width="400"
      height="400"
      v-model="showBeforeHideVisible"
      :beforeHide="beforeHide"
    ></s-popup>
  </s-page>
</template>

<script>
import Dialog from '@/uni_modules/s-ui/utils/dialog';

export default {
  data () {
    return {
      showCenterVisible: false,
      showLeftVisible: false,
      showRightVisible: false,
      showTopVisible: false,
      showBottomVisible: false,
      showBeforeHideVisible: false,
      showAutoCloseVisible: false
    };
  },
  methods: {
    beforeHide () {
      return new Promise((resolve) => {
        Dialog({
          title: '提示',
          message: '确认关闭弹框吗'
        }).then(() => {
          resolve(true);
        }, () => {
          resolve(false);
        });
      });
    }
  },
  onLoad () {
  }
};
</script>

<style lang="scss">
.Popup-Page {
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
