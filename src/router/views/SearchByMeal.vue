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
    <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
      <div v-for="meal of meals" :key="meal.idMeal" >
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
        <h3>{{ meal.strMeal }}</h3>
        <div>
          <a :href="meal.strYoutube" target="_blank">YouTube</a>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import store from '../store';

interface MealsProps {
      strYoutube: string;
      strMeal: string;
      strMealThumb: string;
      idMeal: string;
    }

const keyword = ref('');
const meals = computed<MealsProps[]>(() => store.state.searchedMeals)
function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
    
};

onMounted(() => {
  console.log(meals.value);
});

</script>
