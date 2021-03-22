import baseconfig from "./baseconfig.js"

const httpClient = {
	request: function(method, url, data) {
		var headers = {
			// "Content-Type": "application/x-www-form-urlencoded",
			'content-type': 'application/x-www-form-urlencoded',
			"Authorization": uni.getStorageSync("token")
		};

		return new Promise((resolve, reject) => {
			uni.showLoading({
				title: "加载中",
				mask: true
			});

			uni.request({
				url: url,
				header: headers,
				data: data,
				method: method,
				dataType: 'json',
				success: function(res) {
					uni.hideLoading()
					// console.log("接口获取原始数据：-------------------",res.data)
					console.log(url)
					if (res.statusCode == 402) {
						uni.showToast({
							icon: 'none',
							duration: 1000,
							title: "登录超时，请重新登录"
						});
						setTimeout(function() {
							uni.reLaunch({
								url: '/pagesIndex/login/login'
							});
						}, 1500);
					} else {
						if (res.data.error != null) {
							uni.showToast({
								icon: 'none',
								duration: 1000,
								title: res.data.error.message
							});
							return;
						} else {
							resolve(res.data);
						}
					}
				},
				fail: function(err) {
					uni.hideLoading()
					reject(err)
				}
			})
		})
	},
	Get: function(url, data) {
		let allurl = this.geturl(url);
		return this.request('GET', allurl, data)
	},
	Post: function(url, data) {
		let allurl = this.geturl(url);
		return this.request('POST', allurl, data)
	},
	Put: function(url, data) {
		let allurl = this.geturl(url);
		return this.request('PUT', allurl, data)
	},
	geturl: function(url) {
		return baseconfig.server + url
	}
};

module.exports = httpClient
