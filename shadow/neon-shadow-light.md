#### 关键点

- 多重阴影的过渡效果与白色字体的叠加
    - 白色字体 filter:brightness(110%)
    - 多重阴影的过渡 box-shadow、animation

```html
<div class="g-container">
  <div><p class="pink">PINK</p></div>
  <div><p class="orange">Box-Shadow</p></div>
  <div><p class="yellow">YELLOW</p></div>
</div>
```

```scss
$pink: #e91e63;
$orange: #ff5722;
$yellow: #ffeb3b;

@function dark($color) {
  @return 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px $color,
    0 0 35px $color, 0 0 40px $color, 0 0 50px $color, 0 0 75px $color;
}

@function light($color) {
  @return 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px $color,
    0 0 70px $color, 0 0 80px $color, 0 0 100px $color, 0 0 150px $color;
}

.g-container {
  background: #000;
  text-align: center;

  p {
    display: inline;
    font-family: Ink Free;
    font-weight: bold;
    text-align: center;
    font-size: 10vmin;
    line-height: 20vmin;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  .pink {
    filter: brightness(110%);
    text-shadow: dark($pink);
    animation: pink 1.5s ease-in-out infinite alternate;
  }

  .orange {
    color: $orange;

    &:hover {
      animation: orange 1.5s ease-in-out infinite alternate;
    }
  }

  .yellow {
    color: $yellow;

    &:hover {
      animation: yellow 1.5s ease-in-out infinite alternate;
    }
  }
}

@keyframes pink {
  to {
    text-shadow: light($pink);
  }
}

@keyframes orange {
  to {
    text-shadow: dark($orange);
  }
  from {
    filter: brightness(110%);
    text-shadow: light($orange);
  }
}

@keyframes yellow {
  to {
    text-shadow: dark($yellow);
  }
  from {
    filter: brightness(110%);
    text-shadow: light($yellow);
  }
}
```

浏览器：

Chrome | Internet Explorer | Edge | Firefox | Safari | Opera
---|---|---|---|---|---
18.0 -webkit- | 不支持 | 79 | 35.0 | 6.0 -webkit- | 15.0 -webkit-

