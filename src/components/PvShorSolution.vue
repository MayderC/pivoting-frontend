<template>
  <div v-if="solution" class="text-center p-4">
    <div class="for" v-for="(value, key) in solution" :key="key">
      <div class="key">
        <span class="font-bold text-white p-2">{{ key }} = </span>
        <span class="font-bold text-white"> {{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Solution } from '../interfaces'

const props = defineProps({
  solution: {
    type: Object as PropType<Solution>,
    required: true
  }
})
</script>

<style scoped></style>
