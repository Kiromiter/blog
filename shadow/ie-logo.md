#### 关键点

- 关键在于类似星环的外围一圈使用了内阴影实现

    - box-shadow:inset 
    
```html
<div class="g-container">
  <div class="IE"></div>
</div>
```

```scss
.g-container {
  background: white;
  height: 100%;
  width: 100%;
  
  .IE {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-image: radial-gradient(#fff 38%, transparent 38%),
      radial-gradient(#09c 0%, #09c 100%);

    &::before {
      content: "";
      position: absolute;
      top: 33px;
      left: -45px;
      width: 285px;
      height: 122px;
      margin: auto;
      border-radius: 50%;
      box-shadow: inset 0 12px 0 13px #09c, -35px -8px 0 -5px #fff;
      transform: rotate(-35deg);
    }

    &::after {
      content: "";
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      width: 120px;
      height: 25px;
      margin: auto;
      background: #09c;
      box-shadow: 50px 23px 0 -2px #fff;
    }
  }
}
```
