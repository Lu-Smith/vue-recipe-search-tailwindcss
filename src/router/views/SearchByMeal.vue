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
      <div 
        v-for="meal of meals" 
        :key="meal.idMeal" 
        class="bg-addColor shadow rounded-xl tracking-wide">
        <img 
            :src="meal.strMealThumb" 
            :alt="meal.strMeal"
            class="rounded-t-xl h-48 object-cover w-full">
        <div class="flex items-start justify-center flex-col">
            <h3 class="px-3 py-2 font-bold">{{ meal.strMeal }}</h3>
            <p class="px-3 py-2">{{ truncateInstructions(meal.strInstructions) }}</p>
            <div class="px-3 py-3 flex items-end justify-center gap-3 w-full">
                <a 
                    :href="meal.strYoutube" 
                    target="_blank" 
                    class=" px-3 py-2 rounded border border-textColor
                    hover:bg-red-600 transition-colors">
                        YouTube
                </a>
                <router-view to="/">
                    <span class="px-3 py-2 rounded border border-textColor
                    hover:bg-bgColor transition-colors">
                        View
                    </span>
                </router-view>
            </div>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import store from '../store';

interface MealsProps {
      strYoutube: string;
      strMeal: string;
      strMealThumb: string;
      idMeal: string;
      strInstructions: string;
    }

const keyword = ref('');
const meals = computed<MealsProps[]>(() => store.state.searchedMeals)
function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
};

const truncateInstructions = (instructions:string) => {
  const words = instructions.split(' ');

  if (words.length > 40) {
    return words.slice(0, 40).join(' ') + '...';
  }

  return instructions;
};


  console.log(meals.value);


</script>
