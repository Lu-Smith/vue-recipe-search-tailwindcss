<template>
  <div class="p-8 pb-0 text-linksColor">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import Meals from "../../components/Meals.vue";
  import axiosClient from "../../axiosClient";

  interface MealsProps {
      strYoutube: string;
      strMeal: string;
      strMealThumb: string;
      idMeal: string;
      strInstructions: string;
}

  const meals = ref<MealsProps[]>([]);

  onMounted(async () => {
    for (let i = 0; i < 10; i++) {
      axiosClient
        .get(`random.php`)
        .then(({ data }) => meals.value.push(data.meals[0]));
    }
  });
</script>