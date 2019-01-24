import path from 'path';
// ref: https://umijs.org/config/
export default {
  // base: '/myapp',
  // publicPath: '/myapp/',
  exportStatic:{
    htmlSuffix:false,
    dynamicRoot:false,
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'myapp',
      dll: false,
      hardSource: false,
      locale:{},
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

  alias: {
    src: path.resolve(__dirname, 'src'),
    assets: path.resolve(__dirname, 'src/assets'),
    common: path.resolve(__dirname, 'src/common'),
    containers: path.resolve(__dirname, 'src/containers'),
    layouts: path.resolve(__dirname, 'src/layouts'),
    models: path.resolve(__dirname, 'src/models'),
    pages: path.resolve(__dirname, 'src/pages'),
    services: path.resolve(__dirname, 'src/services'),
    utils: path.resolve(__dirname, 'src/utils'),
    components: path.resolve(__dirname, 'src/components')
  },
  targets: {
    ie: 11,
  },
  // theme: './theme.js',
  // history: 'hash',
}
