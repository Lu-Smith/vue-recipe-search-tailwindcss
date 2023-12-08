<template>
  <div class="bg-bgColor h-100">
    <header class="bg-textColor text-bgColor 
    shadow-md h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}">
        Home
      </router-link>
      <div class="flex items-center">
        <router-link 
        :to="{name: 'home'}" 
        class="px-2 h-full hover:bg-linksColor hover:text-textColor
        duration-300 inline-flex items-center">
          Search Meals
        </router-link>
        <router-link 
        :to="{name: 'home'}"
        class="px-2 h-full hover:bg-linksColor hover:text-textColor
        duration-300 inline-flex items-center">
          Search by Letter
        </router-link>
        <router-link 
        :to="{name: 'home'}"
        class="px-2 h-full hover:bg-linksColor hover:text-textColor
        duration-300 inline-flex items-center">
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

