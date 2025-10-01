<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Estados reactivos
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Función para manejar el scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

// Función para toggle del menú móvil
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!--Nav-->
  <nav 
    id="header" 
    class="fixed w-full z-30 top-0 transition-all duration-300 ease-in-out"
    :class="isScrolled ? 'bg-white shadow-lg text-gray-800' : 'text-white'"
  >
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div class="pl-4 flex items-center">
        <RouterLink 
          to="/"
          class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl transition-colors duration-300"
          :class="isScrolled ? 'text-gray-800' : 'text-white'"
        >
          <!--Icon from: http://www.potlabicons.com/ -->
          <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
            <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
            <path
              class="plane-take-off"
              d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
            />
          </svg>
          Mi empresa
        </RouterLink>
      </div>
      
      <!-- Botón del menú móvil -->
      <div class="block lg:hidden pr-4">
        <button 
          @click="toggleMobileMenu"
          class="flex items-center p-1 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          :class="isScrolled ? 'text-gray-800' : 'text-white'"
        >
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      
      <!-- Menú de navegación -->
      <div 
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 p-4 lg:p-0 z-20 transition-all duration-300 ease-in-out"
        :class="[
          isMobileMenuOpen ? 'block' : 'hidden lg:flex',
          isScrolled ? 'bg-white lg:bg-transparent text-gray-800' : 'bg-white lg:bg-transparent text-black lg:text-white'
        ]"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3 mb-2 lg:mb-0">
            <RouterLink 
              to="/" 
              class="block lg:inline-block hover:text-gray-600 transition-colors duration-300"
              :class="isScrolled ? 'text-gray-800 lg:text-gray-800' : 'text-black lg:text-white'"
              @click="isMobileMenuOpen = false"
            >
              Inicio
            </RouterLink>
          </li>
          <li class="mr-3 mb-2 lg:mb-0">
            <RouterLink 
              to="/nosotros" 
              class="block lg:inline-block hover:text-gray-600 transition-colors duration-300"
              :class="isScrolled ? 'text-gray-800 lg:text-gray-800' : 'text-black lg:text-white'"
              @click="isMobileMenuOpen = false"
            >
              Sobre nosotros
            </RouterLink>
          </li>
          <li class="mr-3 mb-2 lg:mb-0">
            <RouterLink 
              to="/servicios" 
              class="block lg:inline-block hover:text-gray-600 transition-colors duration-300"
              :class="isScrolled ? 'text-gray-800 lg:text-gray-800' : 'text-black lg:text-white'"
              @click="isMobileMenuOpen = false"
            >
              Servicios
            </RouterLink>
          </li>
        </ul>
        <button
          id="navAction"
          class="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          :class="isScrolled ? 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white' : 'bg-white text-gray-800'"
        >
          <RouterLink 
            to="/auth" 
            class="block"
            @click="isMobileMenuOpen = false"
          >
            Ingresar
          </RouterLink>
        </button>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<style scoped>
.gradient {
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}
</style>
