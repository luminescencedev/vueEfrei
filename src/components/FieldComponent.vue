<script lang="ts" setup>
  import { defineEmits } from 'vue';

  interface dataInterface {
    id: string | number 
    type: string
    placeholder: string
  }

  interface FieldComponentProps {
    data : dataInterface
  }

  const props = defineProps<FieldComponentProps>();
  const emit = defineEmits(['update']);

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update', { id: props.data.id, value: target.value });
  }
</script>

<template>
  <article class='flex gap-[16px] items-center justify-center'>
    <label :for="String(data.id)">{{ data.placeholder }} :</label>
    <input 
      :type="data.type"
      :placeholder="data.placeholder"
      @input="handleInput"
    />
  </article>
</template>

<style>
</style>