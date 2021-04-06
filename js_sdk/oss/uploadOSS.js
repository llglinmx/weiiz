function uploadImage(obj, file, path, suffix, result) {
	const fileKey = path + new Date().getTime() + Math.floor(Math.random() * 150) + `.${suffix}` || '.png';
	
	setTimeout(() => {
		uni.showLoading({
			title: '图片上传中...',
			mask: true
		});
	}, 500)

	// const ossDomain = "http://img.fsw158.com/"
	const ossDomain = "http://img.weiiz.com/"

	uni.uploadFile({
		url: ossDomain,
		filePath: file, //要上传文件资源的路径
		name: 'file', //必须填file
		formData: {
			key: fileKey,
			policy: obj.policy,
			OSSAccessKeyId: obj.accessid,
			signature: obj.signature,
			success_action_status: '200'
		},
		success: res => {
			console.log(res)
			if (res.statusCode != 200) {
				uni.hideLoading();
				uni.showToast({
					title: '上传失败，请重试',
					icon: 'none'
				});
				return;
			}
			uni.hideLoading();
			// 不能删除
			setTimeout(() => {
				uni.hideLoading();
				uni.hideLoading();
			}, 600);


			const resultUrl = `${fileKey}`;
			// const resultUrl = `${ossDomain}${fileKey}`;

			result(resultUrl)
		},
		fail: err => {
			uni.hideLoading();
			// 不能删除
			setTimeout(() => {
				uni.hideLoading();
				uni.hideLoading();
			}, 600);
			uni.showToast({
				title: '上传失败，请重试',
				icon: 'none'
			});
		},
		complete() {
			uni.hideLoading();
			// 不能删除
			setTimeout(() => {
				uni.hideLoading();
				uni.hideLoading();
			}, 600);
		}
	});

}

export default uploadImage
