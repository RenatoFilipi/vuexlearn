<template>
  <div>
    <div v-if="isLoading">loading...</div>
    <div v-else>{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "TheBody",

  data() {
    let text = "the result will be displayed here";
    return {
      text,
      isLoading: true
    };
  },

  methods: {
    async get() {
      const response = await fetch("https://www.boredapi.com/api/activity");
      const data = await response.json();
      this.text = await data.activity;
      this.isLoading = false;
    }
  },

  mounted() {
    this.get();
  }
};
</script>

<style lang="css"></style>
