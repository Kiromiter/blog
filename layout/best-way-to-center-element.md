#### 核心点

核心点在于使用了 FFC/GFC 使 margin: auto 在垂直方向上居中元素。

原因如下，在 dispaly: flex 下：

Prior to alignment via justify-content and align-self, any positive free space is distributed to auto margins in that dimension.

简单翻译一下，大意是在 flex 格式化上下文中，设置了 margin: auto 的元素，在通过 justify-content 和 align-self 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 margin 中去

这里，很重要的一点是，margin auto 的生效不仅是水平方向，垂直方向也会自动去分配这个剩余空间。

```html
<div class="g-container">
  <div class="g-box"></div>
</div>
```

```scss
.g-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  // display: grid;
  // display: inline-flex;
  // display: inline-grid;

  .g-box {
    width: 40vmin;
    height: 40vmin;
    background: #000;
    margin: auto;
  }
}
```


vmin

相对于视口的宽度或高度中较小的那个。其中最小的那个被均分为100单位的vmin

兼容性：

IE | Firefox | Chrome | Safari | Opera | iOS Safari | Android Browser | Android Chrome	
---|---|---|---|---|---|---|---
9.0+ | 19.0+ | 26.0+ | 6.0+ | 15.0+ | 6.0+ | 4.4+ | 26.0+

#### FFC 

FFC 全称“Flex Formatting Contexts”翻译过来就是“弹性格式化上下文”。

display属性值设置为“flex”或“inline-flex”的容器。

FFC布局中，float、clear、vertical-align属性不会生效。

#### GFC

GFC全称“GridLayout Formatting Contexts”翻译过来就是“块级格式化上下文”。

display属性值设置为为“grid”或者“inline-grid”的容器。

所有的FFC与GFC也是一个BFC，在遵循自己的规范的情况下，向下兼容BFC规范。