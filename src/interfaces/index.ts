export interface Response {
  solution: Solution
  steps: Steps
  error?: string
  detail?: string
}

export interface Solution {
  x: number
  y: number
  z: number
}

interface Steps {
  first_operation: FirstOperation[] //Array de FirstOperation
  reversal: Reversal[] //Array de Reversal
}

interface FirstOperation {
  zero_operations: ZeroOperation[] //Array de ZeroOperation
  pivot_swap: PivotSwap
}

interface ZeroOperation {
  matrices: number[][][] //Array de matrices
  elemental_operation: string[] //Array de string
  row: number
  operations: Operations
  is_zero: boolean
  helping_msg_dev?: string
}

/*
  el indice de operations representa la columa de la fila(row) donde se aplica la formula,

  si is_zero es true, es porque ya hay un (cero) debajo de la diagonal entonces se omite realizar operaciones sobre esa columna

*/

interface Operations {
  operation: string[] //Array de string
}

interface PivotSwap {
  description: string
  sorted_pivot: boolean
  matrices: number[][][] //Array de matrices
  helping_msg_dev: string
  step: number
}

interface Reversal {
  equation: string
  result: number
  unknown: string
}
