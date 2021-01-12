
```html
<div class="g-container">
  <input id="stop" type="radio" name="playAnimation" />
  <input id="play" type="radio" name="playAnimation" />
  <div class="box">
    <label for="play">
      <div class="btn">play</div>
    </label>
    <label for="stop">
      <div class="btn">stop</div>
    </label>
  </div>
  <div class="animation"></div>
</div>
```

```scss
input {
  display: none;
}
#stop:checked ~ .animation {
  animation-play-state: paused;
}

#play:checked ~ .animation {
  animation-play-state: running;
}
.box {
  display: flex;
  margin: auto;
  width: 180px;
  justify-content: space-between;
  .btn {
    width: 50px;
    margin: 10px auto;
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #ddd;
      color: #333;
    }

    &:active {
      background: #aaa;
    }
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
