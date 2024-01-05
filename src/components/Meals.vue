<template>
    <div 
        class="grid grid-cols-1 gap-5 md:gap-8 sm:grid-cols-2 md:grid-cols-3 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600 p-8">
        There are no meals
    </div>
</template>

<script setup lang="ts">
import MealItem from './MealItem.vue';

interface MealsProps {
  meals: {
    strYoutube: string;
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    strInstructions: string;
  }[];
}

const { meals } = defineProps<MealsProps>();

</script>