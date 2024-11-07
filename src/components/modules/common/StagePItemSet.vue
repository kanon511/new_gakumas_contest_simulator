<template>
  <PItemSelector
    :pItemList="contestPItemsList[0]"
    autoSelect="true"
    v-model:selectedPItem="selectedStagePItems[0]"
  />
  <PItemSelector
    :pItemList="contestPItemsList[1]"
    autoSelect="true"
    v-model:selectedPItem="selectedStagePItems[1]"
  />
  <PItemSelector
    :pItemList="contestPItemsList[2]"
    autoSelect="true"
    v-model:selectedPItem="selectedStagePItems[2]"
  />
  <PItemSelector
    :pItemList="contestPItemsList[3]"
    autoSelect="true"
    v-model:selectedPItem="selectedStagePItems[3]"
  />
</template>

<script setup>
import { computed } from 'vue';
import PItemSelector from './selector/PItemSelector.vue';
import DataLoader from '/simulator/game/data/DataLoader';
import {
  selectedStagePItems,
  contestPItemIds,
} from '@/components/store/store.js';

const contestPItemsList = computed(() => {
  const result = [[], [], [], []];
  contestPItemIds.value?.forEach((id, index) => {
    result[index] = [DataLoader.getPItemById(id)];
  });
  return result;
});
</script>

<style scoped></style>
