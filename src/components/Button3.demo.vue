<demo>
支持 level
</demo>
<template>

    <div>
      <Button level="main">Import</Button>
      <Button>Click</Button>
      <Button level="danger">Danger</Button>
    </div>

</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>