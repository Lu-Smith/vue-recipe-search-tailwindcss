<template>
    <div class="p-8">
        <input
        type="text"
        class="rounded border-2 border-grey-200 w-full"
        placeholder="Search for meals..."
        @change="searchMeals"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import store from '../store'

const keyword = ref('');
function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
};

</script>
