<template>
  <PItemSelector
    :pItemList="pIdolPItems"
    :autoSelect="true"
    v-model:selectedPItem="selectedIdolPItems[0]"
  />
  <PItemSelector
    :pItemList="normalPItems"
    v-for="(_, index) in selectedIdolPItems.slice(1)"
    v-model:selectedPItem="selectedIdolPItems[index + 1]"
    :key="index"
  />
</template>

<script setup>
import { onMounted, ref, watchEffect, computed } from 'vue';
import PItemSelector from './selector/PItemSelector.vue';
import DataLoader from '/simulator/game/data/DataLoader';
import { selectedIdolPItems, pIdolPItems } from '@/store/store.js';

const normalPItems = Array.from(DataLoader.p_item_map)
  .map((item) => item[1])
  .filter(
    (item) =>
      String(item.id)[0] == '3' && // サポートのPアイテム
      item.effects
  );
</script>

<style scoped></style>
