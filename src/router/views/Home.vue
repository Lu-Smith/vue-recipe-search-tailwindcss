<template>
    <div class="flex p-8 justify-center items-center flex-col gap-2">
      <div class="flex gap-2">
        <router-link 
        :to="{name: 'byLetter', params: {letter}}" 
        v-for="letter of letters"
        :key="letter">
          <span class="hover:text-linksColor duration-300">{{ letter }}</span>
        </router-link>
      </div>
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