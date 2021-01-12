
```html
<div class="g-container">
  <div class="nav-box">
    <button class="nav-A">Tab-A</button>
    <button class="nav-B">Tab-B</button>
    <div class="content-box">
      <div class="content-A">content-A</div>
      <div class="content-B">content-B</div>
    </div>
  </div>
</div>
```

```scss
.g-container {
  width: 300px;
  margin: 50px auto;
  border: 1px solid #ddd;

  .nav-box {
    font-size: 0;

    button {
      width: 150px;
      height: 64px;
      box-sizing: border-box;
      outline: none;
      background: #fff;
      border: 1px solid #ddd;
      font-size: 18px;
      cursor: pointer;

      &:focus-within {
        color: #fff;
        background: #ffcc00;
      }
    }

    .content-box {
      font-size: 24px;
      border: 1px solid #ddd;
      height: 100px;

      div {
        display: none;
      }
    }
    &:not(:focus-within) {
      .nav-A {
        color: #fff;
        background: #ffcc00;
      }
      .content-A {
        display: block;
      }
    }

    .nav-B:focus-within ~ .content-box .content-B {
      display: block;
    }

    .nav-B:not(:focus-within) + .nav-A {
      color: #fff;
      background: #ffcc00;
    }
  }
}
```
