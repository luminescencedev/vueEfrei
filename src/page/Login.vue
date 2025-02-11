<template>
  <Header />
  <div class='h-[92vh] w-screen flex justify-center items-center flex-col gap-4'>
    <h1 class='text-xl'>Login form :</h1>
    <p>{{ user.message }}</p>
    <form @submit.prevent="handleSubmit" class='flex justify-center items-center gap-[16px] flex-col shadow-md rounded-xl px-[64px] py-[32px]'>
      <section v-for="field in fields" :key="field.id">
        <FieldComponent :data="field" @update="handleFieldUpdate" />
      </section>
      <section class='flex gap-4'>
        <Button v-for="button in buttons" :class="{'bg-blue-700': !isFormValid}" :disabled="!isFormValid" :key="button.id" :data="button" @click="handleButtonClick" />
      </section>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';
import Header from '../components/Header.vue';
import Button from '../components/ButtonComponent.vue';
import FieldComponent from '../components/FieldComponent.vue';

const authStore = useAuthStore();

const router = useRouter();

const user = reactive({
  username: '',
  password: '',
  message: ''
});

const fields = [
  { id: 'username', type: 'text', placeholder: 'Username' },
  { id: 'password', type: 'password', placeholder: 'Password' }
];

const buttons = [
  { id: 'login', type: 'submit', textContent: 'Login' },
  { id: 'reset', type: 'reset', textContent: 'Reset' }
];

const isFormValid = computed(() => {
  return user.username !== '' && user.password !== '';
});

function handleFieldUpdate({ id, value }) {
  user[id] = value;
}

function handleButtonClick(buttonId:String) {
  if (buttonId === 'reset') {
    user.username = '';
    user.password = '';
    user.message = '';
  }
}

function handleSubmit() {
  if (user.username === 'Arthur' && user.password === '1234') {
    const welcomeMessage = `Bienvenue, ${user.username}`;
    authStore.login(welcomeMessage);
    user.message = welcomeMessage;
    router.push('/');
  } else {
    user.message = 'Utilisateur ou mot de passe incorrect';
  }
}
</script>

<style>
</style>