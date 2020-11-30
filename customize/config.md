## 1. el

- 类型：`String`
- 默认值：`#app`

docsify 初始化的挂载元素，可以是一个 CSS 选择器，默认为 #app 如果不存在就直接绑定在 body 上。

```js
window.$docsify = {
  el: '#app',
};
```

## 2. repo

- 类型：`String`
- 默认值：`null`

配置仓库地址或者 username/repo 的字符串，会在页面右上角渲染一个 GitHub Corner 挂件。

```js
window.$docsify = {
  repo: 'Kiromiter/blog',
  // or
  repo: 'https://github.com/Kiromiter/blog/',
};
```

## 3. hideSidebar

- 类型：`Boolean`
- 默认值：`true`

这个选项用来完全隐藏侧边栏，侧边栏的任何内容都不会被渲染。

```js
window.$docsify = {
  hideSidebar: true,
};
```

## 4. subMaxLevel

- 类型：`Number`
- 默认值：`0`

自定义侧边栏后默认不会再生成目录，你也可以通过设置生成目录的最大层级开启这个功能。

```js
window.$docsify = {
  subMaxLevel: 2,
};
```

## 5. auto2top

- 类型：`Boolean`
- 默认值：`false`

切换页面后是否自动跳转到页面顶部。

```js
window.$docsify = {
  auto2top: true,
};
```

## 6. homepage

- 类型：`String`
- 默认值：`READ.md`

设置首页文件加载路径。适合不想将 README.md 作为入口文件渲染，或者是文档存放在其他位置的情况使用。

```js
window.$docsify = {
  // 入口文件改为 /home.md
  homepage: 'home.md',

  // 文档和仓库根目录下的 README.md 内容一致
  homepage:
    'https://github.com/Kiromiter/blog/README.md',
};
```

## 7. basePath

- 类型：`String`

文档加载的根路径，可以是二级路径或者是其他域名的路径。

```js
window.$docsify = {
  basePath: '/path/',

  // 直接渲染其他域名的文档
  basePath: 'https://docsify.js.org/',

  // 甚至直接渲染其他仓库
  basePath:
    'https://github.com/Kiromiter/blog/',
};
```

## 8. relativePath

- 类型：`Boolean`
- 默认值：`false`

如果该选项设为 true ，那么链接会使用相对路径。

例如，像这样的目录结构：

```text
.
└── docs
    ├── README.md
    ├── guide.md
    └── zh-cn
        ├── README.md
        ├── guide.md
        └── config
            └── example.md
```

如果 启用 了相对路径，当前链接是 http://domain.com/zh-cn/README ，对应的链接会解析为：

```text
guide.md              => http://domain.com/zh-cn/guide
config/example.md     => http://domain.com/zh-cn/config/example
../README.md          => http://domain.com/README
/README.md            => http://domain.com/README
```

```js
window.$docsify = {
  // 启用相对路径
  relativePath: true,

  // 禁用相对路径（默认值）
  relativePath: false,
};
```

## 9. logo

- 类型：`String`

在侧边栏中出现的网站图标，你可以使用CSS来更改大小

```js
window.$docsify = {
  logo: '/_media/icon.svg',
};
```

## 10. name

- 类型：`String`

文档标题，会显示在侧边栏顶部。

```js
window.$docsify = {
  name: 'learning',
};
```

name 项也可以包含自定义 HTML 代码来方便地定制。

```js
window.$docsify = {
  name: '<span>learning</span>',
};
```

## 11. nameLink

- 类型：`String`
- 默认值：`window.location.pathname`

点击文档标题后跳转的链接地址。

```js
window.$docsify = {
  nameLink: '/',

  // 按照路由切换
  nameLink: {
    '/zh-cn/': '/zh-cn/',
    '/': '/',
  },
};
```

## 12. markdown

- 类型：`Object|Function`

```js
window.$docsify = {
  // object
  markdown: {
    smartypants: true,
    renderer: {
      link: function() {
        // ...
      },
    },
  },

  // function
  markdown: function(marked, renderer) {
    // ...
    return marked;
  },
};
```

## 13. themeColor

- 类型：`String`

替换主题色。利用 CSS3 支持变量的特性，对于老的浏览器有 polyfill 处理。

```js
window.$docsify = {
  themeColor: '#3F51B5'
};
```

## 14. alias

- 类型：`Object`

定义路由别名，可以更自由的定义路由规则。 支持正则。

```js
window.$docsify = {
  alias: {
    '/foo/(+*)': '/bar/$1', // supports regexp
    '/zh-cn/changelog': '/changelog',
    '/changelog':
      'https://raw.githubusercontent.com/docsifyjs/docsify/master/CHANGELOG',
    '/.*/_sidebar.md': '/_sidebar.md', // See #301
  },
};
```

