<template>
  <div class="flex" v-if="matrix">
    <table class="table-auto border-collapse border border-purple-500">
      <tbody>
        <tr v-for="(row, i) in matrix" :key="i">
          <td
            v-for="(cell, j) in row"
            :key="j"
            :class="[
              'border border-purple-400 text-center w-10 h-10',
              i === rowProp ? 'bg-pink-300' : ''
            ]"
          >
            {{ cell.toFixed(2) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
type MatrixProp = Array<number[]>
// Rest of the code...

const props = defineProps({
  matrix: {
    type: Array as PropType<MatrixProp>,
    required: true
  },
  rowProp: {
    type: Number,
    required: false
  }
})
</script>

<style scoped></style>
