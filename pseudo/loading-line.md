##### 关键点
- 核心点在于如何使用 CSS 实现弧形线条的长短变化。

- 核心在于遮罩。

```html
<div class="g-container">
  <div></div>
</div>
```

```scss
.g-container {
  height: 100%;
  overflow: hidden;
  background: #fff;
  div {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 100px auto;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
      border-radius: 50%;
      border: 3px solid #000;
      border-right-color: transparent;
      border-bottom-color: transparent;
      transform: rotate(720deg);
      animation: rotate 3s infinite ease-out;
    }

    &::after {
      position: absolute;
      content: "";
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 7px solid #fff;
      border-right-color: transparent;
      border-bottom-color: transparent;
      transform: rotate(720deg);
      animation: rotate 3s infinite ease-in-out;
    }
  }
}
@keyframes rotate {
  100% {
    transform: rotate(0deg);
  }
}
```
