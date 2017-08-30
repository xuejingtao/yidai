<style lang="less" module>
  @import './mixin';
  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    text-align: center;
    border-radius: 5px;
    padding: 10px 0;
    .loader {
      border: 2px solid rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      border-top-color: transparent;
      animation: rotate 1s infinite;
      display: inline-block;
      vertical-align: middle;
      width: 15px;
      height: 15px;
      display: inline-block;
    }
    .text {
      color: #fff;
      display: block;
      padding-top: 8px;
      font-size: 14px
    }
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<template lang="jade">
div(:class="$style.loading" v-show="load.status")
  span(:class="$style.loader")
</template>

<script>
  export default {
    data() {
      return {
        load: config.load
      }
    }
  }
</script>