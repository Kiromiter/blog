- float

- flex
  - flex-direction
  - flex-wrap

- grid
  - width:unset
  - height:unset

```pug
div.g-container
  h2 float 实现
  div.g-float
    - for(var i=0;i<3;i++)
      div.g-item #{i}
  
  h2 flex 实现
  div.g-flex
    - for(var i=0;i<3;i++)
      div.g-item #{i}
  
  h2 grid 实现
  div.g-grid
    - for(var i=0;i<3;i++)
      div.g-item #{i}
```

```vue
<div class="g-container">
  <h2>float 实现</h2>
  <div class="g-float">
    <div class="g-item" v-for="item in count" :key="'float' + item">
      {{ item }}
    </div>
  </div>
  <h2>flex 实现</h2>
  <div class="g-flex">
    <div class="g-item" v-for="item in count" :key="'flex' + item">
      {{ item }}
    </div>
  </div>
  <h2>grid 实现</h2>
  <div class="g-grid">
    <div class="g-item" v-for="item in count" :key="'grid' + item">
      {{ item }}
    </div>
  </div>
</div>
```

```scss
.g-container {
  margin: 20px auto;
  width: 400px;
  text-align: center;
}

h2 {
  margin: 30px auto;
  font-size: 28px;
}

.g-item {
  width: 190px;
  height: 190px;
  box-sizing: border-box;
  border: 1px solid #666;
  border-radius: 10px;
  line-height: 190px;
  font-size: 32px;
  cursor: pointer;
  margin: 5px;
  transition: 0.1s all;
  &:first-child {
    height: 390px;
    line-height: 390px;
  }
}

.g-float {
  width: 400px;
  height: 400px;
  overflow: hidden;
  .g-item {
    float: left;
  }
  &:hover {
    .g-item:first-child {
      width: 390px;
      height: 190px;
      line-height: 190px;
    }
  }
}

.g-flex {
  width: 400px;
  height: 400px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  &:hover {
    flex-direction: row;
    .g-item:first-child {
      width: 390px;
      height: 190px;
      line-height: 190px;
    }
  }
}

.g-grid {
  width: 400px;
  height: 400px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  grid-auto-flow: column;
  .g-item {
    width: unset;
    height: unset;
    &:first-child {
      grid-row: 1/3;
      grid-column: 1/2;
    }
  }
  &:hover {
    grid-auto-flow: row;
    .g-item:first-child {
      line-height: 190px;
      grid-row: 1/2;
      grid-column: 1/3;
    }
  }
}
```

unset 关键字我们可以理解为不设置，其实，它是关键字initial和inherit的组合。

当我们给一个css属性设置了unset的话：

1.如果该属性默认继承属性，该值等同于inherit

2.如果该属性是非继承属性，该值等同于initial

浏览器兼容：ie不支持，可以将 width height 设置为 `auto`