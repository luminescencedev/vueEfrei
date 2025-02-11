<script lang="ts" setup>
  import { defineEmits } from 'vue';

  interface dataInterface {
    id: string | number
    type: string
    textContent: string
  }

  interface ButtonComponentProps {
    data: dataInterface
  }

  const props = defineProps<ButtonComponentProps>();
  const emit = defineEmits(['click']);

  function handleClick() {
    emit('click', props.data.id);
  }
</script>

<template>
  <button 
    class='px-4 py-2 bg-blue-500 text-white rounded'
    :type="data.type as 'reset' | 'submit' | 'button' || 'button'"
    :id="data.id.toString()"
    @click="handleClick"
  >
    {{ data.textContent }}
  </button>
</template>

<style>
</style>