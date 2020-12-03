<template>
<div class="layout">
  <Topnav class="nav" toggleMenuButtonVisible></Topnav>
  <div class="topnav">
    <div class="logo"></div>
    <div class="logo"></div>
  </div>
  <div class="content">
    <aside v-if="menuVisible">
      <h2>DOC</h2>
      <ol>
        <li>
          <router-link to="Intro">介绍</router-link>
        </li>
        <li>
          <router-link to="Install">安装</router-link>
        </li>
        <li>
          <router-link to="GetStarted">开始使用</router-link>
        </li>
      </ol>
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
  background: #6c7efd;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 150px;
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
    flex-grow: 1;
    padding: 16px;
    background: #fff;
  }
}
aside {
  z-index: 1;
  background: #6c7efd;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 70px 0px 16px;
  height: 100%;


  > h2 {
    padding: 0 16px;
    margin-buttom: 4px;
    color: #fff;
  }

  > ol {
    margin-top: 10px;

    > li {
      margin-bottom: 10px;
      color: #fff;
      >a{
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      > .router-link-active {
        background: #fff;
        color: #232949;

      }
    }
  }

}
main {
  overflow: auto;
}

</style>