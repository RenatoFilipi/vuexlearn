<template>
  <div class="content">
    <input
      id="myInput"
      type="text"
      placeholder="character's name"
      v-model="name"
    />
    <button id="myButton" @click="update({ name: name })">Search</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "StarWarsHeader",

  data() {
    let name = "";
    return {
      name
    };
  },
  methods: {
    ...mapActions("starwars", ["update"])
  }
};
</script>

<style lang="css" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

input[type="text"] {
  padding: 0.5rem;
}

button {
  padding: 0.5rem;
}
</style>
