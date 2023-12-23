<template>
    <div class="p-8">
      <input
        type="text"
        class="rounded border-2 border-grey-200 w-full text-bgColor"
        placeholder="Search for meals..."
        @change="searchMealsByIngredient"
        v-model="ingredient"
      />
    </div>
    <div 
        class="grid grid-cols-2 gap-5 md:grid-cols-3 p-8">
        <MealItem />
    </div>
  </template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../../components/MealItem.vue';

const route = useRoute();
const ingredient = ref('');

function searchMealsByIngredient() {
    store.dispatch('searchMealsByIngredient', ingredient.value)
};

watch(() => ingredient.value, () => {
  searchMealsByIngredient();
});


onMounted(() => {
  ingredient.value = route.params.meal as string

  if (ingredient.value ) {
    searchMealsByIngredient();
  }
})

</script>