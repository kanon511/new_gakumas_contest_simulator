<template>
  <div class="character-selection">
    <CharacterSelector v-model:plan="contestPlan" />
  </div>
  <div class="relic-selectors">
    <RelicSelector /><!--contestPItem-->
    <RelicSelector /><!--uniquePItem-->
    <RelicSelector v-for="(relic, index) in relics.slice(2)" :key="index" />
  </div>
  <div class="deck-container">
    <CardDeck />
    <CardDeck />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardDeck from "../common/CardDeck.vue";
import RelicSelector from "../common/PItemSelector.vue";
import CharacterSelector from "../common/CharacterSelector.vue";

const relics = ref([null, null, null, null]);
</script>

<style scoped>
.relic-selectors {
  display: flex;
  gap: 8px;
  padding: 0px 12px;
  justify-content: left;
}

.deck-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 12px;
  margin-top: 8px;
}

.deck {
  display: flex;
  justify-content: space-between;
  gap: 2px;
}

.character-selection {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
