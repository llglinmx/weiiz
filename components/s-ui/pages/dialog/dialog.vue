<template>
  <s-page page-class="Dialog-Page">
    <div class="btn btn-plain-primary btn-radius" @click="showDialog">弹出</div>
    <div class="btn btn-plain-primary btn-radius" @click="noTitleDialog">不带title</div>
    <div class="btn btn-primary btn-radius" @click="noCancelDialog">不带取消按钮</div>
    <div class="btn btn-plain-primary btn-radius" @click="showMoreTextDialog">多文字</div>
    <div class="btn btn-error btn-radius" @click="toastDialog">配合toast使用</div>
  </s-page>
</template>

<script>
import Dialog from '@/uni_modules/s-ui/utils/dialog';
import Toast from '@/uni_modules/s-ui/utils/toast';

export default {
  data: () => ({}),
  computed: {},
  methods: {
    showDialog () {
      Dialog({
        title: '提示',
        message: '这是一个模态弹窗'
      }).then(() => {
        Toast('用户点击确定');
      }, () => {
        Toast('用户点击取消');
      });
    },
    noTitleDialog () {
      Dialog({
        message: '这是一个模态弹窗'
      }).then(() => { }, () => { });
    },
    noCancelDialog () {
      Dialog({
        title: '提示',
        message: '这是一个模态弹窗',
        showCancel: false
      }).then(() => { }, () => { });
    },
    showMoreTextDialog () {
      Dialog({
        title: '提示',
        message: '我与父亲不相见已二年余了，我最不能忘记的是他的背影。'
      }).then(() => { }, () => { });
    },
    toastDialog () {
      Dialog({
        title: '提示',
        message: '您确定删除吗？'
      }).then(() => {
        Toast.success('删除成功');
      }, () => { });
    }
  }
};
</script>

<style lang="scss">
.Dialog-Page {
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
