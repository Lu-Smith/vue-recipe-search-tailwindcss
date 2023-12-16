<template>
    <div class="tracking-wide w-[800px] mx-auto">
        <h1 class="text-2xl font-bold m-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
        <div class="grid grid-cols-1 md:grid-cols-3">
            <div>
                <h2>Category: {{ meal.strCategory }}</h2>
            </div>
            <div>
                <h2>Area: {{ meal.strArea }}</h2>
            </div>
            <div>
                <h2>Tags: {{ meal.strTags }}</h2>
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
});

onMounted(() => {
    axiosClient.get(`lookup.php?i=${ route.params.id}`)
    .then(({data}) => {
        debugger;
        meal.value = data.meals[0] || {};
    })
})
</script>