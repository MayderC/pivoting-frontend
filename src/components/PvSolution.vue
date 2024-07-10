<template>
  <section>
    <div
      class="flex flex-col justify-center mt-3"
      v-for="step in solution.steps.first_operation"
      :key="step.pivot_swap!.step"
    >
      <div
        class="mt-1 flex flex-col items-center border border-purple-500 p-2"
        v-for="zerOp in step.zero_operations"
        :key="zerOp.row"
      >
        <div>
          <p class="text-center text-purple-300 font-bold mb-2">
            {{ step.pivot_swap!.description }}
          </p>
        </div>

        <div class="flex gap-4">
          <div class="flex" v-for="(swap, i) in step.pivot_swap!.matrices" :key="i">
            <PvMatrix :matrix="swap" />
          </div>
        </div>

        <div class="m-2">
          <p>Operacion elemental : {{ zerOp.elemental_operation }} fila {{ zerOp.row + 1 }}</p>
        </div>

        <div class="flex gap-4">
          <div class="mt-2" v-for="(matrix, j) in zerOp.matrices" :key="j">
            <PvMatrix :row-prop="zerOp.row" :matrix="matrix" />
          </div>
        </div>

        <div class="m-2">
          <p>Operaciones sobre la fila resaltada</p>
        </div>

        <div
          class="border border-purple-500 p-2 mt-2"
          v-for="op in zerOp.operations.operation"
          :key="op"
        >
          {{ op }}
        </div>
      </div>
    </div>

    <div class="border border-purple-500 p-2 mt-2">
      <p class="text-center text-purple-300 font-bold mb-2">Operacion hacia atrás</p>

      <div
        class="flex flex-col justify-start text-left border border-purple-500 p-2"
        v-for="rev in solution.steps.reversal"
        :key="rev.equation"
      >
        <p>incognita {{ rev.unknown }} = {{ rev.result.toFixed(1) }}</p>
        <p>Ecuacion : {{ rev.equation }}</p>
      </div>

      <PvShorSolution :solution="solution.solution" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Response } from '../interfaces'
import PvMatrix from './PvMatrix.vue'
import PvShorSolution from './PvShorSolution.vue'

const props = defineProps({
  solution: {
    type: Object as PropType<Response>,
    required: true
  }
})
</script>

<style scoped></style>
