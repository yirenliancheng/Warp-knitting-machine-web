const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {//处理不了HTML中的img图片
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',//一个处理器可以不用数组use，用loader就行
        options: {
          //给url添加路径修饰。如果index.html在dist文件夹中，则不用添加publicPath
          publicPath: '/研究生课题/knitting-machine/dist/',
          //图片大小小于8kb，就会被base64处理 优点：减少请求数量（减轻服务器压力） 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          //url-loader默认使用es6模块化解析，html-loader默认使用commonjs引入图片
          //解析时会出现问题：[module Object]
          //解决方法：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          //给图片重命名  取原来哈希值名字的前十位，ext为原来图片的格式
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin()
  ],
  mode: 'development'
};