<template>
  <div>
      <p class="text-right mt-0">
        <em>
            Created at {{ created | formatDate(dateFormat) }}, 
            {{ created | diffForHumans }} ago.
        </em>
      </p>
  </div>
</template>

<script>
import { dateMixin } from "../mixins/DateMixin";

const DATE_FORMAT_STRING = "dddd, MMMM Do YYYY, hh:mm:ss";

export default {
  mixins: [dateMixin],
  props: ["created"],
  data() {
    return {
      dateFormat: DATE_FORMAT_STRING
    };
  }
};
</script>

<style>

</style>
