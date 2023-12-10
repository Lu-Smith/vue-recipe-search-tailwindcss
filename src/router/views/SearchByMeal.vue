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
import axiosClient from '../../axioxClient.js'
import { storeKey } from 'vuex/types/index.js';

const keyword = ref('');
function SearchMeals() {
    storeKey.dispatch('searchMeals', keyword.value)
};

</script>
