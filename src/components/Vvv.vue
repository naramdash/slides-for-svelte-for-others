<script setup lang="ts">
import { ref } from 'vue';

const state = ref(0)
</script>

<template>
  <div>
    <button type="button" @click="state--"> - </button>
    Vue wow {{ state }}
    <button type="button" @click="state++"> + </button>
  </div>
</template>

<style scoped>

</style>