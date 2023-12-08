<template>
  <div class="bg-addColor h-100">
    <header class="bg-textColor shadow-md h-24">
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

