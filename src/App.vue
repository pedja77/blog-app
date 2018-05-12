<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="container mt-4"></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AppPosts from './pages/AppPosts.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    AppPosts
  }
}
</script>


