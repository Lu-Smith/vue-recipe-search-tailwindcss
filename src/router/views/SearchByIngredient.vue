<template>
    <div class="p-8">
      <input
        type="text"
        class="rounded border-2 border-grey-200 w-full text-bgColor"
        placeholder="Search for meals..."
        @change="searchMealsByIngredient"
        v-model="ingredients"
      />
    </div>
    <div v-for="meal of meals" :key="meal.idMeal">
      <div class="bg-addColor shadow rounded tracking-wide flex
        justify-center flex-col md:w-1/3 sm:w-1/2 text-center m-8 md:mx-auto">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img 
            :src="meal.strMealThumb" 
            :alt="meal.strMeal"
            class="rounded-t h-48 object-cover w-full">
        </router-link>
        <div class="flex items-center md:items-start justify-between h-full flex-col ">
          <h3 
              class="px-5 md:px-3 py-3 md:py-2 font-bold flex-1">
              {{ meal.strMeal }}
          </h3>

        </div>
       
      </div>
    
    </div>
    
  </template>

<script setup lang="ts">
import { ref, onMounted, watch, computed} from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

interface MealsProps {
    strYoutube: string;
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

const route = useRoute();
const ingredients = ref('');
const meals = computed<MealsProps[]>(() => store.state.searchedMealsByIngredient);

function searchMealsByIngredient() {
  if (ingredients.value) {
    store.dispatch("searchMealsByIngredient", ingredients.value);
  } else {
    store.commit("setSearchedMealsByIngredient", []);
  }
};

watch(() => ingredients.value, () => {
  searchMealsByIngredient();
});


onMounted(() => {
  ingredients.value = route.params.ingredients as string
  console.log(ingredients.value)

  if (ingredients.value ) {
    searchMealsByIngredient();
  }
})

</script>