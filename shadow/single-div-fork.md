##### 关键点

- 使用多重阴影的特性，完成叉子的头部部分。

```html
<div class="g-container">
  <div class="fork"></div>
</div>
```

```scss
.g-container {
  height: 100%;
  width: 100%;
  display: flex;
  background: #000;
  .fork {
    position: relative;
    width: 140px;
    height: 140px;
    margin: auto;
    border-radius: 50%;
    background: #fff;

    &::before {
      content: "";
      position: absolute;
      width: 40px;
      height: 200px;
      left: 50%;
      top: 100%;
      background: #fff;
      border-radius: 20px;
      transform: translate(-50%, -50%);
    }

    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 100px;
      border-radius: 10px;
      background: #fff;
      left: 0;
      top: -20px;
      box-shadow: 20px 0 0 0 #000, 40px 0 0 0 #fff, 60px 0 0 0 #000,
        80px 0 0 0 #fff, 100px 0 0 0 #000, 120px 0 0 0 #fff;
    }
  }
}
```
