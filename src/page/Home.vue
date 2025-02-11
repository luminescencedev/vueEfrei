<script setup>
import { computed } from 'vue';
import { useAuthStore } from '../store/auth';
import Header from '../components/Header.vue';

const authStore = useAuthStore();
const welcomeMessage = computed(() => authStore.welcomeMessage);
</script>

<template>
  <div>
    <Header />
    <h1 v-if="welcomeMessage">{{ welcomeMessage }}</h1>
     <h1 v-else >Home Page</h1>
  </div>
</template>

<style scoped>
</style>