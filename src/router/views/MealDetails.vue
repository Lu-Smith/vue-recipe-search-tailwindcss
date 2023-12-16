<template>
    <div class="tracking-wide w-[800px] mx-auto">
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
        <div class="grid grid-cols-1 md:grid-cols-3">
            <div>
                <h2 class="text-xl font-semibold m-5">Ingredients</h2>
                <ul>
                    <template v-for="(_, index) of new Array(20)">
                        <li v-if="meal[`strIngredient${index + 1}`]">
                        {{ meal[`strIngredient${index + 1}`] }}</li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-xl font-semibold m-5">Measures</h2>
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
});

onMounted(() => {
    axiosClient.get(`lookup.php?i=${ route.params.id}`)
    .then(({data}) => {
        debugger;
        meal.value = data.meals[0] || {};
    })
})
</script>