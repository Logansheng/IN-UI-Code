<demo>
支持 disabled
</demo>
<template>
  <Button disabled>Error</Button>
  <Button theme="link" disabled>Stop</Button>
  <Button theme="text" disabled>禁用按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>