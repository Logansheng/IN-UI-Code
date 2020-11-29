<template>
<div>
  <Switch :value="y" @input="y =$event" ></Switch>
</div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from  'vue'
export default {
name: "SwitchDemo",
  components:{Switch},
  setup(){
    const y =ref(false)
    return{y}
  }
}
</script>

<style scoped>

</style>