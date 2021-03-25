html:

```
<div class="g-container">
  <div></div>
</div>
```

scss:

```
.g-container {
  background: #000;
  height: 100%;
  overflow: hidden;
  div {
    position: relative;
    width: 35vmin;
    height: 35vmin;
    background: linear-gradient(120deg, #34e0f0 0%, #b400ff 100%);
    opacity: 0.8;
    margin: 25vh auto;
    border-radius: 35%;
    animation: rotateMain 8s linear infinite;

    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, #35a0f0 0%, #b233f0 100%);
      opacity: 0.8;
      border-radius: 35%;
      box-shadow: 5px 5px 90px rgba(10, 102, 255, 0.5);
      animation: rotateMain 8s linear 2s infinite;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(60deg, #33580f 0%, #b7ee6d 100%);
      opacity: 0.8;
      box-shadow: 5px 5px 60px rgba(20, 102, 255, 0.3);
      border-radius: 35%;
      animation: rotateMain 8s linear 4s infinite;
      z-index: -1;
    }
  }
}
@keyframes rotateMain {
  50% {
    border-radius: 50%;
  }
  100% {
    transform: rotateZ(360deg);
    border-radius: 35%;
  }
}
```
