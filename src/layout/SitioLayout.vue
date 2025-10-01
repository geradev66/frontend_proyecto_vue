<script lang="ts" setup>
import Navbar from '../components/sitio-layout/Navbar.vue';
import Footer from '../components/sitio-layout/Footer.vue';



</script>

<template>
  <div class="leading-normal tracking-normal text-white gradient" style="font-family: 'Source Sans Pro', sans-serif;">
    <!--navbar-->
   <Navbar />
     <RouterView />
    <!--Hero-->
    
    <!--Footer-->
    <Footer />
</div>

</template>
