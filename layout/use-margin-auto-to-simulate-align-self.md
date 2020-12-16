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
$count: 5;
@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}

@function randomColor() {
  @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.g-flex {
  height: 200px;
  margin: 0;
  padding: 0;
  background: #037d65;
  list-style: none;
  display: flex;

  li {
    min-width: 100px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    margin: auto;
    margin-bottom: 0;
  }

  @for $i from 0 to $count {
    li:nth-child(#{$i + 1}) {
      background: randomColor();
      height: #{100 + 20 * $i}px;
      line-height: #{100 + 20 * $i}px;
    }
  }
}
```
