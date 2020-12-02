<template>
<div>
  <Topnav></Topnav>
  <div class="banner">
    <h1>IN-UI</h1>
    <h2>一个轻量级的 UI 框架</h2>
    <p class="actions">
      <a href="https://juejin.cn/user/52379909103341/posts">GitHub</a>
      <router-link to="/Doc">开始</router-link>
    </p>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
name: "Home",
  components:{
  Topnav
  }
}
</script>

<style  lang="scss" scoped>
.banner {
  clip-path: ellipse(80% 60% at 50% 40% );
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: radial-gradient(circle, rgba(37,149,247,1) 0%, rgba(115,132,255,1) 100%);
  > .actions{
    padding: 8px 0;
    >a {
      margin:0 8px;
      background: #ffffff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
      color: #6c7efd;;
  }
}
}
h2,h1{
  color: #fff7f7;

  }
h1 {
  font-size: 100px;

}
</style>