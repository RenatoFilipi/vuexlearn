<template>
  <div>
    <div v-if="isLoading">{{ text }}</div>
    <div v-else>
      <div class="list">
        <div>{{ character.name }}</div>
        <div>{{ character.height }}</div>
        <div>{{ character.mass }}</div>
        <div>{{ character.hair_color }}</div>
        <div>{{ character.skin_color }}</div>
        <div>{{ character.eye_color }}</div>
        <div>{{ character.birth_year }}</div>
        <div>{{ character.gender }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StarWarsBody",

  data() {
    let text = "loading...";
    const character = {
      name: "",
      height: "",
      mass: "",
      hair_color: "",
      skin_color: "",
      eye_color: "",
      birth_year: "",
      gender: ""
    };

    return {
      text,
      isLoading: true,
      character
    };
  },

  computed: {
    ...mapGetters("starwars", ["charName"])
  },

  methods: {
    async getCharacter() {
      const response = await fetch(
        "https://swapi.dev/api/people/?search=" + this.charName
      );
      const data = await response.json();
      this.character.name = data.results[0].name;
      this.character.height = data.results[0].height;
      this.character.mass = data.results[0].mass;
      this.character.hair_color = data.results[0].hair_color;
      this.character.skin_color = data.results[0].skin_color;
      this.character.eye_color = data.results[0].eye_color;
      this.character.birth_year = data.results[0].birth_year;
      this.character.gender = data.results[0].gender;

      this.isLoading = false;
    }
  },

  mounted() {
    this.getCharacter();
  }
};
</script>

<style lang="css">
.list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
</style>
