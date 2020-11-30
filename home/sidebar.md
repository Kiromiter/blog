## 1. 定制侧边栏

```html
<!-- index.html -->

<script>
  window.$docsify = {
    loadSidebar: true
  }
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
```

## 2. 自定义加载的文件名

##### loadSidebar

- 类型:`Boolean|String`
- 默认值: `false`

加载自定义侧边。设置为 true 后会加载 _sidebar.md 文件，也可以自定义加载的文件名。

```js
window.$docsify = {
  // 加载 _sidebar.md
  loadSidebar: true,

  // 加载 summary.md
  loadSidebar: 'summary.md',
};
```

## 3. 嵌套的侧边栏

你可能想要浏览到一个目录时，只显示这个目录自己的侧边栏，这可以通过在每个文件夹中添加一个 _sidebar.md 文件来实现。

_sidebar.md 的加载逻辑是从每层目录下获取文件，如果当前目录不存在该文件则回退到上一级目录。

当然你也可以配置 alias 避免不必要的回退过程。

```html
<script>
  window.$docsify = {
    loadSidebar: true,
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md'
    }
  }
</script>
```

只使用`根目录的_sidebar.md文件`作为侧边栏，忽略`当前文件夹下的 _sidebar.md文件`

## 4. 显示目录

自定义侧边栏同时也可以开启目录功能。设置 subMaxLevel 配置项

##### maxLevel

类型：`Number`

默认值: `6`

默认情况下会抓取文档中所有标题渲染成目录，可配置最大支持渲染的标题层级。

```js
window.$docsify = {
  maxLevel: 4,
};
```

## 5. 忽略副标题

是页面隐藏标题不是侧边栏隐藏标题

当设置了 subMaxLevel 时，默认情况下每个标题都会自动添加到目录中。如果你想忽略特定的标题，可以给它添加` <!-- {docsify-ignore} --> `。

```md
# Getting Started

## Header <!-- {docsify-ignore} -->
```

该标题不会出现在侧边栏的目录中。

要忽略特定页面上的所有标题，你可以在页面的第一个标题上使用` <!-- {docsify-ignore-all} --> `。

```md
# Getting Started <!-- {docsify-ignore-all} -->

## Header
```

该标题不会出现在侧边栏的目录中。

在使用时，` <!-- {docsify-ignore} --> `和` <!-- {docsify-ignore-all} -->` 都不会在页面上呈现。

参考链接：[侧边栏](https://docsify.js.org/#/zh-cn/more-pages)