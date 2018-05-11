<template>
  <div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.text }}</p>
      <add-comment></add-comment>
  </div>
</template>

<script>
import { posts } from "../services/Posts";
import AddComment from './AddComment.vue'

export default {
  components: {
      AddComment
  },
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
