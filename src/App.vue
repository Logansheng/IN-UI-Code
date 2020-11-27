<template>
  <router-view></router-view>
</template>

<script>
import {ref,provide} from 'vue'
export default {
  name: 'App',
  components: {},
  setup(){
    const width =document.documentElement.clientWidth
    console.log(width)
    const menuVisble = ref(width<=500?false:true)
    provide('xxx',menuVisble)
  }
}
</script>
