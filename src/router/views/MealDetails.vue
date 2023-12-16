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
    <div>
        <h2 class="text-xl font-semibold mt-5 mb-2">Ingredients and Measures</h2>
        <table>
            <thead>
            <tr>
                <th>Index</th>
                <th>Ingredients</th>
                <th>Measures</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(_, index) of new Array(20)">
                <tr v-if="meal[`strIngredient${index + 1}`] || meal[`strMeasure${index + 1}`]">
                <td>{{ index + 1 }}</td>
                <td>{{ meal[`strIngredient${index + 1}`] }}</td>
                <td>{{ meal[`strMeasure${index + 1}`] }}</td>
                </tr>
            </template>
            </tbody>
        </table>
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