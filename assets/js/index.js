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
  repo: 'https://github.com/Kiromiter/blog/',
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
  formatUpdated: '{MM}/{DD} {HH}:{mm}',
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

}