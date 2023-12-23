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
    <div v-if="!meals" class="text-center w-full text-linksColor">No results found</div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 w-3/4 mx-auto gap-5" >
      <div 
      v-for="meal of meals" 
      :key="meal.idMeal"
      class="flex flex-col justify-center 
      items-center gap-3 bg-addColor rounded p-4" >
        <div>
          {{ meal.strMeal }}
        </div>
        <div>
          <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
                <img 
                  :src="meal.strMealThumb" 
                  :alt="meal.strMeal"
                  class="rounded-xl h-48 object-cover w-full">
            </router-link>
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
    import { onMounted, computed, watch } from 'vue';
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

    watch(route, () => {
      store.dispatch('searchMealsByLetter', route.params.letter)
    })

    onMounted(() => {
      store.dispatch('searchMealsByLetter', route.params.letter)
    })
</script>