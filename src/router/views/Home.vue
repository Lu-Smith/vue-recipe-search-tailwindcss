<template>
    <div class="flex p-8 justify-center items-center flex-col gap-2">
      <input
        type="text"
        class="rounded border-2 border-grey-200 w-full"
        placeholder="Search for meals..."
      />
      <div class="flex gap-2">
        <router-link to="/" v-for="letter of letters">
          <span class="hover:text-linksColor duration-300">{{ letter }}</span>
        </router-link>
      </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';
    import store from '../store';

    const meals = computed(() => store.state.meals);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>