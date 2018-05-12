<template>
<div class="container mt-8">
    <h4>Comments</h4>
    <ul class="list-unstyled">
        <li class="list-item mt-4 mb-4" v-for="comment in comments" :key="comment.id">
            <p>
                {{ comment.text}}
            </p>
            <time-stamps :created="comment.createdAt"></time-stamps>
        </li>
    </ul>
</div>
  
</template>

<script>
import TimeStamps from './TimeStamps'

export default {
  props: ["comments"],
  components: {
      TimeStamps
  }
};
</script>

