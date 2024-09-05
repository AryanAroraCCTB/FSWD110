<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import OptionsAPI from './components/OptionsAPI.vue'
import CompositionAPI from './components/CompositionAPI.vue'
import {ref} from "vue"

let isVisible_OptionsAPI = ref(false);
let isVisible_CompositionAPI = ref(false);

const toggleOptionsAPI = () => {
  isVisible_OptionsAPI.value = !isVisible_OptionsAPI.value;
}

const toggleCompositionAPI = () => {
  isVisible_CompositionAPI.value = !isVisible_CompositionAPI.value;
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <button @click="toggleOptionsAPI">Toggle OptionsAPI</button>
  <button @click="toggleCompositionAPI">Toggle CompositionAPI</button>

  <OptionsAPI v-if="isVisible_OptionsAPI"/>
  <CompositionAPI v-if="isVisible_CompositionAPI"/>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
