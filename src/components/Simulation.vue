<template>
  <v-row>
    <v-col cols="6">
      <v-textarea
        v-model="inputData"
        label="入力データ"
        outlined
        rows="10"
      ></v-textarea>
      <v-btn @click="runSimulation">シミュレーション実行</v-btn>
    </v-col>
    <v-col cols="6">
      <v-card>
        <v-card-title>出力結果</v-card-title>
        <v-card-text>{{ outputData }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'

const inputData = ref('')
const outputData = ref('')

const runSimulation = () => {
  // ここにシミュレーションのロジックを実装します
  outputData.value = `シミュレーション結果: ${inputData.value}`
}
</script>