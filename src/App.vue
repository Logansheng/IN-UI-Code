<template>
  <router-view></router-view>
</template>

<script>
import {ref,provide} from 'vue'
export default {
  name: 'App',
  components: {},
  setup(){
    const menuVisble = ref(false)
    provide('xxx',menuVisble)
  }
}
</script>
