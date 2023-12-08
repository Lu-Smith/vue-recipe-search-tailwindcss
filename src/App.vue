<template>
  <div>
    <header class="bg-textColor shadow-md">

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

