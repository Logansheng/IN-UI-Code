<template>
  <p>Button组件</p>
  <h1>示例</h1>
  <div>
    <Button>点击</Button>
    <Button theme="button">点击</Button>
    <Button theme="link">点击</Button>
    <Button theme="text">点击</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {
    Button
  },

};
</script>

<style scoped>

</style>