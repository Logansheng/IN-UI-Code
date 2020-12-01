<template>
<div class="layout">
  <Topnav class="nav"></Topnav>
  <div class="topnav">
    <div class="logo"></div>
    <div class="logo"></div>
  </div>
  <div class="content">
    <aside v-if="menuVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import {inject, Ref} from 'vue';
export default {
  name: "Doc",
  components:{Topnav},
  setup(){
    const menuVisible= inject<Ref<boolean>>('xxx')
    return{menuVisible}
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    border: 1px solid red;
    flex-grow: 1;
    padding: 16px;
    background: #fff;
  }
}
aside {
  background: #6b778d;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 16px 16px;
  height: 100%;

  > h2 {
    margin-bottom: 4px;
    color: #fff7f7;

  }
  > ol{
    > li{
      background: #000;
      margin-top: 20px;
      padding: 4px 0;
      color: #fff7f7;
    }
  }

}
main {
  overflow: auto;
}

</style>