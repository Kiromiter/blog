CSS 实现单侧投影。

#### 关键点

- box-shadow 前四个参数：x 偏移值、y 偏移值 、模糊半径、扩张半径。

- 单侧投影的核心是第四个参数：扩张半径。这个参数会根据你指定的值去扩大或缩小投影尺寸，如果我们用一个负的扩张半径，而他的值刚好等于模糊半径，那么投影的尺寸就会与投影所属的元素尺寸完全一致，除非使用偏移量来移动他，否则我们将看不到任何投影。


```html
<div class="g-container">
  <div class="g-left">左</div>
  <div class="g-right">右</div>
  <div class="g-top">上</div>
  <div class="g-bottom">下</div>
</div>
```

```scss
.g-container {
  padding: 20px;
  line-height: 24px;
  display: flex;

  & > div {
    margin: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #000;
    text-align: center;
  }

  .g-left {
    box-shadow: -7px 0 5px -5px #333;
  }

  .g-right {
    box-shadow: 7px 0 5px -5px #333;
  }

  .g-top {
    box-shadow: 0 -7px 5px -5px #333;
  }

  .g-bottom {
    box-shadow: 0 7px 5px -5px #333;
  }
}
```
