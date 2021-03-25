
```html
<div class="g-container">
  <div class="ball"></div>
  <div class="g-wall"></div>
  <div class="g-wall"></div>
  <div class="g-wall"></div>
  <div class="g-wall"></div>
</div>
```

```scss
.g-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
  padding: 0;
  filter: blur(5px) contrast(10);
}

.ball {
  position: absolute;
  left: 0;
  top: 40vh;
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
  background: #fff;
  animation: move 10s infinite;
}

@for $i from 2 through 5 {
  .g-wall:nth-child(#{$i}) {
    position: absolute;
    left: 20% * ($i - 1);
    top: 30vh;
    height: 40vh;
    width: 15vh;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
  }
}
@keyframes move {
  20% {
    transform: translate(20vw, 0);
    background: #ddd;
  }

  100% {
    transform: translate(100vw, 0);
    background: #ddd;
  }
}
```
