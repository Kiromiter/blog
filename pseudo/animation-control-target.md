
```html
<div id="stop"></div>
<div id="play"></div>

<div class="box">
    <a class="btn" href="#stop">stop</a>
    <a class="btn" href="#play">play</a>
</div>

<div class="animation"></div>
```

```scss
.box {
  display: flex;
  margin: auto;
  width: 180px;
  justify-content: space-between;
  .btn {
    display: block;
    width: 50px;
    margin: 10px auto;
    text-align: center;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;

    a {
      display: block;
      width: 100%;
      height: 100%;
    }

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

#stop:target ~ .animation {
  animation-play-state: paused;
}

#play:target ~ .animation {
  animation-play-state: running;
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
