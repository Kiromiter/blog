## 1. 基本用法

```html
<!-- index.html -->

<script>
  window.$docsify = {
    coverpage: true
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>

```

```md
<!-- _coverpage.md -->

![logo](https://docsify.js.org/_media/icon.svg)

# docsify <small>3.5</small>

> 一个神奇的文档网站生成器。

- 简单、轻便 (压缩后 ~21kB)
- 无需生成 html 文件
- 众多主题

[GitHub](https://github.com/docsifyjs/docsify/)
[Get Started](#docsify)
```

## 2. 自定义背景

目前的背景是随机生成的渐变色，我们自定义背景色或者背景图。在文档末尾用添加图片的 Markdown 语法设置背景。


```md
<!-- _coverpage.md -->

# docsify <small>3.5</small>

[GitHub](https://github.com/docsifyjs/docsify/)
[Get Started](#quick-start)

<!-- 背景图片 -->

![](_media/bg.png)

<!-- 背景色 -->

![color](#f0f0f0)
```

## 3. 封面作为首页

通常封面和首页是同时出现的，当然你也是当封面独立出来通过设置onlyCover 选项。

##### onlyCover

- 类型: Boolean

只在访问主页时加载封面。不加载主页。

```js
window.$docsify = {
  onlyCover: true,
};
```

## 4. 多个封面

如果你的文档网站是多语言的，或许你需要设置多个封面。

例如你的文档目录结构如下

```text
.
└── docs
    ├── README.md
    ├── guide.md
    ├── _coverpage.md
    └── zh-cn
        ├── README.md
        └── guide.md
        └── _coverpage.md
```

那么你可以这么配置

```js
window.$docsify = {
  coverpage: ['/', '/zh-cn/']
};
```

或者指定具体的文件名

```js
window.$docsify = {
  coverpage: {
    '/': 'cover.md',
    '/zh-cn/': 'cover.md'
  }
};
```

## 5. coverpage

- 类型:`Boolean|String|String[]|Object`
- 默认值: `false`

```js
window.$docsify = {
  coverpage: true,

  // 指定文件名
  coverpage: 'cover.md',

  // 多封面
  coverpage: ['/', '/zh-cn/'],

  // 多封面指定文件名
  coverpage: {
    '/': 'cover.md',
    '/zh-cn/': 'cover.md',
  },
};
```
参考链接：[封面](https://docsify.js.org/#/zh-cn/cover)