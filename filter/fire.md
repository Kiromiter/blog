
```pug
.g-container
  .g-fire
    -for(var i=0;i<=40;i++)
      .g-dot
```

```vue
<div class="g-container">
  <div class="g-fire">
    <div class="g-dot" v-for="i in 40" :key="i"></div>
  </div>
</div>
```

```scss
$dotCount: 40;
$animationTime: 2;
$delayTime: 3;
$fireWidth: 115px;
$fireHeight: 200px;
$dotSize: 24px;
$fireColor: #b5932f;
@function randomNum($max, $min: 0) {
  @return ($min + random($max));
}

.g-container {
  position: relative;
  width: 384px;
  height: 300px;
  margin: 0 auto;
  background-color: #000;
  overflow: hidden;

  .g-fire {
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    bottom: 100px;
    border-radius: 45%;
    box-sizing: border-box;
    border: 200px solid #000;
    border-bottom: 200px solid transparent;
    transform: translate(-50%, 0) scaleX(0.4);
    background-color: $fireColor;
    filter: blur(20px) contrast(30);

    .g-dot {
      position: absolute;
      width: $dotSize;
      height: $dotSize;
      background: #000;
      border-radius: 50%;
    }
    @for $i from 1 to $dotCount + 1 {
      .g-dot:nth-child(#{$i}) {
        bottom: -#{randomNum(120, 240)}px;
        left: #{randomNum(300, -160)}px;
        animation: move
          #{randomNum($animationTime * 13, 7) /
          10}s
          infinite
          #{randomNum($delayTime * 20) /
          10}s
          linear;
      }
    }
  }
}

@keyframes move {
  100% {
    transform: translate3d(0, -350px, 0);
  }
}
```
