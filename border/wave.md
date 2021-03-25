##### 关键点

- 利用 border-radius 生成椭圆

- 并不是利用旋转的椭圆本身生成波浪效果，而是利用它去切割背景，产生波浪的效果。

html:

```
<div class="g-container">
  <h2>Pure Css Wave</h2>
</div>
```

scss:

```
.g-container {
  position: relative;
  height: 100%;
  background-color: rgb(118, 218, 255);
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #fff;
    animation: rotate 10s infinite linear;
  }

  &::before {
    bottom: 15vh;
    border-radius: 45%;
  }
  &::after {
    bottom: 12vh;
    opacity: 0.5;
    border-radius: 47%;
  }
}

h2 {
  position: relative;
  color: #333;
  z-index: 10;
  text-align: center;
  height: calc(100vh - 120px);
  line-height: calc((100vh - 120px) * 1.4);
  font-size: 8vw;
  text-shadow: 3px 2px 2px #999;
}

@keyframes rotate {
  0% {
    transform: translate(-50%, 0) rotateZ(0deg);
  }
  50% {
    transform: translate(-50%, -2%) rotateZ(180deg);
  }
  100% {
    transform: translate(-50%, 0%) rotateZ(360deg);
  }
}
```
