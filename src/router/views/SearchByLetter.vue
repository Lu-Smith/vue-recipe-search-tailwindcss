<template>
    <div>
        <div class="flex gap-2 justify-center items-center mt-8">
        <router-link 
        :to="{name: 'byLetter', params: {letter}}" 
        v-for="letter of letters"
        :key="letter">
          <span class="hover:text-linksColor duration-300">{{ letter }}</span>
        </router-link>
      </div>
    </div>
    <pre>{{ meals }}</pre>
</template>

<script lang="ts" setup>
    import { onMounted, computed } from 'vue';
    import store from '../store';
    import { useRoute } from 'vue-router';

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const route = useRoute();
    const meals = computed(() => store.state.searchedMealsByLetter);

    onMounted(() => {
      store.dispatch('searchMealsByLetter', route.params.letter)
    })
</script>