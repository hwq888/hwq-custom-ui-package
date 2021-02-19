# hwq-custom-ui-package

## 如何在本地测试自定义ui组件是否可用
```
第一步：执行打包命令
npm run build-bundle

第二步：从项目跟目录下面执行
npm link
（执行npm link命令会在全局npm node_modules文件夹(与安装我们的全局npm依赖node_modules文件夹相同)中为当前包创建一个符号链接）

第三步：在使用该组件的项目中执行
npm link hwq-custom-ui-package

```

## 如何发布npm包
```
第一步：登录
npm login

第二步：发布（注意：版本不能相同）
npm publish

```

## vue自定义ui组件上传至npm中怎么使用
```
第一步：安装
npm install hwq-custom-ui-package

第二步：运用
import {
  Dialog,
  Message
} from 'hwq-custom-ui-package'

Vue.use(Dialog)
Vue.use(Message)

```
