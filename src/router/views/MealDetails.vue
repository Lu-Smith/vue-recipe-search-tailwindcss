<template>
    <div>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
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
}

const route = useRoute();
const meal = ref<MealsProps>({
    strYoutube: '',
    strMeal: '',
    strMealThumb: '',
    idMeal: '',
    strInstructions: '',
});

onMounted(() => {
    axiosClient.get(`lookup.php?i=${ route.params.id}`)
    .then(({data}) => {
        debugger;
        meal.value = data.meals[0] || {};
    })
})
</script>