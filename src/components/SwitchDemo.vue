<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="SwitchDemo1" />
    <Demo :component="SwitchDemo2" />
    <hr>
  </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import {ref} from  'vue'
import SwitchDemo1 from './SwitchDemo1.vue';
import SwitchDemo2 from './SwitchDemo2.vue';

const Prism = (window as any).Prism

export default {
  components: {
    Demo
  },
  setup() {
    const bool = ref(false)
    return {
      SwitchDemo2,SwitchDemo1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>