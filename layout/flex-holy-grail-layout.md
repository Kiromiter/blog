<template>
  <div class="g-container">
    <div class="g-middle">middle</div>
    <div class="g-left">left</div>
    <div class="g-right">right</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.g-container {
  height: 300px;
  min-width: 600px;
  display: flex;

  & > div {
    line-height: 300px;
    font-size: 24px;
    text-align: center;
    color: #fff;
  }

  .g-middle {
    order: 2;
    flex-grow: 1;
    background: #cc6630;
  }

  .g-left {
    order: 1;
    flex-basis: 200px;
    background: #ffcc00;
  }

  .g-right {
    order: 3;
    flex-basis: 200px;
    background: pink;
  }
}
</style>