<template>
  <h1>导航</h1>
  <router-link to="/">组件1</router-link>
  <router-link to="/2">组件2</router-link>

  <hr>
  <router-view></router-view>

</template>

<script>
import Logan from './components/Logan.vue'


export default {
  name: 'App',
  components: {
    Logan
  }
}
</script>
