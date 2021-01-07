##### 关键点

- 阴影实现的关键点在于使用伪元素绝对定位在容器的一角，元素本身透明，阴影扩散开形成内切圆角效果

- 阴影实现缺点，单个标签最多只能是2个内切圆角

- 径向渐变实现内切圆角可以是4边


```html
<div class="g-container">
  <div class="shadow">使用阴影的扩散半径实现内切圆角</div>
  <div class="shadow2">阴影实现缺点，单个标签最多是2边</div>
  <div class="linear">使用径向渐变实现内切圆角</div>
  <div class="linear2">径向渐变实现内切圆角可以是4边</div>
</div>
```

```scss
$color: #e91e63;

.g-container {
  font-size: 12px;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #fff, #bbb);

  div {
    position: relative;
    width: 20vw;
    height: 8vw;
    margin: 1vw auto;
    border-radius: 1vmin;
    overflow: hidden;
    line-height: 8vw;
    color: #fff;
    text-align: center;
    z-index: 0;
  }

  .shadow {
    &::before {
      position: absolute;
      content: "";
      top: -2vw;
      left: -2vw;
      width: 4vw;
      height: 4vw;
      border-radius: 50%;
      box-shadow: 0 0 0 25vw $color;
      z-index: -1;
      animation: shadowmove 10s infinite;
    }
  }

  .shadow2 {
    &::before {
      position: absolute;
      content: "";
      top: -2vw;
      left: -2vw;
      width: 4vw;
      height: 4vw;
      border-radius: 50%;
      box-shadow: 0 0 0 15vw $color;
      z-index: -1;
    }

    &::after {
      position: absolute;
      content: "";
      bottom: -2vw;
      right: -2vw;
      width: 4vw;
      height: 4vw;
      border-radius: 50%;
      box-shadow: 0 0 0 15vw $color;
      z-index: -1;
    }
  }

  .linear {
    background-size: 100% 100%;
    background-image: radial-gradient(
      circle at 0 0,
      transparent 0,
      transparent 2vw,
      #03a9f5 2vw
    );
    background-repeat: no-repeat;
  }

  .linear2 {
    filter: drop-shadow(0 0 3px #666);
    background-size: 50% 50%;
    background-image: radial-gradient(
        circle at 100% 100%,
        transparent 0,
        transparent 2vw,
        #03a9f5 2vw
      ),
      radial-gradient(
        circle at 0 0,
        transparent 0,
        transparent 2vw,
        #03a9f5 2vw
      ),
      radial-gradient(
        circle at 100% 0,
        transparent 0,
        transparent 2vw,
        #03a9f5 2vw
      ),
      radial-gradient(
        circle at 0 100%,
        transparent 0,
        transparent 2vw,
        #03a9f5 2vw
      );
    background-repeat: no-repeat;
    background-position: right bottom, left top, right top, left bottom;
  }
}

@keyframes shadowmove {
  0% {
    background: $color;
    box-shadow: 0 0 0 0 $color;
  }

  10% {
    background: transparent;
    box-shadow: 0 0 0 0 $color;
  }

  50% {
    background: transparent;
    box-shadow: 0 0 0 25vw $color;
  }
}
```
