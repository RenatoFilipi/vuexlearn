<template>
  <div class="page">
    <the-header />
    <the-body :key="theBodyComponentKey" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheHeader from "~/components/TheHeader.vue";
import TheBody from "~/components/TheBody.vue";

export default {
  name: "index",
  components: { TheHeader, TheBody },

  computed: {
    ...mapState("request", ["update"])
  },

  data() {
    return {
      theBodyComponentKey: 0
    };
  },

  watch: {
    update: function(value) {
      this.theBodyComponentKey = value;
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
