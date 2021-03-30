import httpClient from '../static/js/ajax.js'

export function get(url, params) {
	return httpClient.Get(url, params)
};
export function post(url, params) {
	return httpClient.Post(url, params)
};
export function put(url, params) {
	return httpClient.Put(url, params)
};
export function del(url, params) {
	console.log(url)
	return httpClient.Delete(url, params)
};



import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		isAdd: false, //用于判断地址
		checkId: -1, //用于判断是否选择技师
		checkCouponId: -1, //用户判断是否选择优惠券
		preferentialAmount: 0, //优惠券优惠金额
		balance: 0, //余额
		userInfo: {}, //用户信息
		editText:'',//修改文本
	},
	mutations: {
		//用于判断是否添加地址 等同于发送监听
		upAdd(state, bool) {
			state.isAdd = bool
		},
		// 选择按摩技师
		upCheckId(state, id) {
			state.checkId = id
		},

		// 选择优惠券
		upCheckCouponId(state, id) {
			state.checkCouponId = id
		},
		// 优惠券优惠金额
		upPreferentialAmount(state, money) {
			state.preferentialAmount = money
		},

		// upBalance 更新余额方法
		upBalance(state, moeny) {
			state.balance = moeny
		},
		//用户信息方法
		upUserInfo(state, item) {
			state.userInfo = item
		},
		// 修改信息
		upEditText(state,text){
			state.editText = text
		}
	},
	actions: {}
})
export default store
