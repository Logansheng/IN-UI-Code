<template>
  <div class="topnav">
    <router-link to="/"  class="logo" ><strong>IN-UI</strong></router-link>
    <ul class="menu">
      <li>首页</li>
    </ul>
    <span  v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu" ><img src="../assets/列表.png"/></span>
  </div>
</template>

<script lang="ts">
import {inject ,Ref} from  'vue'
export default {
name: "Topnav",
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup(){
   const menuVisible= inject<Ref<boolean>>('xxx')
   const  toggleMenu =()=>{
     menuVisible.value = !menuVisible.value
   }
   return{toggleMenu}
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  display: flex;
  justify-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    color: #fff7f7;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      color: #fff7f7;
    }
  }
   img{
    height: 32px;
    width: 32px;
    position: absolute;
    left: 16px;
    top: 25%;
    display: none;
  }
  @media (max-width: 500px) {
    > .menu{display:none; }
    > .logo{margin: 0 auto}
    img{display: inline-block}
  }
}
</style>