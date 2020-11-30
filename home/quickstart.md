## 1. 全局安装 docsify-cli 工具

```
npm i docsify-cli -g
```

## 2. 初始化项目

```
docsify init ./docs
```

## 3. 本地预览

```
docsify serve docs
```

## 4. 手动初始化

- 如果不喜欢 npm 或者觉得安装工具太麻烦，我们可以直接手动创建一个 index.html 文件。

```html
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta charset="UTF-8">
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/vue.css">
</head>
<body>
  <div id="app"></div>
  <script>
    window.$docsify = {
      //...
    }
  </script>
  <script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
</body>
</html>
```
参考链接：[快速开始](https://docsify.js.org/#/zh-cn/quickstart)