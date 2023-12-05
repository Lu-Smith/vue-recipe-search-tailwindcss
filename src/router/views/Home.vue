<template>
    <div class="flex p-8 justify-center">
        <input 
        type="text"
        class="rounded bordr-2 border-grey-200 w-full"
        placeholder="Search for meals..." />
        <div 
        class="flex gap-1">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import store from '../store';

const meals = computed(() => store.state.meals)

console.log(meals.value)
</script>