#### 关键点

- 借用了元素的两个伪元素

- 伪元素可以通过 attr 读取元素属性

- 通过生成**白色->透明色**的多重线性渐变叠加在黑色之上来实现条纹效果

```html
<div class="g-container">
  <div data-name="Solid Shadow Word">Solid Shadow Word</div>
</div>
```

```scss
.g-container {
  font-family: Times New Roman, serif;
  background: white;
  overflow: hidden;

  & > div {
    position: relative;
    font-size: 60px;
    margin: 30px auto;
    text-align: center;
    color: #333;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(
        -45deg,
        #fff 0%,
        #fff 25%,
        transparent 25%,
        transparent 50%,
        #fff 50%,
        #fff 75%,
        transparent 75%,
        transparent 100%
      );
      background-size: 4px 4px;
      z-index: 1;
    }

    &::after {
      position: absolute;
      content: attr(data-name);
      top: -2px;
      left: -2px;
      right: 6px;
      color: #333;
      z-index: 1;
    }
  }
}
```
