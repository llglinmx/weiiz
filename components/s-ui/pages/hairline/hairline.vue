<template>
  <s-page page-class="Hairline-Page">
    <div :style="''+$sTheme('border:1px solid {error};padding:20rpx')">普通1px边框</div>
    <div :style="''+$sTheme('border:1px solid {error};padding:20rpx;margin-top:40rpx')">普通1px边框</div>

    <s-hairline all-border border-color="{error}" custom-style="margin-top:40rpx">
      <div style="padding:20rpx">0.5px 全部边框</div>
    </s-hairline>

    <s-hairline all-border border-color="{error}" border-radius="10px" custom-style="margin-top:40rpx">
      <div style="padding:20rpx">0.5px 圆角边框</div>
    </s-hairline>

    <s-hairline
      all-border
      left-border-color="{error}"
      right-border-color="{success}"
      top-border-color="{primary}"
      bottom-border-color="{warning}"
      custom-style="margin-top:40rpx;"
    >
      <div style="padding:20rpx">0.5px 边框不同色</div>
    </s-hairline>

    <s-hairline x-border border-color="{info}" custom-style="margin-top:40rpx">
      <div style="padding:20rpx">0.5px 左右边框</div>
    </s-hairline>

    <s-hairline y-border border-color="{info}" custom-style="margin-top:40rpx">
      <div style="padding:20rpx">0.5px 上下边框</div>
    </s-hairline>

    <s-hairline left-border border-color="{info}" custom-style="margin-top:40rpx">
      <div style="padding:20rpx">0.5px 左边框</div>
    </s-hairline>

    <s-hairline right-border border-color="{error}" custom-style="margin-top:40rpx">
      <div style="padding:20rpx">0.5px 右边框</div>
    </s-hairline>

    <s-hairline top-border border-color="{info}" custom-style="margin-top:40rpx">
      <div style="padding:20rpx">0.5px 上边框</div>
    </s-hairline>

    <s-hairline bottom-border border-color="{info}" custom-style="margin-top:40rpx">
      <div style="padding:20rpx">0.5px 下边框</div>
    </s-hairline>
  </s-page>
</template>

<style lang="scss">
.Hairline-Page {
  padding: 40rpx;
}
</style>
