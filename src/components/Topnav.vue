<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"><img src="../assets/列表.png"/></span>
  </div>
</template>

<script lang="ts">
import {inject ,Ref} from  'vue'
export default {
name: "Topnav",
  setup(){
   const menuVisible= inject<Ref<boolean>>('xxx')
    console.log('获取的值为:'+menuVisible.value);
   const  toggleMenu =()=>{
     menuVisible.value = !menuVisible.value
   }
   return{toggleMenu}
  }
}
</script>

<style lang="scss" scoped>
.topnav {
  background: #ff6768;
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
    height: 24px;
    width: 24px;
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