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
	
	/* #ifdef APP-NVUE */
		@font-face {
		  font-family: iconfont;  /* Project id 2394062 */
		  src: url('/static/css/iconfont/iconfont.eot?t=1545807318834');
		  src: url('/static/css/iconfont/iconfont.eot?t=1545807318834#iefix') format('embedded-opentype'),
			url('/static/css/iconfont/iconfont.woff?t=1545807318834') format('woff'),
			url('/static/css/iconfont/iconfont.ttf?t=1545807318834') format('truetype'),
			url('/static/css/iconfont/iconfont.svg?t=1545807318834#iconfont') format('svg');
		}
		.iconfont {
		  font-family: iconfont !important;
		  font-size: 16px;
		  font-style: normal;
		}
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

	.overflowText {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* #endif */
</style>
