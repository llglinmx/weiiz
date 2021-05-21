<script>
	// import "./static/css/iconfont/iconfont.css";
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	/* #ifndef APP-NVUE */
	@import url("./static/css/iconfont/iconfont.css");

	/* #endif */

	/* import "./static/css/iconfont/iconfont.css" */
	/*每个页面公共css */

	/* #ifndef APP-NVUE */
	page {
		height: 100%;
	}

	.flex-center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon-font {
		display: flex;
		align-items: center;
		font-weight: 500;
	}

	.content-box {
		height: 100%;
	}

	/* #endif */
	
	
</style>
