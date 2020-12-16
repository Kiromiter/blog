最常见的圣杯布局实现方法。

#### 需求

圣杯布局左中右三列布局，渲染顺序中间列书写在前保证提前渲染，左右两列定宽，中间列自适应剩余宽度。

#### 关键点

- 设置 `order` 定义项目的排列顺序。数值越小，排列越靠前，默认为0。

- `flex-basis` 设置项目的宽度

- `flex-grow` 设置或检索弹性盒子的扩展比率，填充空白


```pug
div.g-container
  div.g-middle middle
  div.g-left left
  div.g-right right
```

```scss
.g-container {
  height: 300px;
  padding: 0 200px;
  min-width: 200px;

  & > div {
    position: relative;
    height: 100%;
    line-height: 300px;
    font-size: 24px;
    float: left;
    text-align: center;
    color: #fff;
  }

  .g-middle {
    width: 100%;
    background: #cc6630;
  }

  .g-left {
    width: 200px;
    background: #ffcc00;
    margin-left: -100%;
    left: -200px;
  }

  .g-right {
    width: 200px;
    background: pink;
    margin-left: -100%;
    right: -100%;
  }
}
```
