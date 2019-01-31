* 环境准备
```
1、安装node
2、 安装 yarn tyarn 
# 国内源
$ npm i yarn tyarn -g
# 后面文档里的 yarn 换成 tyarn
$ tyarn -v


```

* 多环境编译  
```
tyarn add cross-env --dev
package.json  中
"build": "cross-env UMI_ENV=prod umi build",
复制 .umirc.js --> .umirc.prod.js
不同的环境可以生成多个文件
使用config/config.js的也适用

```

* 参考  
[umi](https://umijs.org/zh/)  
[dva](https://dvajs.com/)  
[antd](https://ant.design/docs/react/introduce-cn)  
