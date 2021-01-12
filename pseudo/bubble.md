##### 关键点

- 使用 border 生成三角形形状。
- 使用 filter: drop-shadow 生成整体阴影。

```html
<div class="g-container">
  <div class="box">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
  </div>
  <div class="pop">
    <p>伪元素border实现气泡对话框三角形</p>
  </div>
  <div class="pop-with-border">
    <p>filter:drop-shadow实现整体阴影</p>
  </div>
</div>
```

```scss
$color: #e91e63;

.g-container {
  width: 100%;
  height: 100%;
  background: white;
  z-index: 0;

  .box {
    overflow: hidden;

    & > div {
      float: left;
      margin: 20px;
    }

    .box1 {
      width: 30px;
      height: 30px;
      border: 15px solid deeppink;
      left: 140px;
      bottom: 150px;
    }

    .box2 {
      width: 30px;
      height: 30px;
      border: 15px solid;
      border-color: #ffa500 #f00 #008000 #808080;
    }

    .box3 {
      width: 0;
      height: 0;
      border: 15px solid;
      border-color: #ffa500 #f00 #008000 #808080;
    }

    .box4 {
      width: 0;
      height: 0;
      border: 15px solid;
      border-color: transparent #f00 transparent transparent;
    }
  }

  .pop {
    position: relative;
    margin: 30px;
    padding: 10px;
    width: 200px;
    height: 100px;
    background: $color;
    border-radius: 8px;

    &::after {
      content: "";
      position: absolute;
      top: 48px;
      left: -24px;
      width: 0;
      height: 0;
      border: 12px solid;
      border-color: transparent $color transparent transparent;
    }

    p {
      color: #fff;
      padding: 10px 20px;
    }
  }

  .pop-with-border {
    position: relative;
    margin: 30px;
    padding: 10px;
    width: 200px;
    height: 100px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #ddd;
    filter: drop-shadow(0 0 5px #eee);

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: -16px;
      left: 16px;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-bottom-color: #fff;
      z-index: 101;
    }

    &::before {
      top: -17px;
      border-bottom-color: #ddd;
      z-index: 99;
    }

    p {
      padding: 10px 20px;
    }
  }
}
```
