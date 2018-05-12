<template>
  <div class="container mt-8">
    <h4>Add comment</h4>
    <form @submit.prevent="submitComment">
    <div class="form-group row">
      <label for="text" class="col-4 col-form-label">Comment</label> 
      <div class="col-8">
        <textarea 
          id="text" 
          name="text" 
          cols="40" 
          rows="4" 
          class="form-control"
          v-model="comment.text"
          required>
        </textarea>
      </div>
    </div> 
    <div class="form-group row">
      <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
import { posts } from '../services/Posts'

export default {
    data() {
        return {
            comment: {
              text: ''
            }
        }
    },
    methods: {
      submitComment() {
        posts.addComment(this.comment, this.$route.params.id)
          .then(() => this.$emit('comment-added'))
      }
    }

}
</script>

<style>

</style>
