#### 关键点

- 主要借助了两个伪元素实现了整体结构，借助了 drop-shadow 生成一层整体阴影

- drop-shadow 只能是单层阴影，所以另一层阴影需要多尝试

```html
<div class="g-container">
  <div></div>
</div>
```

```scss
.g-container {
  background: #000;
  overflow: hidden;
  width:500px;
  height:400px;

  & > div {
    position: relative;
    width: 37px;
    height: 218px;
    margin: 50px auto;
    z-index: 10;
    background: #fff;
    filter: drop-shadow(-10px -10px 0 #24f6f0);
    box-shadow: 11.6px 10px 0 0 #fe2d52;
    animation: move 5s infinite ease-in;

    &::before {
      content: "";
      position: absolute;
      top: 123px;
      left: -137px;
      width: 100px;
      height: 100px;
      border: 37px solid #fff;
      border-top: 37px solid transparent;
      border-radius: 50%;
      transform: rotate(45deg);
      filter: drop-shadow(16px 0px 0 #fe2d52);
    }

    &::after {
      content: "";
      position: absolute;
      top: -100px;
      right: -172px;
      width: 140px;
      height: 140px;
      border: 30px solid #fff;
      border-right-color: transparent;
      border-top-color: transparent;
      border-left-color: transparent;
      border-radius: 50%;
      transform: rotate(45deg);
      z-index: -10;
      filter: drop-shadow(14px 0 0 #fe2d52);
    }
  }
}

@keyframes move {
  4% {
    transform: skewX(7deg) translate(-30px);
  }
  7% {
    transform: skewX(-6deg) translate(18px);
  }
  9% {
    transform: skewX(5deg) translate(-8px);
  }
  10% {
    transform: skewX(-4deg) translate(6px);
  }
  11% {
    transform: skewX(3deg) translate(-4px);
  }
  12% {
    transform: skewX(-2deg) translate(2px);
  }
  13% {
    transform: skewX(1deg) translate(0px);
    filter: drop-shadow(-10px -10px 0 #24f6f0) blur(3px);
  }
  30% {
    filter: drop-shadow(-10px -10px 0 #24f6f0) blur(0px);
  }
}
```

