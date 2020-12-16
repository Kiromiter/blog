本例使用 `CSS flex` 实现瀑布流布局

关键点，横向 flex 布局嵌套多列纵向 flex 布局，使用了 `百分比` 进行自适应缩放

```pug
div.g-container
  -for(var i = 0; i < 4; i++)
    div.g-queue
      -for(var j = 0; j < 8; j++)
        div.g-item
```

```vue
<div class="g-container">
  <div class="g-queue" v-for="line in lineCount" :key="line">
    <div class="g-item" v-for="item in count" :key="item"></div>
  </div>
</div>
```

```scss
$lineCount: 4;
$count: 8;

@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}

@function randomColor() {
  @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.g-container {
  display: flex;
  justify-content: space-between;
}

.g-queue {
  display: flex;
  flex-direction: column;
  flex-basis: 24%;
}

.g-item {
  position: relative;
  width: 100%;
  margin: 1% 0;
}

@for $i from 1 to $lineCount + 1 {
  .g-queue:nth-child(#{$i}) {
    @for $j from 1 to $count + 1 {
      .g-item:nth-child(#{$j}) {
        height: #{randomNum(300, 50)}px;
        background: randomColor();
        &::after {
          content: "#{$j}";
          color: #fff;
          font-size: 24px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
```

margin 属性值为百分比时的边距是基于 `包含块` || `父元素的宽度`来计算的

flex 属性需要 `ie 10` 才能兼容

flex-basis 是 flex 中的 `子元素` 属性，默认为`auto`   

!> 此属性 `优先级大于width`