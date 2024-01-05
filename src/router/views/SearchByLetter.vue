<template>
    <div>
        <div class="flex gap-2 justify-center items-center mt-8 mb-8">
          <router-link 
          :to="{name: 'byLetter', params: {letter}}" 
          v-for="letter of letters"
          :key="letter">
            <span class="hover:text-linksColor duration-300">{{ letter }}</span>
          </router-link>
      </div>
    </div>
    <Meals :meals="meals" />
</template>

<script lang="ts" setup>
    import { onMounted, computed, watch } from 'vue';
    import store from '../store';
    import { useRoute } from 'vue-router';
    import Meals from '../../components/Meals.vue';

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

    watch(route, () => {
      store.dispatch('searchMealsByLetter', route.params.letter)
    })

    onMounted(() => {
      store.dispatch('searchMealsByLetter', route.params.letter)
    })
</script>