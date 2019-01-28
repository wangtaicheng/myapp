
import { resolve } from 'path'
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
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/Loader/Loader',
      },
      title: 'myapp',
      dll: {
        include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch', 'antd/es'],
      },
      hardSource: true,
      locale:{},
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
          /chart\/Container\.js$/,
          /chart\/ECharts\/.+Component\.js$/,
          /chart\/ECharts\/.+ComPonent\.js$/,
          /chart\/ECharts\/theme\/.+\.js$/,
          /chart\/highCharts\/.+Component\.js$/,
          /chart\/highCharts\/mapdata\/.+\.js$/,
          /chart\/Recharts\/.+Component\.js$/,
          /chart\/Recharts\/Container\.js$/,
        ],
      },
    }],
  ],

  alias: {
    src: resolve(__dirname, 'src'),
    assets: resolve(__dirname, 'src/assets'),
    common: resolve(__dirname, 'src/common'),
    containers: resolve(__dirname, 'src/containers'),
    layouts: resolve(__dirname, 'src/layouts'),
    models: resolve(__dirname, 'src/models'),
    pages: resolve(__dirname, 'src/pages'),
    services: resolve(__dirname, 'src/services'),
    utils: resolve(__dirname, 'src/utils'),
    themes: resolve(__dirname, './src/themes'),
    components: resolve(__dirname, 'src/components')
  },
  targets: {
    ie: 11,
  },
  // theme: './theme.js',
  // history: 'hash',
}
