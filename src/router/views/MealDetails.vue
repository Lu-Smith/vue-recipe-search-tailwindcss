<template>
    <div class="mx-auto flex flex-col justify-center items-center">
        <h1 class="text-2xl font-bold m-5">{{ meal.strMeal }}</h1>
        <div 
        class="mx-auto flex flex-col md:flex-row md:gap-8 justify-center 
        items-center md:bg-addColor rounded">
            <div class="w-80 bg-red-200 mb-2 md:mb-0">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded">
            </div>
            <div class="grid grid-cols-1 md:pr-8">
                <div>
                    <h2><span class="font-bold">Category:</span>{{ meal.strCategory }}</h2 >
                </div>
                <div>
                    <h2><span class="font-bold">Area:</span>{{ meal.strArea }}</h2>
                </div>
                <div>
                    <h2><span class="font-bold">Tags:</span>{{ meal.strTags }}</h2>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h2 class="text-xl font-semibold mb-2 text-center">Ingredients and Measures</h2>
            <div class="mx-auto">
                <table class="border border-addColor mx-auto">
                    <thead>
                        <tr class="bg-slate-800">
                        <th class="py-2 px-4 border-b border-addColor">Index</th>
                        <th class="py-2 px-4 border-b border-addColor">Ingredients</th>
                        <th class="py-2 px-4 border-b border-addColor text-left">Measures</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(_, index) of new Array(20)">
                        <tr 
                        v-if="meal[`strIngredient${index + 1}`] || meal[`strMeasure${index + 1}`]"
                        :class="{ 'bg-slate-800': index % 2 === 1 }">
                            <td class="py-2 px-4 border-b border-addColor text-center">{{ index + 1 }}</td>
                            <td class="py-2 px-4 border-b border-addColor text-center">{{ meal[`strIngredient${index + 1}`] }}</td>
                            <td class="py-2 px-4 border-b border-addColor text-left">{{ meal[`strMeasure${index + 1}`] }}</td>
                        </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="mt-8">
            <h2 class="text-xl font-semibold mb-2 text-center">Instructions</h2>
            <p class="p-8 md:w-1/2 flex justtify-center items-center mx-auto text-justify">{{ meal.strInstructions }}</p>
        </div>
        <div class=" px-8 mt-2 mb-8 flex justify-between gap-5 items-center md:w-1/2 mx-auto">
            <YouTubeButton :href="meal.strYoutube">Go to YouTube</YouTubeButton>
            <a 
            :href="getSingleSource(meal.strSource)" 
            target="_blank" 
            class=" px-3 py-2 rounded
            hover:bg-addColor transition-colors w-full text-center">
                View Original Source
        </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axiosClient from '../../axiosClient';
import { useRoute } from 'vue-router';
import YouTubeButton from '../../components/YouTubeButton.vue';

interface MealsProps {
      strYoutube: string;
      strMeal: string;
      strMealThumb: string;
      idMeal: string;
      strInstructions: string;
      strCategory: string;
      strArea: string;
      strTags: string;
      strIngredient: string[];
      strMeasure: string[];
      [key: string]: string | string[];
}

const getSingleSource = (source: string | string[] | undefined): string | undefined => {
  if (Array.isArray(source)) {
    // Use the first element if it's an array
    return source[0];
  }
  return source;
};

const route = useRoute();
const meal = ref<MealsProps>({
    strYoutube: '',
    strMeal: '',
    strMealThumb: '',
    idMeal: '',
    strInstructions: '',
    strCategory: '',
    strArea: '',
    strTags: '',
    strIngredient: [],
    strMeasure: [],
});

onMounted(() => {
    axiosClient.get(`lookup.php?i=${ route.params.id}`)
    .then(({data}) => {
        meal.value = data.meals[0] || {};
    })
})
</script>