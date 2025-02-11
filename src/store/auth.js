import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLogin: false,
    welcomeMessage: '',
  }),
  actions: {
    login(message) {
      this.isLogin = true;
      this.welcomeMessage = message; 
    },
    logout() {
      this.isLogin = false;
      this.welcomeMessage = ''; 
    },
  },
});