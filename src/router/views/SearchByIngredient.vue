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
     {{ meal.strMeal }}
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
    strInstructions: string;
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