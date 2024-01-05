<template>
    <div class="p-8">
      <input
        type="text"
        class="rounded border-2 border-grey-200 w-full text-bgColor"
        placeholder="Search for meals..."
        @change="searchMeals"
        v-model="keyword"
      />
    </div>
    <div 
        class="grid grid-cols-2 gap-5 md:grid-cols-3 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
  </template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../../components/MealItem.vue';

interface MealsProps {
      strYoutube: string;
      strMeal: string;
      strMealThumb: string;
      idMeal: string;
      strInstructions: string;
}

const route = useRoute();
const keyword = ref('');
const meals = computed<MealsProps[]>(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

watch(() => keyword.value, () => {
  searchMeals();
});


onMounted(() => {
  keyword.value = route.params.meal as string
  if (keyword.value ) {
    searchMeals();
  }
})

</script>
