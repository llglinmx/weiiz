<template>
  <s-page page-class="Picker-Page">
    <div class="btn btn-plain-primary btn-block" @click="showOnePicker=true">一级：{{oneSelectLabel}}</div>
    <div class="btn btn-plain-primary btn-block" @click="showTwoPicker=true">二级联动：{{twoSelectLabel}}</div>

    <s-picker :visible.sync="showOnePicker" :list="oneData" v-model="oneIndexList"></s-picker>
    <s-picker :visible.sync="showTwoPicker" :list="twoData" @change="twoChange" v-model="twoIndexList"></s-picker>
  </s-page>
</template>

<script>
import cityJson from './city';

function getCityData (obj, k) {
  const list = [];
  for (const [value, label] of Object.entries(obj[k])) {
    let child = [];
    if (obj[value]) {
      child = getCityData(obj, value);
    }
    list.push({ label, value, child });
  }
  return list;
}

export default {
  data () {
    return {
      cityData: getCityData(cityJson, 1),
      // 一级
      oneData: [],
      showOnePicker: false,
      oneIndexList: [0],
      // 二级
      twoData: [],
      showTwoPicker: false,
      twoIndexList: [0, 0]
    };
  },
  computed: {
    oneSelectLabel () {
      const [index] = this.oneIndexList;
      const obj = this.cityData[index];
      const lable = obj ? obj.label : '';
      return lable;
    },
    twoSelectLabel () {
      const [index, index1] = this.twoIndexList;
      const obj = this.cityData[index];
      const lable = obj ? obj.label : '';

      const obj1 = obj.child[index1];
      const lable1 = obj1 ? obj1.label : '';

      return [lable, lable1].join('-');
    }
  },
  methods: {
    twoChange (i, indexList) {
      if (i == 0) {
        this.twoData = [this.cityData, this.cityData[indexList[i]].child];
      }
    }
  },
  onLoad () {
    this.oneData = [this.cityData];
    this.twoData = [this.cityData, this.cityData[0].child];
  }
};
</script>

<style lang="scss">
.Picker-Page {
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
