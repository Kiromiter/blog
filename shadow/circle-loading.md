核心点在于使用了 FFC/GFC 使 margin: auto 可以自动分配剩余空间。

```html
<ul class="g-flex">
  <li>liA</li>
  <li>liB</li>
  <li>liC</li>
  <li>liD</li>
  <li>liE</li>
</ul>
```

```scss
.g-flex {
  height: 100px;
  margin: 0;
  padding: 0;
  background: #037d65;
  list-style: none;
  display: flex;
  // justify-content: space-between;

  li {
    min-width: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    background: #333;
    margin: auto;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
```
