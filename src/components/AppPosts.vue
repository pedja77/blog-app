<template>
  <div>
    <ul class="list-unstyled">
      <li v-for="post in posts" :key="post.id" class="list-item">
        {{ post.title }} <small><em>with {{ post.comments.length }} comments</em></small>
        <router-link 
          class="btn  btn-link" 
          :to="{name: 'edit-post', params: {id: post.id}}">
            Edit
        </router-link>
        <button 
          @click="deletePost(post.id)"
          class="btn btn-link"
          style="color: red"
          :to="{name: 'delete-post', params: {id: post.id}}">
          Delete
        </button>
        <router-link 
          :to="{name: 'single-post', params: {id: post.id}}">
            <small>Read more ...</small>
        </router-link>
        <time-stamps :created="post.createdAt"></time-stamps>
      </li>
    </ul>
  </div>
</template>

<script>
import { posts } from "../services/Posts";
import TimeStamps from './TimeStamps'

export default {
  components: {
    TimeStamps
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    posts.getAll().then(response => {
        this.posts = response.data;
    });
  },
  methods: {
    deletePost(id) {
      posts.delete(id)
        .then(() => {
          this.posts = this.posts.filter(post => post.id !== id)
        })
    }
  }
};
</script>

