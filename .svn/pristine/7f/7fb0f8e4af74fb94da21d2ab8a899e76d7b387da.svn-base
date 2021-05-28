import sUi from '@/uni_modules/s-ui';
import * as Utils from '@/utils';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

console.log('编译时间：' + Utils.formatDate(process.env.VUE_APP_TIME));

// #ifdef H5
window.u = Utils;
window.s = sUi;
// #endif

Vue.use(sUi);
App.mpType = 'app';
Vue.prototype.$utils = Utils;
const app = new Vue({ ...App });
app.$mount();
