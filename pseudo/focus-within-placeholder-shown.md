:placeholder-shown: CSS 伪类 在 `<input>` 或 `<textarea>` 元素显示 placeholder text 时生效

```html
<div class="g-container">
  <input
    type="text"
    placeholder="输入你想查询的内容"
    class="g-input-search"
  />
  <button class="g-button-search" type="button">GO</button>
</div>
```

```scss
.g-container {
  position: relative;
  margin: 100px auto;
  width: 500px;
  height: 60px;
  overflow: hidden;
  transition: 0.3s;

  input,
  button {
    border: none;
    outline: none;
  }

  .g-input-search {
    height: 100%;
    width: 100%;
    font-size: 18px;
    border: 1px solid #ddd;
    box-sizing: border-box;

    &:not(:placeholder-shown) {
      border: 1px solid #03a9f4;
      padding: 0 120px 0 15px;

      + .g-button-search {
        opacity: 1;
      }
    }

    &:placeholder-shown {
      padding: 0 15px;
      + .g-button-search {
        opacity: 0;
      }
    }
  }

  .g-button-search {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 100px;
    height: calc(100% - 20px);
    font-size: 15px;
    background: #03a9f4;
    color: #feffd4;
    cursor: pointer;
    transition: 0.3s;
  }

  &:focus-within {
    transform: translateY(-4px);
    border-color: #bbb;
    box-shadow: 4px 4px 10px 2px #ddd;
  }
}
```
兼容性：

text文本占位符，均可（ie10+）

非text 如num time等，ie不支持
