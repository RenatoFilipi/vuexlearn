<template>
  <div>
    <button @click="update">new activity</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "TheHeader",
  methods: {
    ...mapActions("request", ["update"])
  }
};
</script>

<style lang="css">
button {
  padding: 0.5rem;
}
</style>
