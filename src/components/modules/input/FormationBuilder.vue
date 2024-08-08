<template>
  <div class="pIdol-selection">
    <PIdolSelector
      v-model:contestPlan="contestPlan"
      v-model:selectedPIdol="selectedPIdol"
    />
  </div>
  <div class="pItem-selectors">
    <PItemSet
      v-model:pIdol="selectedPIdol"
      v-model:contestPItemIds="contestPItemIds"
    />
  </div>
  <div class="deck-container">
    <CardDeckSet v-model:pIdol="selectedPIdol" />
  </div>
</template>

<script setup>
import { ref, computed, defineModel } from "vue";

import PIdolSelector from "../common/PIdolSelector.vue";
import PItemSet from "../common/PItemSet.vue";
import CardDeckSet from "../common/CardDeckSet.vue";

import { ContestData } from "@/simulator/data/contestData";
const contestId = defineModel("contestId");
const stageId = defineModel("stageId");
const contestPlan = defineModel("contestPlan");

const contestPItemIds = computed(() => {
  return contestId.value && stageId.value != null
    ? ContestData.getById(contestId.value).stages[stageId.value].stagePItemIds
    : [];
});

const selectedPIdol = ref(null);
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
  margin-top: 8px;
}
</style>
