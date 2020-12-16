本例使用 column-count 实现瀑布流布局

关键点:

- column-count: 元素内容将被划分的最佳列数
- break-inside: 避免在元素内部插入分页符

```pug
div.g-container
  -for(var j = 0; j < 32; j++)
    div.g-item
```

```vue
<div class="g-container">
  <div class="g-item" v-for="item in count" :key="item"></div>
</div>
```

```scss
$count: 32;

@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}

@function randomColor() {
  @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.g-container {
  column-count: 4;
  column-gap: 1vw;
  padding-top: 0.5vw;
}

.g-item {
  position: relative;
  margin-bottom: 1vw;
  break-inside: avoid;
}

@for $i from 1 to $count + 1 {
  .g-item:nth-child(#{$i}) {
    height: #{randomNum(300, 50)}px;
    background: randomColor();
    &::after {
      content: "#{$i}";
      position: absolute;
      color: #fff;
      font-size: 24px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
```

浏览器支持

Internet Explorer 10 和 Opera 支持 column-count 属性。

Firefox 支持替代的 -moz-column-count 属性。

Safari 和 Chrome 支持替代的 -webkit-column-count 属性。

注释：Internet Explorer 9 以及更早版本的浏览器不支持 column-count 属性。

column-count 属性规定元素应该被分隔的列数：

column-gap 属性规定列之间的间隔：

break-inside 取值

- auto 默认值。允许（但不强制）在原理框中插入任何中断（页面，列或区域）。

- avoid 避免在主体框中插入任何中断（页面，列或区域）。

- avoid-page 避免原理框中的任何分页符。

- avoid-column 避免原理框中的任何列中断。

- avoid-region 避免原理框中的任何区域中断。

- 浏览器支持 ie 10