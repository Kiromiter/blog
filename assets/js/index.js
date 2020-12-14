const gitalkConfig = {
  clientID: '421bcf76f3ff3f068d3b',
  clientSecret: '5902e7916955586aa0720469dd0a90abd540b730',
  repo: 'blog',
  owner: 'Kiromiter',
  admin: ['Kiromiter'],
  // facebook-like distraction free mode
  distractionFreeMode: false,
  language: "zh-CN",
}
window.$docsify = {
  loadSidebar: true,
  autoHeader: true,
  subMaxLevel: 2,
  loadNavbar: true,
  // coverpage: true,
  coverpage: ['/', '/test/'],
  onlyCover: true,
  // name: 'learning',
  name: '<span>learning</span>',
  // repo: 'Kiromiter/blog',
  repo: 'https://github.com/Kiromiter/blog',
  auto2top: true,
  nameLink: {
    '/test/': '#/test/',
    '/': '/',
  },
  themeColor: '#3F51B5',
  // 执行第一个 script 标签内容
  // executeScript: true,
  // 禁用 emoji
  // noEmoji: true,
  // 小屏设备下合并导航栏到侧边栏
  mergeNavbar: true,
  // 显示文档更新日期
  formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}',
  // 外部链接的打开方式
  // externalLinkTarget: '_blank',
  // 右上角链接的打开方式
  // cornerExternalLinkTarget: '_self', // 无效
  // externalLinkRel: 'noopener',
  // routerMode: 'history',
  // 设置缓存
  // requestHeaders: {
  //   'cache-control': 'max-age=600',
  // },
  // 锚点对齐顶部的距离
  // topMargin: 90,
  // 完整配置参数
  // 完整配置参数
  search: {
    maxAge: 86400000, // 过期时间，单位毫秒，默认一天
    // paths: 'auto', // or 'auto'
    // placeholder: 'Type to search',
    // 支持本地化
    placeholder: {
      '/test/': '测试',
      '/': '搜索'
    },
    noData: '找不到结果!',
    // 支持本地化
    // noData: {
    //   '/test/': '找不到结果',
    //   '/': 'No Results'
    // },
    // 搜索标题的最大层级, 1 - 6
    depth: 6,
    hideOtherSidebarContent: true, // 是否隐藏其他侧边栏内容
    // 避免搜索索引冲突
    // 同一域下的多个网站之间
    // namespace: 'website-1',
    // 使用不同的索引作为路径前缀（namespaces）
    // 注意：仅适用于 paths: 'auto' 模式
    //
    // 初始化索引时，我们从侧边栏查找第一个路径
    // 如果它与列表中的前缀匹配，我们将切换到相应的索引
    // pathNamespaces: ['/zh-cn', '/ru-ru', '/ru-ru/v1'],

    // 您可以提供一个正则表达式来匹配前缀。在这种情况下，
    // 匹配到的字符串将被用来识别索引
    // pathNamespaces: /^(\/(zh-cn|ru-ru))?(\/(v1|v2))?/
    copyCode: {
      buttonText: '点击复制',
      errorText: '错误',
      successText: '已复制'
    },
    count: {
      countable: true,
      fontsize: '0.9em',
      color: 'rgb(90,90,90)',
      language: 'chinese'
    }
  },
  plugins: [
    function (hook, vm) {
      var version = window.Docsify.version
      var footer = [
        '<hr/>',
        '<footer>',
        '<span><a href="https://github.com/Kiromiter/blog">源码地址</a> &copy;2020</span>',
        '<span style="padding:0 10px">作者: <a href="https://github.com/Kiromiter" target="_blank">Kiromiter</a>.</span>',
        '<span>docsify 版本: ' + version + '</span>',
        '</footer>'
      ].join('');
      hook.beforeEach(function (html) {
        var url =
          'https://github.com/Kiromiter/blog/tree/main/' +
          vm.route.file;
        var editHtml = '[📝 编辑文档](' + url + ')\n\n';

        return (
          '最新修改时间： {docsify-updated} ' + editHtml +
          html
        );
      });
      hook.afterEach(function (html) {
        return html + footer;
      });
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
}
// const gitalk = new Gitalk({
//   clientID: '421bcf76f3ff3f068d3b',
//   clientSecret: 'fd491b3d2a1f484737ebddcde58030d38e3cea20',
//   repo: 'Blog',
//   owner: 'Kiromiter',
//   admin: ['Kiromiter'],
//   // facebook-like distraction free mode
//   distractionFreeMode: false
// })