<template>
  <section class="flex flex-col items-center p-10 justify-evenly">
    <div class="calculator">
      <PvCalculator @resolved="setData" />
      <div class="mt-3 text-center text-white">{{ response?.solution }} {{ response?.error }}</div>
      <div class="text-center text-red-400">{{ response?.detail }}</div>
    </div>
    <div class="" v-if="response">
      <button
        @click="showResponse"
        class="bg-green-400 text-white font-semibold rounded-lg p-2 mt-4"
      >
        Mostrar pasos de resolución
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import PvCalculator from '../components/PvCalculator.vue'
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
