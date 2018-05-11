<template>
  <div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.text }}</p>
  </div>
</template>

<script>
import { posts } from "../services/Posts";

export default {
  data() {
    return {
      post: {}
    };
  },
  created() {
    posts
      .get(this.$route.params.id)
      .then(response => (this.post = response.data));
  }
};
</script>

<style>

</style>
