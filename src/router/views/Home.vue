<template>
    <div class="flex p-8 justify-center items-center flex-col gap-2">

      <!-- <pre>{{ ingredients }}</pre> -->
    </div>
</template>

<script lang="ts" setup>
    import { computed, onMounted, ref } from 'vue';
    import store from '../store';
    import axiosClient from '../../axiosClient.js';

    const meals = computed(() => store.state.meals);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const ingredients = ref([])

    onMounted(async () => {
      const response = await axiosClient.get('list.php?i=list')

      ingredients.value = response.data
  
      console.log (ingredients.value)
    })
</script>