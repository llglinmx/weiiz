var fileHost = 'https://oss-us-east-1.aliyuncs.com/'; //你的阿里云地址最后面跟上一个/   在你当前小程序的后台的uploadFile 合法域名也要配上这个域名
var config = {
	//aliyun OSS config
	uploadImageUrl: `${fileHost}`, // 默认存在根目录，可根据需求改
	AccessKeySecret: 'FiVJ70q32R3Vy0XjVcQDM2gqcChBiN', // AccessKeySecret 去你的阿里云上控制台上找
	OSSAccessKeyId: 'LTAI4G4GbfFzHvhZW31AiuXB', // AccessKeyId 去你的阿里云上控制台上找
	timeout: 87600, //这个是上传文件时Policy的失效时间
	endpoint: 'xxxxbeijing.aliyuncs.com/', // 上传后的域名
	bucket: 'weiizimage', // OSS仓库名
};
module.exports = config
