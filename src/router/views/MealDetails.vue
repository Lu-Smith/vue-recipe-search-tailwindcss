<template>
    <div class="tracking-wide mx-auto">
        <h1 class="text-2xl font-bold m-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
        <div class="grid grid-cols-1 md:grid-cols-3">
            <div>
                <h2 class="font-semibold">Category: {{ meal.strCategory }}</h2 >
            </div>
            <div>
                <h2 class="font-semibold">Area: {{ meal.strArea }}</h2>
            </div>
            <div>
                <h2 class="font-semibold">Tags: #{{ meal.strTags }}</h2>
            </div>
        </div>
        <div class="mt-5">
            <h2 class="text-2xl font-semibold mb-2 text-center">Ingredients and Measures</h2>
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
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axiosClient from '../../axiosClient';
import { useRoute } from 'vue-router';

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
        debugger;
        meal.value = data.meals[0] || {};
    })
})
</script>