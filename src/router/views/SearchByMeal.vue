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

const keyword = ref('');
function SearchMeals() {
    axiosClient.get(`search.php?s=${keyword.value}`)
};

</script>
