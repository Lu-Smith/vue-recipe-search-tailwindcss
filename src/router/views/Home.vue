<template>
    Home
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const meals = computed(() => store.state.meals)
</script>