<template>
  <div class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 shadow-lg rounded-lg flex justify-between items-center h-[8vh]">
    <h1 class="text-black text-3xl font-bold">Header</h1>
    <nav class="flex items-center">
      <ul class="flex space-x-4">
        <li><router-link class="text-black hover:text-gray-400 transition duration-300" to="/">Home</router-link></li>
        <li>
          <router-link
            class="text-black hover:text-gray-400 transition duration-300"
            :to="isLogin ? '/logout' : '/login'"
          >
            {{ isLogin ? 'Déconnexion' : 'Connexion' }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useAuthStore } from '../store/auth';
const authStore = useAuthStore();
const isLogin = computed(() => authStore.isLogin);
</script>

<style>
</style>