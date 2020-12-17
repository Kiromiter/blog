CSS 实现立体投影。

#### 关键点

- 立体投影的关键点在于利于伪元素生成一个大小与父元素相近的元素，然后对其进行 rotate 以及定位到合适位置，再赋于阴影操作。

- 颜色的运用也很重要，阴影的颜色通常比本身颜色要更深，这里使用 hsl 表示颜色更容易操作，l 控制颜色的明暗度。
 

```html
<div class="g-container">
  <div class="g-left"></div>
  <div class="g-both"></div>
  <div class="g-slide"></div>
</div>
```

```scss
.g-container {
  position: relative;
  margin: 0;
  padding: 0;
  z-index: 0;
  & > div {
    position: relative;
    width: 600px;
    height: 100px;
    margin: 5vmin auto 15vmin;
    border-radius: 20px;
  }

  .g-left {
    background: hsl(48, 100%, 50%);
    box-shadow: 0 0 5px 2px hsl(48, 100%, 45%);

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 5%;
      right: 5%;
      bottom: 0;
      border-radius: 10px;
      background: hsl(48, 100%, 20%);
      transform: translate(0, -15%) rotate(-4deg);
      transform-origin: center center;
      box-shadow: 0 0 20px 15px hsl(48, 100%, 20%);
      z-index: -1;
    }
  }

  .g-both {
    background: hsl(199, 98%, 48%);
    box-shadow: 0 0 5px 2px hsl(199, 98%, 40%);

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 5%;
      right: 5%;
      bottom: 15%;
      border-radius: 10px;
      background: hsl(199, 98%, 20%);
      transform: translate(0, -20%) rotate(-4deg);
      transform-origin: center center;
      box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
      z-index: -1;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 5%;
      right: 5%;
      bottom: 15%;
      border-radius: 10px;
      background: hsl(199, 98%, 20%);
      transform: translate(0, -20%) rotate(4deg);
      transform-origin: center center;
      box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
      z-index: -1;
    }
  }

  .g-slide {
    background: hsl(150, 62%, 48%);
    box-shadow: 0 0 5px 2px hsl(150, 62%, 40%);

    &::before {
      content: "";
      position: absolute;
      top: 15%;
      left: 90%;
      right: 5%;
      bottom: 20%;
      border-radius: 10px;
      background: hsl(150, 62%, 20%);
      transform: translate(105%, 10%) rotate(15deg);
      transform-origin: center center;
      box-shadow: 0 0 20px 15px hsl(150, 62%, 20%);
      z-index: -1;
    }

    &::after {
      content: "";
      position: absolute;
      top: 15%;
      left: 5%;
      right: 90%;
      bottom: 20%;
      border-radius: 10px;
      background: hsl(150, 62%, 20%);
      transform: translate(-105%, 10%) rotate(-15deg);
      transform-origin: center center;
      box-shadow: 0 0 20px 15px hsl(150, 62%, 20%);
      z-index: -1;
    }
  }
}
```
