<template>
<div>
  <p>Dialog组件</p>
  <Dialog :visible="x"></Dialog>
  <Button @click="toggle">toggle</Button>
</div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
import {ref} from 'vue';

export default {
  name: 'DialogDemo',
  components: {
    Button,
    Dialog
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
      console.log('hi');
    };
    return {x, toggle};
  }
};
</script>

<style scoped>

</style>