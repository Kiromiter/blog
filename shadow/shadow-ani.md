最常见的圣杯布局实现方法。

#### 需求

圣杯布局左中右三列布局，渲染顺序中间列书写在前保证提前渲染，左右两列定宽，中间列自适应剩余宽度。

圣杯布局与双飞翼布局的不同之处，圣杯布局的的左中右三列容器没有多余子容器存在，通过控制父元素的 padding 空出左右两列的宽度。

#### 关键点

- 圣杯布局的关键点是通过 `margin-left` 与 `left` 属性将左右两列放置到准确的位置

- 圣杯布局的关键点父元素需要设置 `padding`

- 圣杯布局的关键点 `margin-left` 取值为`百分比`时，是以其`父元素的宽度`为基准的

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
