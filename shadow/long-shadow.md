CSS 实现线性渐变模拟长阴影。

#### 关键点

- 借用了元素的两个伪元素

- 通过渐变色填充两个伪元素，再通过位移、变换放置在合适的位置

    - skew() 定义2D倾斜变换，所以是在平面上进行的扭曲变换

    - scale() 将元素根据中心原点进行缩放

```html
<div class="g-container">
  <div></div>
</div>
```

```scss
.g-container {
  position: relative;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, hsl(199, 98%, 50%), hsl(199, 98%, 38%));
  z-index: 0;
  overflow: hidden;

  & > div {
    position: relative;
    width: 30vmin;
    height: 30vmin;
    background: #fff;
    margin: 30vmin auto;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }

    &::before {
      transform-origin: 0 50%;
      transform: translate(100%, 0) skewY(45deg) scaleX(0.6);
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), transparent);
      animation: shadowMoveY 5s infinite linear alternate;
    }

    &::after {
      transform-origin: 0 0;
      transform: translate(0%, 100%) skewX(45deg) scaleY(0.6);
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.3), transparent);
      animation: shadowMoveX 5s infinite linear alternate;
    }
  }
}

@keyframes shadowMoveX {
  to {
    transform: translate(0%, 100%) skewX(50deg) scaleY(0.6);
  }
}

@keyframes shadowMoveY {
  to {
    transform: translate(100%, 0) skewY(40deg) scaleX(0.6);
  }
}
```
