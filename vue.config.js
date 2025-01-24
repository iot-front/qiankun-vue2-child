const path = require('path')
const { name } = require('./package');
const CompressionPlugin = require('compression-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
	productionSourceMap: false,
	publicPath: './',
	outputDir: 'dist',
  configureWebpack: {
    entry: './src/main.js',
    output: {
      library: `${name}-[name]`,
			libraryTarget: 'umd',
    }
  },
  chainWebpack: (config) => {
    config.module
        .rule('svg')
        .exclude.add(resolve('./src/components/base/svgIcon')) //注意svg的存储地址
        .end()
    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('./src/components/base/svgIcon'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        })
        .end()
    if (process.env.NODE_ENV === 'production') {
      config.plugin('compressionPlugin').use(
        new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.(js|css|html)$/, // 匹配文件名
          threshold: 1024, // 小于10KB就不进行压缩
          minRatio: 0.8, // 压缩比率
          deleteOriginalAssets: false // 不删除源文件
        })
      )
    }
  },
	css: {
		loaderOptions: {
			scss: {
				additionalData: `@import "@/assets/css/var.scss";`
			}
		}
	},
	devServer: {
		port: 2010,
		headers: {
      "Access-Control-Allow-Origin": "*"
    },
		client: {
      overlay: false
		},
	}
};
