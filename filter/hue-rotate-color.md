使用 hue-rotate 实现渐变背景动画。

这种方法应该是实现渐变背景动画的比较好的方法。

html:
```
<div></div>
```
scss:
```
div {
  width: 300px;
  height: 180px;
  margin: auto;
  background: linear-gradient(45deg, #ffc107, deeppink, #9c27b0);
  animation: hueRotate 10s infinite alternate;
}
@keyframes hueRotate {
  100% {
    filter: hue-rotate(360deg);
  }
}
```
