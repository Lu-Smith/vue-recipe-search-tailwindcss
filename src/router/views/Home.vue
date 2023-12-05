<template>
    Home
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import store from '../store';

const meals = computed(() => store.state.meals)

console.log(meals.value)
</script>