## 15. autoHeader

- 类型：`Boolean`

同时设置 loadSidebar 和 autoHeader 后，可以根据 _sidebar.md 的内容自动为每个页面增加标题。

```js
window.$docsify = {
  loadSidebar: true,
  autoHeader: true,
};
```

## 16. *executeScript(使用失败)

- 类型：`Boolean`

执行文档里的 script 标签里的脚本，只执行第一个 script (demo)。 如果 Vue 存在，则自动开启。

```js
window.$docsify = {
  executeScript: true,
};
```

```markdown
## This is test

<script>
  console.log(2333)
</script>
```

注意如果执行的是一个外链脚本，比如 jsfiddle 的内嵌 demo，请确保引入` external-script `插件。

## 17. noEmoji

- 类型：`Boolean`

禁用 emoji 解析。

```js
window.$docsify = {
  noEmoji: true,
};
```

## 18. mergeNavbar

- 类型：`Boolean`

小屏设备下合并导航栏到侧边栏。

```js
window.$docsify = {
  mergeNavbar: true,
};
```

## 19. 格式已更新

- 类型：`String|Function`

我们可以通过{docsify-updated }变量显示文档更新日期。并且通过formatUpdated配置日期格式。[参考](https://github.com/lukeed/tinydate#patterns)

```js
window.$docsify = {
  formatUpdated: '{MM}/{DD} {HH}:{mm}',

  formatUpdated: function(time) {
    // ...

    return time;
  },
};
```

## 20. externalLinkTarget

- 类型：`String`
- 默认：`_blank`

外部链接的打开方式。默认为 _blank （在新窗口或者标签页中打开）

```js
window.$docsify = {
  externalLinkTarget: '_self', // default: '_blank'
};
```

## 21. *cornerExternalLinkTarget(使用失败)

- 类型：`String`
- 默认：`_blank`

右上角链接的打开方式。默认为 _blank （在新窗口或者标签页中打开）

```js
window.$docsify = {
  cornerExternalLinkTarget: '_self', // default: '_blank'
};
```

## 22. *externalLinkRel(使用失败)

- 类型：`String`
- 默认：`noopener`

默认为` noopener (no opener) `可以防止新打开的外部页面（当 externalLinkTarget 设为 _blank 时）能够控制我们的页面，没有设为` _blank `的话就不需要设置这个选项了。

```js
window.$docsify = {
  externalLinkRel: '', // default: 'noopener'
};
```

## 23. routerMode

- 类型：`String`
- 默认：`hash`

```js
window.$docsify = {
  routerMode: 'history', // default: 'hash' // 会有一些显示问题
};
```

## 24. noCompileLinks

- 类型：`Array`

有时我们不希望 docsify 处理我们的链接。

```js
window.$docsify = {
  noCompileLinks: ['/foo', '/bar/.*'],
};
```

## 25. requestHeaders

- 类型：`Object`

设置请求资源的请求头。

```js
window.$docsify = {
  requestHeaders: {
    'x-token': 'xxx',
  },
};
```

例如设置缓存

```js
window.$docsify = {
  requestHeaders: {
    'cache-control': 'max-age=600',
  },
};
```

## 26. ext

- 类型：`String`

资源的文件扩展名。

```js
window.$docsify = {
  ext: '.md',
};
```

## 27. fallbackLanguages

- 类型：`Array<string>`

一个语言列表。在浏览这个列表中的语言的翻译文档时都会在请求到一个对应语言的翻译文档，不存在时显示默认语言的同名文档.

Example:

- 尝试访问/de/overview，如果存在则显示
- 如果不存在则尝试/overview（取决于默认语言），如果存在即显示
- 如果也不存在，显示404页面

```js
window.$docsify = {
  fallbackLanguages: ['fr', 'de'],
};
```

## 28. notFoundPage

- 类型：`Boolean | String | Object`

在找不到指定页面时加载_404.md:

```js
window.$docsify = {
  // notFoundPage: true,
  
  // 加载自定义404页面
  // notFoundPage: 'my404.md',
  
  // 加载正确的本地化过的404页面
  notFoundPage: {
    '/': '_404.md',
    '/de': 'de/_404.md',
  },
};
```

> 注意: 配置过`fallbackLanguages`这个选项的页面与这个选项`notFoundPage`冲突。

## 29. topMargin

- 类型：`Number`
- 默认值：`0`

让你的内容页在滚动到指定的锚点时，距离页面顶部有一定空间。当你使用` 固定页头 ` 布局时这个选项很有用，可以让你的锚点对齐标题栏。

```js
window.$docsify = {
  topMargin: 90, // default: 0
};
```

参考链接：[配置项](https://docsify.js.org/#/zh-cn/configuration)