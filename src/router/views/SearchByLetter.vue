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
    <div v-for="meal of meals" :key="meal.idMeal">
      {{ meal.strMeal }}
    </div>
</template>

<script lang="ts" setup>
    import { onMounted, computed } from 'vue';
    import store from '../store';
    import { useRoute } from 'vue-router';

    interface MealsProps {
      strYoutube: string;
      strMeal: string;
      strMealThumb: string;
      idMeal: string;
      strInstructions: string;
}

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const route = useRoute();
    const meals = computed<MealsProps[]>(() => store.state.searchedMealsByLetter);

    onMounted(() => {
      store.dispatch('searchMealsByLetter', route.params.letter)
    })
</script>