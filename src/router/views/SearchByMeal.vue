<template>
    <div class="p-8">
        <input
        type="text"
        class="rounded border-2 border-grey-200 w-full text-bgColor"
        placeholder="Search for meals..."
        @change="searchMeals"
        v-model="keyword"
        />
    </div>
    <div>
        <pre>{{ meals }}</pre>
        <pre>{{ keyword }}</pre>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import store from '../store'

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals)
function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
    console.log(keyword.value)
};

</script>
