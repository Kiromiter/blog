html:
```
<div class="bg">
  <div class="g-container">
    <div class="g-first"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
    <div class="g-ball"></div>
  </div>
</div>
```
scss:
```
$count: 7;
.bg {
  width: 100%;
  height: 100%;
  background: #000;
  padding: 0;
  filter: blur(4px) contrast(8);
  display: flex;
}
.g-container {
  margin: auto;
  position: relative;
  width: 10vmin;
  height: 10vmin;
}
.g-ball,
.g-first {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-radius: 50%;
  transform: translate(-700%, 0);
  opacity: 0;
}
@for $i from 0 through $count + 1 {
  .g-ball:nth-child(#{$i}) {
    animation: move 3.5s infinite #{$i * 0.2 - 0.1}s linear;
  }
}
.g-first {
  animation: scaleMove 3.5s infinite linear;
}

@keyframes move {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }
  60% {
    opacity: 1;
    transform: translate(1vw, 0);
  }
  85%,
  100% {
    opacity: 0;
    transform: translate(700%, 0);
  }
}
@keyframes scaleMove {
  25% {
    opacity: 1;
    transform: translate(-1vw, 0);
  }
  35% {
    opacity: 1;
    transform: scale(1);
  }
  70% {
    opacity: 1;
    transform: translate(1vw, 0) scale(2);
  }
  90%,
  100% {
    opacity: 0;
    transform: translate(1vw, 0) scale(1);
  }
}
```
