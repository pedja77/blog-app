<template>
  <div class="container mt-8">
    <form @submit.prevent="submitComment">
    <div class="form-group row">
      <label for="username" class="col-4 col-form-label">Username</label> 
      <div class="col-8">
        <input id="username" 
          name="username" 
          placeholder="Enter your username" 
          type="text" 
          class="form-control here"
          required>
      </div>
    </div>
    <div class="form-group row">
      <label for="text" class="col-4 col-form-label">Comment</label> 
      <div class="col-8">
        <textarea 
          id="text" 
          name="text" 
          cols="40" 
          rows="4" 
          class="form-control"
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
export default {
    data() {
        return {
            
        }
    },
    methods: {

    }

}
</script>

<style>

</style>
