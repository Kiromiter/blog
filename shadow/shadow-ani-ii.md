```html
<div class="g-container">
  <div></div>
</div>
```

```scss
$n: 10;
$m: 5;
$length: 25px;
@function listShadowOne() {
  $list: ();
  @for $j from 1 to $m + 1 {
    @for $i from 1 to $n + 1 {
      $list: $list, $i * $length * 2 $j * 2 * $length * 2 #fff;
    }
  }

  @return $list;
}
@function listShadowTwo() {
  $list: ();

  @for $j from 1 to $m + 1 {
    @for $i from 1 to $n + 1 {
      $list: $list, $i * $length * 2 ($j * 2-1) * $length * 2 #00f1fc;
    }
  }

  @return $list;
}
@function listShadowThree() {
  $list: ();
  @for $j from 1 to $m + 1 {
    @for $i from 1 to $n + 1 {
      $list: $list, $i * $length * 2 ($j * 2-1) * $length * 2 #fff;
    }
  }

  @return $list;
}

@function listShadowFour() {
  $list: ();

  @for $j from 1 to $m + 1 {
    @for $i from 1 to $n + 1 {
      $list: $list, $i * $length * 2 $j * 2 * $length * 2 #fd0130;
    }
  }

  @return $list;
}
.g-container {
  background: #000;
  overflow: hidden;
  height: 100%;
  display: flex;

  & > div {
    position: relative;
    width: 20 * $length;
    height: 20 * $length;
    margin: auto;
    background: #000;
    animation: scale 5s infinite alternate;
    transform-origin: center center;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: -$length * 2;
      left: -$length * 2;
      width: $length;
      height: $length;
      z-index: 1;
    }
    &::before {
      box-shadow: listShadowOne();
      animation: radiusChange 5s infinite alternate;
    }
    &::after {
      box-shadow: listShadowThree();
      animation: radiusChangeAfter 5s infinite alternate;
    }
  }
}
@keyframes radiusChange {
  25% {
    box-shadow: listShadowOne();
    border-radius: 50%;
  }
  50% {
    box-shadow: listShadowTwo();
    border-radius: 0%;
  }
  100% {
    box-shadow: listShadowOne();
    border-radius: 50%;
  }
}

@keyframes radiusChangeAfter {
  25% {
    box-shadow: listShadowThree();
    border-radius: 50%;
  }
  50% {
    box-shadow: listShadowFour();
    border-radius: 0%;
  }
  100% {
    box-shadow: listShadowThree();
    border-radius: 50%;
  }
}

@keyframes scale {
  25% {
    transform: scale(2);
  }
  50% {
    transform: scale(2);
  }
}
```
