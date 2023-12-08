<template>
  <div class="bg-bgColor h-100">
    <header class="bg-textColor shadow-md h-16 flex justify-between items-center">
      <router-link :to="{name: 'home'}">
        Home
      </router-link>
      <div>
        <router-link :to="{name: 'home'}">
          Search Meals
        </router-link>
        <router-link :to="{name: 'home'}">
          Search by Letter
        </router-link>
        <router-link :to="{name: 'home'}">
          Search by Ingredients
        </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Footer from './components/Footer.vue';
</script>

