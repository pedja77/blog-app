<template>
  <div>
    <form @submit.prevent="submit">
      <div class="form-group row">
        <label for="title" class="col-4 col-form-label">Post title</label> 
        <div class="col-8">
          <input id="title" 
            name="title" 
            placeholder="Enter post title" 
            type="text" 
            class="form-control here"
            v-model="post.title"
            minlength="2"
            required>
        </div>
      </div>
  <div class="form-group row">
    <label for="text" class="col-4 col-form-label">Post body</label> 
    <div class="col-8">
      <textarea id="text" 
        name="text" 
        cols="40" 
        rows="4" 
        class="form-control"
        v-model="post.text"
        maxlength="300"
        required>
      </textarea>
    </div>
  </div> 
  <div class="form-group row">
    <div class="offset-4 col-8">
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      <button name="submit" type="reset" class="btn btn-primary">Reset</button>
    </div>
  </div>
</form>
  </div>
</template>

<script>
import { posts } from "../services/Posts";

export default {
  data() {
    return {
      post: {
        title: "",
        text: ""
      }
    };
  },
  methods: {
    submit() {
      posts.add(this.post).then(() => this.$router.push("/posts"));
    }
  }
};
</script>

<style>

</style>
