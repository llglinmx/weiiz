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
		}
	}
</script>

<style>
	
	@import url("./static/css/iconfont/iconfont.css");
	/* import "./static/css/iconfont/iconfont.css" */
	/*每个页面公共css */
	page{
		height: 100%;
	}
	
	.flex-center{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.icon-font{
		display: flex;
		align-items: center;
		font-weight: 500;
	}
	.content{
		height: 100%;
	}
</style>
