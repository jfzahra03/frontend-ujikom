<template>
  <Navbar />
  <router-view></router-view>
  <Sidebard></Sidebard>
  <Footer></Footer>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Sidebard from './components/Sidebard.vue';
export default {
  components: {
    // Navbar,
    Footer,
    // Sidebard
},
};
</script>