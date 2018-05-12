<template>
  <div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.text }}</p>
      <time-stamps :created="post.createdAt"></time-stamps>
      <add-comment @comment-added="refreshPost"></add-comment>
      <comments-list :comments="post.comments"></comments-list>
  </div>
</template>

<script>
import { posts } from '../services/Posts';
import AddComment from './AddComment.vue';
import CommentsList from './CommentsList.vue';
import TimeStamps from './TimeStamps'

export default {
  components: {
    AddComment,
    CommentsList,
    TimeStamps
  },
  data() {
    return {
      post: {}
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    getPost() {
      posts.get(this.$route.params.id).then(response => {
        this.post = response.data;
      });
    },
    refreshPost() {
      this.getPost();
    }
  }
};
</script>

<style>

</style>
