<demo>
支持 disabled
</demo>
<template>
  <Switch v-model:value="bool"  disabled/>
</template>

<script>
import Switch from '../lib/Switch.vue'
import {ref} from'vue'

export default {
  name: "SwitchDemo2",
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>

<style scoped>

</style>