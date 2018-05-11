<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">ViBlog</a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link" :to="{name: 'posts'}">Posts</router-link>
        </div>
         <div class="navbar-nav">
          <router-link class="nav-item nav-link" :to="{name: 'add'}">Add</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
