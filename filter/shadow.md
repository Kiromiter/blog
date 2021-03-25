##### 关键点
- 原理就是，利用伪元素，生成一个与原图一样大小的新图叠加在原图之下，然后利用滤镜模糊 filter: blur() 配合其他的亮度/对比度，透明度等滤镜，制作出一个虚幻的影子，伪装成原图的阴影效果。

- filter: blur(10px) brightness(80%) opacity(.8)。

```html
<div class="g-container">
  <div class="avatar"></div>
  <p>blur shadow</p>
</div>
```

```scss
$img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505822443&di=941986df9c6514d5d43eaba4aa938347&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqtouxiang8.net%2Fuploads%2Fallimg%2Fc150313%2F142623130563050-922006.jpg";

.g-container {
  width: 200px;
  margin: 20px auto;
  position: relative;
  z-index: 0;

  .avatar {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: url($img) no-repeat center center;
    background-size: 100% 100%;

    &::after {
      content: "";
      position: absolute;
      // top: 10%;
      left: 0;
      width: 100%;
      height: 100%;
      background: inherit;
      background-size: 100% 100%;
      border-radius: 50%;
      transform: scale(0.95);
      // filter: blur(10px) brightness(80%) opacity(0.8);
      z-index: -1;
      animation: filterChange 10s infinite linear;
    }
  }
  p {
    margin-top: 30px;
    text-align: center;
    font-size: 28px;
  }
}
@keyframes filterChange {
  0% {
    top: 0;
    filter: blur(0) brightness(101%) opacity(1);
  }
  40% {
    top: 10%;
    filter: blur(0) brightness(101%) opacity(1);
  }
  80% {
    top: 10%;
    filter: blur(10px) brightness(80%) opacity(0.8);
  }
  100% {
    top: 10%;
    filter: blur(10px) brightness(80%) opacity(0.8);
  }
```
