<template>
     <div class="bg-bgColor h-100">
    <NavBar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import Footer from './Footer.vue';
  import NavBar from './NavBar.vue';
</script>

