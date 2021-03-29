<template>
  <s-page page-class="Toast-Page">
    <div>
      <div class="btn btn-plain-primary btn-radius" @click="showToast">轻提示信息</div>
      <div class="btn btn-plain-primary btn-radius" @click="showTopToast">居上显示</div>
      <div class="btn btn-plain-primary btn-radius" @click="showBottomToast">居下显示</div>
      <div class="btn btn-success btn-radius" @click="showSuccessToast">成功提示</div>
      <div class="btn btn-error btn-radius" @click="showFailToast">失败提示</div>
      <div class="btn btn-primary btn-radius" @click="showLoading">loading</div>
      <div class="btn btn-plain-primary btn-radius" @click="showMoreTextToast">多文字提示</div>
      <div class="btn btn-primary" @click="showToastImage">图片提示</div>
    </div>
  </s-page>
</template>

<script>
import Toast from '@/uni_modules/s-ui/utils/toast';

export default {
  data: () => ({}),
  computed: {},
  methods: {
    showToast () {
      Toast('轻提示信息');
    },
    showTopToast () {
      Toast({
        message: '居上显示',
        position: 'top'
      });
    },
    showBottomToast () {
      Toast({
        message: '居下显示',
        position: 'bottom'
      });
    },
    showSuccessToast () {
      Toast.success('成功提示');
    },
    showFailToast () {
      Toast.fail('失败提示');
    },
    showLoading () {
      Toast.loading({
        message: '加载中...',
        duration: 2000
      });
    },
    showMoreTextToast () {
      Toast({
        message: '我与父亲不相见已二年余了，我最不能忘记的是他的背影。'
      });
    },
    showToastImage () {
      Toast({
        image: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg',
        background: '',
        maskOpacity: 0.7,
        imageStyle: {
          width: '200rpx',
          height: '200rpx',
          borderRadius: '10rpx'
        }
      });
    }
  }
};
</script>

<style lang="scss">
.Toast-Page {
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
