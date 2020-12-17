使用 box-shadow 实现半透明遮罩，在某些特殊场景下能发挥很好的作用

```html
<div class="g-container">
  <p>背景文字背景文字背景文字背景文字</p>
  <div>Hover Me</div>
</div>
```

```scss
.g-container {
  & > div {
    position: absolute;
    width: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #666;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.1s;

    &:hover {
      box-shadow: 0 0 0 60vmax rgba(0, 0, 0, 0.5);
      transform: translate(-50%, -60%);
    }
  }
}
```
