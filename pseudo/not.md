##### 用法

- CSS 否定伪类，:not(X)，是以一个简单的以选择器X为参数的功能性标记函数。它匹配不符合参数选择器X描述的元素。

##### 关键点
- 可以利用这个伪类写一个完全没有用处的选择器。例如， :not(*) 匹配任何非元素的元素，因此这个规则将永远不会被应用。

- 可以利用这个伪类提高规则的优先级。例如， #foo:not(#bar) 和 #foo 会匹配相同的元素。 但是前者的优先级更高。

- :not(foo) 将匹配任何非foo元素，包括html和body。

- 这个选择器只会应用在一个元素上，你无法用它排除所有父元素。比如， body :not(table) a 将依旧会应用在table内部的<a> 上, 因为 <tr>将会被 :not()这部分选择器匹配。

```html
<div class="g-container">
  <div class="g-header">Header</div>
  <div class="g-content">
    <p>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </p>
    <p>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </p>
    <p>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </p>
    <p>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </p>
    <p>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </p>
  </div>
  <div class="g-footer">Footer</div>
  <div class="g-wrap">利用:not()伪类使除了弹窗之外的所有元素都进行模糊</div>
</div>
```

```scss
.g-container {
  position: relative;
  text-align: center;
  color: #fff;
  overflow: hidden;
  height: 100%;

  & > :not(.g-wrap) {
    filter: blur(2px);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 2;
    }
  }

  .g-header,
  .g-content,
  .g-footer {
    padding: 20px;
    font-size: 20px;
    line-height: 40px;
    box-sizing: border-box;
  }

  .g-header,
  .g-footer {
    height: 15vh;
    background: brown;
  }

  .g-content {
    height: calc(100% - 30vh);
    background: #7cd;
  }

  .g-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45vw;
    height: 45vh;
    background: #000;
    line-height: 45vh;
    font-size: 25px;
  }
}
```

