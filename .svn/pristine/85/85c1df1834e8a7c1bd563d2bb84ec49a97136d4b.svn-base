const pkg = require('./package.json');
// 环境
process.env.VUE_APP_ENV = process.env.NODE_ENV;
// 版本号
process.env.VUE_APP_VERSION = pkg.version;
// 编译时间
process.env.VUE_APP_TIME = new Date().toLocaleString();

// 打包时把process.env.NODE_ENV改为'production'
if (process.env.NODE_ENV !== 'development') {
  process.env.NODE_ENV = 'production';
}

module.exports = {
  productionSourceMap: false,
  configureWebpack (config) {
    // 取消控制台打包大小警告
    config.performance = {
      hints: false
    };
  }
};
