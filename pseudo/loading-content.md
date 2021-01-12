##### 关键点

- 借助动画操控伪元素的 content

```html
<p>加载中</p>
```

```scss
p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6vmin;
  line-height: 8vmin;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    animation: dot 3s infinite steps(3, start);
    line-height: 9vmin;
  }
}

@keyframes dot {
  33.33% {
    content: ".";
  }
  66.67% {
    content: "..";
  }
  100% {
    content: "...";
  }
}
```
