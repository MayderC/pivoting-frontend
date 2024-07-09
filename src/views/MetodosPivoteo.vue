<template>
  <main class="flex flex-col justify-center p-24">
    <div class="top">
      <div class="title text-center">
        <h1
          class="bg-gradient-to-r text-2xl font-bold from-pink-500 to-purple-500 inline-block text-transparent bg-clip-text"
        >
          Método de pivoteo {{ metodo }}.
        </h1>
      </div>
      <div class="menu flex gap-5 text-center justify-center mt-3 text-white">
        <RouterLink active-class="text-purple-400" to="parcial">Parcial</RouterLink>
        <RouterLink active-class="text-purple-400" to="escalonado">Escalonado</RouterLink>
      </div>
    </div>

    <div class="view">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const $route = useRoute()

console.log($route.name)

const metodo = computed(() => {
  console.log($route.name)
  return $route.name
})
</script>
