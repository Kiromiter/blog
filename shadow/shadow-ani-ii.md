#### 需求

多列等高，要求左右两列高度自适应且一样，分别设置不同背景色

#### 实现

- padding + margin + overflow 实现多列等高效果，兼容性好

- border 实现多列等高，左边框宽度为200px，左列浮动，伪元素清除浮动

- 父元素线性渐变背景色实现多列等高（同理各种颜色障眼法）

- display：flex 实现多列等高

- display：grid 实现多列等高

- display:table-cell 实现多列等高


```pug
<div class="g-container">
    <div class="g-xxx">
        <div class="g-left">
            content<br/>
        </div>
        <div class="g-right">
            content<br/>
            content<br/>
            content<br/>
            content<br/>
        </div>
    </div>
</div>
```

```scss
.g-container {
  width: 1000px;
  margin: 0 auto;
  line-height: 2;
  color: #fff;

  h2 {
    text-align: center;
    margin: 0;
    line-height: 60px;
    font-size: 20px;
    background: #00bcd4;
  }

  & > div {
    margin-bottom: 50px;
  }

  .g-padmar {
    position: relative;
    overflow: hidden;

    & > div {
      float: left;
      padding-bottom: 9999px;
      margin-bottom: -9999px;
    }
    .g-left {
      width: 200px;
      background: #4caf50;
    }

    .g-right {
      width: 800px;
      background: #99afe0;
    }
  }

  .g-border {
    position: relative;
    width: 800px;
    border-left: 200px solid #4caf50;
    background: #99afe0;

    &::after {
      content: "";
      display: block;
      clear: both;
    }

    .g-left {
      float: left;
      width: 200px;
      margin-left: -200px;
    }

    .g-right {
      width: 800px;
    }
  }

  .g-lineargradient {
    background: linear-gradient(
      90deg,
      #4caf50 0,
      #4caf50 20%,
      #99afe0 20%,
      #99afe0
    );
    overflow: hidden;

    .g-left {
      float: left;
      width: 200px;
    }

    .g-right {
      float: left;
      width: 800px;
    }
  }

  .g-flex {
    display: flex;
    align-items: stretch;

    .g-left {
      flex-basis: 200px;
      background: #4caf50;
    }

    .g-right {
      flex: 1;
      background: #99afe0;
    }
  }

  .g-grid {
    display: grid;
    grid-template-columns: 200px auto;

    .g-left {
      background: #4caf50;
    }

    .g-right {
      background: #99afe0;
    }
  }

  .g-table {
    overflow: hidden;
    display: table;

    .g-left {
      width: 200px;
      display: table-cell;
      background: #4caf50;
    }

    .g-right {
      width: 800px;
      display: table-cell;
      background: #99afe0;
    }
  }
}
```

