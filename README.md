### 从零到一

项目搭建过程如下：

```bash
$ cd ~
$ mkdir react-demo-0-1 && cd react-demo-0-1
$ npm init
$ cnpm install --save-dev react react-dom
$ cnpm install --save-dev webpack webpack-cli webpack-dev-server
$ cnpm install --save-dev babel-core babel-polyfill babel-preset-es2015 babel-preset-stage-2 babel-preset-react

$ touch readme.md .gitignore .editorconfig .babelrc
$ mkdir src dist
$ touch src/index.html src/index.js src/index.css
$ touch webpack.config.js


$ npm install --save-dev html-webpack-plugin

$ npm install --save-dev css-loader style-loader file-loader url-loader babel-loader html-loader

# 其他
# 用以处理HTML中的图片。可以使用Html-loader替代
$ npm install --save-dev html-withimg-loader
```


上面的过程指的是，当你面对一个空的文件夹的时候，该如何操作，能搭建成功一个可用的react项目。

下面是如何直接使用这个仓库：

### 直接使用该仓库

```bash
$ cd ~
$ git clone https://github.com/pelligit/react-from-0-1.git
$ cd react-from-0-1
$ npm install
$ npm start
```
