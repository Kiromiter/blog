本例使用 CSS grid 实现瀑布流布局

关键点：

- 使用 grid-template-columns、grid-template-rows 分割行列
- 使用 grid-row 控制每个 item 的所占格子的大小


```pug
div.g-container
  -for(var i=0;i<8;i++)
    div.g-item
```

```vue
<div class="g-container">
  <div class="g-item" v-for="item in count" :key="item"></div>
</div>
```

```scss
$count: 8;
$line: 4;
$height: 12;

@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}

@function randomColor() {
  @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.g-container {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat($height, 1fr);
  gap: 10px;
}

@for $i from 1 to $count + 1 {
  .g-item:nth-child(#{$i}) {
    position: relative;
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

@for $i from 1 to $line + 1 {
  $high: randomNum($height - 1, 1);
  .g-item:nth-child(#{$i}) {
    grid-column: $i;
    grid-row: 1 / #{$high};
  }
  .g-item:nth-child(#{$i + $line}) {
    grid-column: $i;
    grid-row: #{$high} / #{$height + 1};
  }
}
```

浏览器兼容：

Chrome | Opera | Firefox | IE | Edge | Safari
---|---|---|---|---|---
57 | 44 | 52 | 11*(旧语法) | 16 | 10.1


参考链接：

[CSS Grid 网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)