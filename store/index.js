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
		isAdd: false,
	},
	mutations: {
		//用于判断是否添加地址 等同于发送监听
		upAdd(state, bool) {
			state.isAdd = bool
		},
	},
	actions: {}
})
export default store
