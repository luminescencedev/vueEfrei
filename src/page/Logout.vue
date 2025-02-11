<template>
  
</template>

<script lang="ts" setup>
import { useAuthStore } from '../store/auth';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  authStore.logout();
  router.push('/');
});
</script>

<style>
</style>