<template>
    <div 
        class="bg-addColor shadow rounded-xl tracking-wide flex
        justify-between flex-col w-full">
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
          <img 
            :src="meal.strMealThumb" 
            :alt="meal.strMeal"
            class="rounded-t-xl h-48 object-cover w-full">
        </router-link>
        <div class="flex items-center md:items-start justify-between h-full flex-col ">
            <h3 
                class="px-5 md:px-3 py-3 md:py-2 font-bold flex-1">
                {{ meal.strMeal }}
            </h3>
            <p 
                class="px-5 md:px-3 py-2 items-center md:items-start text-justify flex-2 " >
                {{ truncateInstructions(meal.strInstructions) }}
            </p>
            <div 
                class="px-3 py-3 w-full flex justify-center md:justify-between gap-5 md:gap-3
                items-center md:items-baseline flex-col md:flex-row mb-4">
                <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
                <router-link :to="{ name: 'mealDetails', params: {  id: meal.idMeal } }" class="w-full flex">
                    <span class="px-3 py-2 rounded border border-textColor
                    hover:bg-bgColor transition-colors w-full text-center">
                        View
                    </span>
                </router-link>
            </div>
        </div>
      </div>
</template>

<script lang="ts" setup>
import YouTubeButton from './YouTubeButton.vue';

const { meal } = defineProps ({
meal: {
    requires: true,
    type: Object,
}
})

const truncateInstructions = (instructions:string) => {
  const words = instructions.split(' ');

  if (words.length > 25) {
    return words.slice(0, 25).join(' ') + '...';
  }

  return instructions;
};

</script>