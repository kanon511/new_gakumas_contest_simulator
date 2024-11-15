<template>
  <div class="pIdol-selection mb-2" style="">
    <IdolSelector />
  </div>
  <div class="pItem-selectors mb-2">
    <StagePItemSet />
  </div>
  <div class="pItem-selectors mb-2">
    <PItemSet />
  </div>
  <div class="deck-container">
    <CardDeckSet />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import IdolSelector from '../common/selector/IdolSelector.vue';
import PItemSet from '../common/PItemSet.vue';
import CardDeckSet from '../common/CardDeckSet.vue';
import StagePItemSet from '../common/StagePItemSet.vue';
</script>

<style scoped>
.pIdol-selection {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pItem-selectors {
  display: flex;
  gap: 8px;
  justify-content: left;
}

.deck-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
