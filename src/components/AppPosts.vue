<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import { posts } from "../services/Posts";

export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    posts.getAll().then(response => {
      this.posts = response.data;
    });
  }
};
</script>

