```html
<div class="g-container">
  <div class="water">MAGICCSS</div>
</div>
```

```scss
.g-container {
  width: 100%;
  height: 100%;
  background: #000;
  filter: blur(3px) contrast(10);
  overflow: hidden;
}
.water {
  position: relative;
  width: 640px;
  height: 106px;
  color: #fff;
  line-height: 124px;
  font-size: 124px;
  text-align: center;
  margin: 100px auto;
  border-bottom: 10px solid #fff;
  transform: skewY(5deg);
  &::before,
  &::after {
    position: absolute;
    content: "";
    bottom: -20px;
    left: 0;
    width: 10px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    animation: move 7.5s ease-in-out infinite;
  }

  &::after {
    animation: move 7.5s ease-in-out 1s infinite;
  }
}
@keyframes move {
  80% {
    bottom: -30px;
    transform: translate(623px, 0);
  }
  93% {
    transform: translate(623px, 3px);
    opacity: 1;
  }
  100% {
    transform: translate(623px, 150px);
    opacity: 0;
  }
}
```
