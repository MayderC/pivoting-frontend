<template>
  <div>
    <div class="backdrop-blur-xl bg-white/30 p-3 rounded-lg flex flex-col gap-4 max-w-screen-lg">
      <!--  filas  -->
      <div class="flex flex-1 gap-4" v-for="(row, idx) in matrix" :key="idx">
        <div class="flex flex-1 gap-4 items-center" v-for="(item, idx2) in row" :key="idx2">
          <p v-if="idx2 > 0" class="text-white text-xl font-medium">+</p>
          <div class="bg-white flex-1 rounded-lg flex items-center justify-center py-0 px-2">
            <input
              v-model="matrix[idx][idx2]"
              type="number"
              class="h-10 w-10 flex flex-1 text-center text-lg text-purple-900 font-semibold border-none outline-none rounded-lg bg-transparent border-b-2"
            />
            <p class="text-purple-900 font-semibold relative top-[-1px] px-2">
              {{ unknowns[idx2] }}
            </p>
          </div>
          <p v-if="idx2 === row.length - 1" class="text-white text-xl font-medium">=</p>
        </div>
        <div class="bg-white rounded-lg py-0 px-2">
          <input
            v-model="vector[idx]"
            type="number"
            class="h-10 w-12 text-center text-lg text-purple-900 font-semibold border-none outline-none rounded-lg bg-transparent border-b-2"
          />
        </div>
      </div>
    </div>

    <div class="flex gap-3">
      <button
        @click="addRowAndColumn"
        class="bg-purple-500 text-white font-semibold rounded-lg p-2 mt-4"
      >
        Agregar fila y columna
      </button>
      <button
        @click="removeRowAndColumn"
        class="bg-red-400 text-white font-semibold rounded-lg p-2 mt-4"
      >
        Eliminar fila y columna
      </button>

      <button @click="resolve" class="bg-green-400 text-white font-semibold rounded-lg p-2 mt-4">
        Resolver
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { resolveSystem } from '../services'
import { useRoute } from 'vue-router'

const $route = useRoute()
const MIN = 2
const currentSize = ref(MIN)

const emit = defineEmits(['resolved'])

const addVectorOf = (size: number) =>
  Array.from<number, number>({ length: size }, () => 0) as number[]

const createMatrixOf = (size: number): number[][] =>
  Array.from({ length: size }, () => addVectorOf(size))

const matrix = ref<number[][]>(createMatrixOf(currentSize.value))
const constants = ref('xyzabcdefghijklmnopqrstuvw')
const unknowns = ref<string[]>(constants.value.split('').slice(0, currentSize.value))
const vector = ref(addVectorOf(currentSize.value))

const addRowAndColumn = () => {
  addnewColumToMatrix()
  matrix.value.push(addVectorOf(currentSize.value + 1))
  unknowns.value = constants.value.split('').slice(0, currentSize.value + 1)
  vector.value.push(0)
  currentSize.value++
}

const addnewColumToMatrix = () => matrix.value.forEach((row: number[]) => row.push(0))

const removeRowAndColumn = () => {
  if (currentSize.value > MIN) {
    matrix.value.pop()
    matrix.value.forEach((row: number[]) => row.pop())
    vector.value.pop()
    currentSize.value--
    unknowns.value = constants.value.split('').slice(0, currentSize.value)
  }
}

const resolve = async () => {
  const data = {
    matrix: matrix.value,
    vector: vector.value.map((item) => [item]),
    unknowns: unknowns.value
  }
  const path = $route.name === 'escalonado' ? 'staggered' : 'parcial'

  try {
    const response = await resolveSystem(data, path)
    emit('resolved', response)
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped></style>
