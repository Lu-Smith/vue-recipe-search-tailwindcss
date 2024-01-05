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

    <Meals :meals="meals" />
  </template>

<script setup lang="ts">
import { ref, onMounted, watch, computed} from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../../components/Meals.vue';

const route = useRoute();
const ingredients = ref('');
const meals = computed(() => store.state.searchedMealsByIngredient)


function searchMealsByIngredient() {
    store.dispatch('searchMealsByIngredient', ingredients.value)
};

watch(() => ingredients.value, () => {
  searchMealsByIngredient();
});


onMounted(() => {
  ingredients.value = route.params.ingredients as string

  if (ingredients.value ) {
    searchMealsByIngredient();
  }
})

</script>