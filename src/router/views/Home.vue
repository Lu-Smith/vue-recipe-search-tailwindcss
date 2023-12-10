<template>
  <div class="flex p-8 justify-center items-center flex-col gap-2">
    <div v-for="recipe in recipes" :key="recipe.idIngredient" class="w-full">
      <pre>{{ recipe.strIngredient }}</pre>
      <pre>{{ recipe.strDescription }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import axiosClient from '../../axiosClient.ts';

    interface Recipe {
      idIngredient: string;
      strIngredient: string;
      strDescription: string;
      strType: string | null;
    }

    const ingredients = ref<{ meals: Recipe[] }>({ meals: [] });ref([]);
    const recipes = ref<Recipe[]>([]);

    onMounted(async () => {
      const response = await axiosClient.get('list.php?i=list')
      ingredients.value = response.data
      recipes.value = ingredients.value.meals
      console.log(recipes.value)
    })
</script>