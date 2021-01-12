##### 关键点

- 利用了伪元素生成了 4 个三角形组成了一个正方形，通过 hover 哪个透明的三角形来判断用户的操作方位。

```html
<div class="box">
  <div class="box__right">Right → Left</div>
  <div class="box__left">Left → Right</div>
  <div class="box__top">Top → Bottom</div>
  <div class="box__bottom">Bottom → Top</div>
  <div class="box__center">Hover from any side</div>
</div>
```

```scss
.box {
  margin: 5em auto;
  position: relative;
  width: 10em;
  height: 10em;
  line-height: 10em;
  overflow: hidden;
  z-index: 0;

  div {
    position: absolute;
    width: inherit;
    height: inherit;
    text-align: center;
    line-height: inherit;
    transition: transform 0.3s ease;

    &:not(.box__center)::before {
      position: absolute;
      content: "";
      width: 70.71%;
      height: 70.71%;
      transform: rotate(45deg);
    }

    &:hover {
      transform: translateX(0);
      z-index: 1;
    }
  }
  .box__right {
    background: blue;
    transform: translateX(100%);
  }

  .box__right:before {
    right: 100%;
    bottom: 0;
    transform-origin: 100% 100%;
  }

  .box__right:hover ~ .box__center {
    transform: translateX(-100%);
  }

  .box__left {
    background: green;
    transform: translateX(-100%);
  }

  .box__left:before {
    left: 100%;
    transform-origin: 0 0;
  }

  .box__left:hover ~ .box__center {
    transform: translateX(100%);
  }

  .box__top {
    background: red;
    transform: translateY(-100%);
  }

  .box__top:before {
    top: 100%;
    right: 0;
    transform-origin: 100% 0;
  }

  .box__top:hover ~ .box__center {
    transform: translateY(100%);
  }

  .box__bottom {
    background: yellow;
    transform: translateY(100%);
  }

  .box__bottom:before {
    bottom: 100%;
    left: 0;
    transform-origin: 0 100%;
  }

  .box__bottom:hover ~ .box__center {
    transform: translateY(-100%);
  }

  .box__center {
    background: orange;
    z-index: -1;
  }
}
```
