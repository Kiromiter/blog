## 1. 自定义插件

docsify 提供了一套插件机制，其中提供的钩子（hook）支持处理异步逻辑，可以很方便的扩展功能。

完整功能

```js
window.$docsify = {
  plugins: [
    function(hook, vm) {
      hook.init(function() {
         // 初始化完成后调用，只调用一次，没有参数。
      });

      hook.beforeEach(function(content) {
        // 每次开始解析 Markdown 内容时调用
        // ...
        return content;
      });

      hook.afterEach(function(html, next) {
        // 解析成 html 后调用。
        // beforeEach 和 afterEach 支持处理异步逻辑
        // ...
        // 异步处理完成后调用 next(html) 返回结果
        next(html);
      });

      hook.doneEach(function() {
        // 每次路由切换时数据全部加载完成后调用，没有参数。
        // ...
      });

      hook.mounted(function() {
        // 初始化并第一次加载完成数据后调用，只触发一次，没有参数。
      });

      hook.ready(function() {
        // 初始化并第一次加载完成数据后调用，没有参数。
      });
    }
  ]
};
```

>! 如果需要用 docsify 的内部方法，可以通过 window.Docsify 获取，通过 vm 获取当前实例。

## 2. 例子

###### 页尾

用afterEach给每个页面的末尾加上 footer(修改HTML)

```js
window.$docsify = {
  plugins: [
    function (hook) {
      var version = window.Docsify.version
      var footer = [
        '<hr/>',
        '<footer>',
        '<span><a href="https://github.com/Kiromiter/blog">源码地址</a> &copy;2020</span>',
        '<span style="padding:0 10px">作者: <a href="https://github.com/Kiromiter" target="_blank">Kiromiter</a>.</span>',
        '<span>docsify版本: ' + version + '</span>',
        '</footer>'
      ].join('');

      hook.afterEach(function (html) {
        return html + footer;
      });
    }
  ]
};
```

###### 编辑文档

用beforeEach给每个页面的开头加上编辑时间和链接 (修改MD)

```js
window.$docsify = {
// 显示文档更新日期
  formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}',
  plugins: [
    function (hook) {
      hook.beforeEach(function (html) {
        var url =
          'https://github.com/Kiromiter/blog/tree/main/' +
          vm.route.file;
        var editHtml = '[📝 编辑文档](' + url + ')\n';

        return (
          '最新修改时间： {docsify-updated} ' + editHtml +
          html
        );
      });
    }
  ]
};
```

###### 插件

添加 gitalk 插件

```js
const gitalkConfig = {
  clientID: 'clientID',
  clientSecret: 'clientSecret',
  repo: 'https://github.com/Kiromiter/blog',
  owner: 'Kiromiter',
  admin: ['Kiromiter'],
  // facebook-like distraction free mode
  distractionFreeMode: false,
  language: "zh-CN",
}
window.$docsify = {
  plugins: [
    function (hook) {
       hook.doneEach(function () {
        var label, domObj, main, divEle, gitalk;
        label = vm.route.path.split("/").pop();
        domObj = Docsify.dom;
        main = domObj.getNode("#main");
        Array.apply(
          null,
          document.querySelectorAll("div.gitalk-container")
        ).forEach(function (ele) {

          ele.remove();
        });

        divEle = domObj.create("div");
        divEle.id = "gitalk-container-" + label;
        divEle.className = "gitalk-container";
        divEle.style = "width: " + main.clientWidth + "px; margin: 0 auto 20px;";
        main.insertBefore(divEle, domObj.find("footer").previousElementSibling);
        console.log('gitalk', gitalk);
        gitalk = new Gitalk(
          Object.assign(gitalkConfig, {
            id: !label ? "home" : label
          })
        );
        console.log('gitalk', gitalk);
        gitalk.render("gitalk-container-" + label);
      });
    }
  ]
};
```


## 3. 小技巧

###### 获取 docsify 版本

```js
console.log(window.Docsify.version)
```

参考链接：[插件列表](https://docsify.js.org/#/zh-cn/write-a-plugin)