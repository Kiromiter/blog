##### 关键点
- 使用 hover 伪类，在鼠标悬停在按钮上面时，控制动画样式的暂停
- 使用了 ~ 选择符对样式进行控制

```html
<div class="g-container">
  <div class="btn stop">stop</div>
  <div class="animation"></div>
</div>
```

```scss
.btn {
  width: 50px;
  margin: 10px auto;
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #ddd;
    color: #333;

    ~ .animation {
      animation-play-state: paused;
    }
  }
  &:active {
    background: #aaa;
  }
}
.animation {
  width: 100px;
  height: 100px;
  margin: 50px auto;
  background: deeppink;
  animation: move 2s linear infinite alternate;
}

@keyframes move {
  0% {
    transform: translate(-100px, 0);
  }
  100% {
    transform: translate(100px, 0);
  }
}
```
