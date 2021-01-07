#### 需求

共4列，首列宽度固定为200px，其余3列均分剩余宽度，每列间距10px

#### 实现

- `display: grid` 实现
  - 使用 `fr` 均分，`column-gap` 列间距
- `display: flex` 实现
  - `flex-basis` 设置宽度
- `display: flex + 非calc` 实现
  - `flex-grow` 设置 grow 比例
- `position: aboslute + float` 实现
  - `calc` 属性自动计算宽度
- `position: aboslute + float + 非calc` 实现
  - `负间距` 和 `百度比` 自动均分
 

```pug
div.g-container
  h2 display: grid 实现
  div.g-grid
    - for(var i=0;i<4;i++)
      div.g-item #{i}

  h2 display: flex 实现
  div.g-flex
    - for(var i=0;i<4;i++)
      div.g-item #{i}
    
  h2 display: flex + 非calc 实现
  div.g-flex
    - for(var i=0;i<4;i++)
      div.g-item #{i}

  h2 position: absolute + float 实现
  div.g-position
    - for(var i=0;i<4;i++)
      div.g-item #{i}
 
  h2 position: aboslute + float + 非calc 实现
  div.g-justify
    div.g-left 0
    div.g-right
      - for(var i=1;i<4;i++)
        div.g-item-box
          div.g-item #{i}
```

```vue
<div class="g-container">
  <h2>display: grid 实现</h2>
  <div class="g-grid">
    <div class="g-item" v-for="item in 4" :key="'grid' + item">
      {{ item - 1 }}
    </div>
  </div>
  <h2>display: flex 实现</h2>
  <div class="g-flex">
    <div class="g-item" v-for="item in 4" :key="'flex' + item">
      {{ item - 1 }}
    </div>
  </div>
  <h2>display: flex 实现 + 非calc实现</h2>
  <div class="g-flex-grow">
    <div class="g-item" v-for="item in 4" :key="'flex' + item">
      {{ item - 1 }}
    </div>
  </div>
  <h2>position: aboslute + float 实现</h2>
  <div class="g-position">
    <div class="g-item" v-for="item in 4" :key="'position' + item">
      {{ item - 1 }}
    </div>
  </div>
  <h2>position: aboslute + float + 非calc实现</h2>
  <div class="g-justify">
    <div class="g-left">0</div>
    <div class="g-right">
      <div class="g-item-box" v-for="item in 3" :key="'justify' + item">
        <div class="g-item">{{ item }}</div>
      </div>
    </div>
  </div>
</div>
```

```scss
.g-container {
  text-align: center;
  color: #fff;
  h2 {
    font-size: 28px;
    line-height: 2;
    background: #009688;
    margin: 0;
  }

  .g-left,
  .g-item {
    font-size: 24px;
    text-align: center;
    line-height: 200px;
    background: #3f51b5;
  }

  .g-grid {
    height: 200px;
    background: #ff9800;
    display: grid;
    grid-template-columns: 200px repeat(3, 1fr);
    column-gap: 10px;
  }

  .g-flex {
    height: 200px;
    background: #ff9800;
    display: flex;
    justify-content: space-between;
    .g-item {
      flex-basis: calc((100% - 200px - 30px) / 3);
      &:first-child {
        flex-basis: 200px;
      }
    }
  }

  .g-flex-grow {
    height: 200px;
    background: #ff9800;
    display: flex;
    justify-content: space-between;
    .g-item {
      flex-grow: 1;
      margin-left: 10px;
      &:first-child {
        margin-left: 0;
        flex-grow: 0;
        flex-basis: 200px;
      }
    }
  }

  .g-position {
    position: relative;
    height: 200px;
    background: #ff9800;
    .g-item {
      float: left;
      width: calc((100% - 200px - 30px) / 3);
      margin-left: 10px;
      &:first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        float: unset;
        margin-left: unset;
      }
      &:nth-child(2) {
        margin-left: 210px;
      }
    }
  }

  .g-justify {
    position: relative;
    height: 200px;
    background: #ff9800;
    margin-bottom: 20px;

    .g-item-box {
      box-sizing: border-box;
    }

    .g-left {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 200px;
    }

    .g-right {
      position: absolute;
      top: 0;
      left: 210px;
      right: 0;
      height: 200px;
      overflow: hidden;
      margin-left: -5px;
      margin-right: -5px;

      .g-item-box {
        position: relative;
        float: left;
        width: 33.33%;
        padding-left: 5px;
        padding-right: 5px;
      }
    }
  }
}
```
