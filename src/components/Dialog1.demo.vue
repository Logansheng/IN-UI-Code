<demo>
常规使用
</demo>
<template>
  <div>

    <Dialog v-model:visible="x">
      <template v-slot:title>
        标题❤
      </template>
      <template v-slot:content>
        <strong>点击</strong>
        <div>完成哦🐷</div>
      </template>
    </Dialog>
    <Button @click="toggle">点击弹出</Button>

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

<style lang="scss" scoped>


</style>