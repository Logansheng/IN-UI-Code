<template>
<div>
  <button @click="toggle" :class="{checked:x}"><span></span></button>
</div>
</template>

<script lang="ts">
import {ref} from 'vue'
export default {
name: "Switch",
  setup(){
    const x = ref(false),
      toggle =()=>{
      x.value =! x.value
    }
    return {x, toggle}
  }
}
</script>

<style lang="scss" scoped>
$h:22px;
$h2: $h - 4px;
button{
  height: $h;
  width: $h*2;
  border: none;
  background:#6b778d;
  border-radius: $h / 2;
  position: relative;
  outline: none ;
}
span{
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 250ms;//动画效果
}
button.checked{
  background: #ff6768;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);//左移
}
</style>