<template>
  <section class="flex flex-col items-center p-10 justify-evenly">
    <div class="flex justify-center flex-col">
      <PvCalculator @resolved="setData" />
      <div class="text-center text-red-400">{{ response?.detail }} {{ response?.error }}</div>
      <div class="shor-ssolution">
        <PvShorSolution v-if="response" :solution="response.solution" />
      </div>
    </div>

    <div class="flex flex-col" v-if="response && !response.detail">
      <button
        @click="showResponse"
        class="bg-green-400 text-white font-semibold rounded-lg p-2 mt-4"
      >
        Mostrar pasos de resolución
      </button>

      <div v-if="isShowResponse && response" class="mt-5">
        <div class="text-white text-center">
          <h2 class="text-2xl font-bold">Pasos de resolución</h2>
          <PvSolution :solution="response" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PvCalculator from '../components/PvCalculator.vue'
import PvShorSolution from '../components/PvShorSolution.vue'
import PvSolution from '../components/PvSolution.vue'
import { ref } from 'vue'
import { Response } from '../interfaces/index'

const response = ref<Response>()
const isShowResponse = ref(false)

const showResponse = () => {
  isShowResponse.value = !isShowResponse.value
}

const setData = (resp: Response) => {
  response.value = resp
}
</script>
