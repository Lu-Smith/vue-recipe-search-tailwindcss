<template>
    <div>
        <div class="flex gap-2">
        <router-link 
        :to="{name: 'byLetter', params: {letter}}" 
        v-for="letter of letters"
        :key="letter">
          <span class="hover:text-linksColor duration-300">{{ letter }}</span>
        </router-link>
      </div>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import axiosClient from '../../axiosClient.js';

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const ingredients = ref([])

    onMounted(async () => {
      const response = await axiosClient.get('list.php?i=list')

      ingredients.value = response.data

    })
</script>