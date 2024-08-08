<template>
  <div class="deck">
    <CardSelector />
    <CardSelector
      :cardList="normalCardList"
      v-for="(card, index) in cards.slice(1)"
      :key="index"
    />
  </div>
</template>

<script setup>
import { ref, defineModel } from "vue";
import CardSelector from "./CardSelector.vue";

/*
入力が必要なもの
plan<String>: カード選択に必要
uniqueCardIds<Array<Number>>: ユニークカードリスト

出力が必要なもの
selectedCardIds<Array<Number>>: 選択されているカードリスト
*/

const normalCardList = defineModel("normalCardList");
const cards = ref(Array(6).fill(null));
</script>

<style scoped>
.deck {
  display: flex;
  justify-content: space-between;
}

.deck > * {
  width: calc((95% - 16px) / 6);
}
</style>
