# 1.涉及的技术内容
  Webpack
  Vue
  Bootstrap
  Git
# 2.需要安装的模块
   加载CSS资源：安装style-loader和css-loader
       npm install --save-dev style-loader css-loader
   加载图片资源：安装file-loader 和url-loader
       npm install --save-dev file-loader
# 3.辅助插件
   清空dist文件夹的插件：clean-webpack-plugin
       npm install clean-webpack-plugin --save-dev
   小心使用，会把index.html也给清除的