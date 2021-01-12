##### 关键点
- 要使用 :target 伪元素，需要 HTML 锚点，以及锚点对应的 HTML 片段
- 核心是使用 :target 伪类接收点击事件
- 通过兄弟选择符 ~ 控制样式

```html
<div class="g-container">
  <div id="content1" class="active">列表1内容:123456</div>
  <div id="content2">列表2内容:abcdefgkijkl</div>
  <ul class="nav">
    <li class="active"><a href="#content1">列表1</a></li>
    <li><a href="#content2">列表2</a></li>
  </ul>
</div>
```

```scss
.g-container {
  position: relative;
  width: 400px;
  margin: 50px margin;

  .nav {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    overflow: hidden;

    li {
      width: 200px;
      float: left;
      text-align: center;
      background: #ddd;

      a {
        display: block;
        width: 200px;
        line-height: 36px;
        font-size: 18px;
        cursor: pointer;
        color: #000;
        text-decoration: none;
      }
    }
  }
  #content1,
  #content2 {
    position: absolute;
    overflow: hidden;
    width: 400px;
    height: 100px;
    top: 36px;
    border: 1px solid #999;
    padding: 10px;
    box-sizing: border-box;
    display: none;
    background: #fff;
    width: 100%;
  }

  #content1 {
    &:target {
      display: block;
      ~ .nav li {
        background: #ddd;
        color: #000;
        &:first-child {
          background: #ff7300;
          color: #fff;
        }
      }
    }
    &.active {
      display: block;
    }
  }
  #content2 {
    &:target {
      display: block;
      ~ .nav li {
        background: #ddd;
        color: #000;
        &:last-child {
          background: #ff7300;
          color: #fff;
        }
      }
    }
  }
  .active ~ .nav li:first-child {
    background: #ff7300;
    color: #fff;
  }
}
```



