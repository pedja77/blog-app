<template>
<div class="container mt-8">
    <h4>Comments</h4>
    <ul class="list-unstyled">
        <li class="list-item mt-4 mb-4" v-for="comment in comments" :key="comment.id">
            <p>
                {{ comment.text}}
            </p>
             <p class="text-right mt-0">created at {{ comment.createdAt }}</p>
        </li>
    </ul>
</div>
  
</template>

<script>
export default {
    props: ['comments'],
    created() {
        console.log(this.comments)
    }
}
</script>

<style>

</style>
