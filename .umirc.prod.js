// ref: https://umijs.org/config/
export const contextPath = '/myapp/';
export default {
  // base: '/myapp/',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
      },
      title: 'myapp',
      dll: true,
      locale: {},
      hardSource: false,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
    }],
  ],
  // history: 'hash',
  chainWebpack(config, { webpack }) {
    config.merge({
      plugin: {
        install: {
          plugin: require('uglifyjs-webpack-plugin'),
          args: [{
            parallel: true,
            sourceMap: false,
            uglifyOptions: {
              compress: {
                // 删除所有的 `console` 语句
                drop_console: true,
              },
              output: {
                // 最紧凑的输出
                beautify: true,
                // 删除所有的注释
                comments: true,
              },
            },
          }],
        },
      },
    });
    config.optimization.splitChunks({
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|less)$/,
          chunks: 'async',
          minChunks: 1,
          minSize: 0,
        },
      },
    });
  },
  treeShaking: true,
  define: {
    // 全局变量，文件中直接使用
    contextPath: contextPath,
  },
};
