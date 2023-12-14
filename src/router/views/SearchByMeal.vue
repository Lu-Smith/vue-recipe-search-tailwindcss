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
        <router-link to="/">
          <img 
            :src="meal.strMealThumb" 
            :alt="meal.strMeal"
            class="rounded-t-xl h-48 object-cover w-full">
        </router-link>
        <div class="flex items-center md:items-start justify-center flex-col">
            <h3 
                class="px-5 md:px-3 py-3 md:py-2 font-bold">
                {{ meal.strMeal }}
            </h3>
            <p 
                class="px-5 md:px-3 py-2 items-center md:items-start text-justify flex" >
                {{ truncateInstructions(meal.strInstructions) }}
            </p>
            <div 
                class="px-3 py-3 flex items-center md:items-end justify-center 
                gap-5 w-full m-auto flex-col md:flex-row">
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
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

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
    store.dispatch('searchMeals', keyword.value)
};

const truncateInstructions = (instructions:string) => {
  const words = instructions.split(' ');

  if (words.length > 25) {
    return words.slice(0, 25).join(' ') + '...';
  }

  return instructions;
};

onMounted(() => {
  keyword.value = route.params.name 

  console.log('kewword', keyword.value)
  console.log(meals.value);

  if (keyword.value ) {
    searchMeals();
  }
})



</script>
