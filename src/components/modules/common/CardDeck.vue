<template>
  <div class="deck">
    <CardSelector />
    <CardSelector
      :cardList="cardList"
      v-for="(card, index) in cards.slice(1)"
      :key="index"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardSelector from "./CardSelector.vue";

const cards = ref(Array(6).fill(null));
const cardList = [
  {
    id: 1,
    name: "アピールの基本",
    image: "public/images/cards/card_1010010.png",
  },
  {
    id: 2,
    name: "ポーズの基本",
    image: "public/images/cards/card_1010020.png",
  },
  { id: 3, name: "挑戦", image: "public/images/cards/card_1011010.png" },
  { id: 4, name: "試行錯誤", image: "public/images/cards/card_1011020.png" },
];
</script>

<style scoped></style>
