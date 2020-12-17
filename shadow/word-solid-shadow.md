CSS 实现立体文字阴影。

#### 关键点

- 立体文字阴影的关键点在于多层 text-shadow 的叠加

- 这里合理运用了 SASS 函数来自动计算多层 text-shadow 的 CSS 代码

- 运用了 Sass 的颜色函数，渐进实现层级阴影颜色
    
    - fade-out: 改变颜色的透明度，让颜色更加透明
    
    - desaturate: 改变颜色的饱和度值，让颜色更少的饱和


```html
<div class="g-container">
  <div>Txt Shadow</div>
  <div class="left">TxT Long Shadow</div>
</div>
```

```scss
@function makeLongShadow($color, $direction: 1) {
  $val: 0px 0px $color;
  @for $i from 1 through 30 {
    $color: fade-out(desaturate($color, 1%), 0.02);
    $val: #{$val}, #{$direction * $i}px #{$i}px #{$color};
  }
  @return $val;
}

.g-container {
  height: 100%;
  width: 100%;
  background: #03a9f4;

  & > div {
    text-align: center;
    font-size: 15vmin;
    line-height: 28vh;
    text-shadow: makeLongShadow(hsla(14, 100%, 30%, 1));
    color: hsl(14, 100%, 60%);
  }

  .left {
    text-shadow: makeLongShadow(hsla(231, 50%, 30%, 1), -1);
    color: hsl(231, 50%, 60%);
  }
}
```
