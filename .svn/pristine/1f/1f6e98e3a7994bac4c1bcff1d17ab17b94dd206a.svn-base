import Vue from 'vue'
import App from './App'
import store from './store'

import {
	get,
	post,
	put,
	del
} from './store/index.js'
Vue.prototype.apiget = get
Vue.prototype.apipost = post
Vue.prototype.apiput = put
Vue.prototype.apidelte = del

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
