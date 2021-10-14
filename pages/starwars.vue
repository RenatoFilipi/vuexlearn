<template>
  <div class="page">
    <star-wars-header />
    <star-wars-body :key="StarWarsBodyKey" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import StarWarsHeader from "~/components/StarSwarsHeader.vue";
import StarWarsBody from "~/components/StarWarsBody.vue";

export default {
  name: "starwars",
  components: {
    StarWarsHeader,
    StarWarsBody
  },

  data() {
    return {
      StarWarsBodyKey: ""
    };
  },

  computed: {
    ...mapState("starwars", ["name"])
  },

  watch: {
    name: function(value) {
      this.StarWarsBodyKey = value;
    }
  }
};
</script>

<style lang="css">
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100vw;
  height: 100vh;
}
</style>
