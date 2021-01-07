使用 `:not()` 伪类控制特殊边框样式。

```pug
ul 
  -for(var i=0;i<4;i++)
    li 右边框 
```

```scss
ul {
  margin: 50px auto;
  padding: 0;
  width: 400px;
  height: 48px;
  font-size: 24px;
  display: flex;
  text-align: center;
  list-style: none;

  li {
    width: 100px;
    line-height: 48px;

    &:not(:last-child) {
      border-right: 1px solid #666;
    }
  }
}
```
