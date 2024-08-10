<template>
  <PItemSelector
    :pItemList="pIdolPItems"
    autoSelect="true"
    v-model:selectedPItem="selectedPItems[0]"
  /><!--contestPItem-->
  <PItemSelector
    :pItemList="contestPItems"
    autoSelect="true"
    v-model:selectedPItem="selectedPItems[1]"
  /><!--uniquePItem-->
  <PItemSelector
    :pItemList="normalPItems"
    v-for="(pItem, index) in selectedPItems.slice(2)"
    v-model:selectedPItem="selectedPItems[index + 2]"
    :key="index"
  />
</template>

<script setup>
import { onMounted, ref, watchEffect, computed, defineProps } from "vue";
import PItemSelector from "./PItemSelector.vue";
import { PItemData } from "@/simulator/data/pItemData";

// const selectedPItems = defineModel("selectedPItems");
const selectedPItems = ref([null, null, null, null]);
const pItemMap = PItemData.getAll().reduce((map, item) => {
  map.set(item.id, item);
  return map;
}, new Map());
const props = defineProps({
  contestPItemIds: {
    type: Array,
    require: true,
  },
  pIdolPItemIds: {
    type: Array,
    require: true,
  },
});
const contestPItems = computed(
  () => props.contestPItemIds?.map((id) => PItemData.getById(id)) ?? []
);
const pIdolPItems = computed(
  () => props.pIdolPItemIds?.map((id) => PItemData.getById(id)) ?? []
);
const normalPItems = PItemData.getAll().filter(
  (item) =>
    String(item.id)[0] == "3" && // サポートのPアイテム
    item.effects
);
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const pItemsStr = urlParams.get("p_items");
  if (pItemsStr) {
    const pItemIds = pItemIdsStr.split(":").map(Number);
    for (let i = 2; i < selectedPItems.value.length; i++) {
      if (pItemMap.has(pItemIds[i])) {
        selectedPItems.value[i] = pItemMap.get(pItemIds[i]);
      }
    }
    urlParams.delete("p_items");
    window.history.replaceState(null, null, "?" + urlParams.toString());
  }
  const pItemIdsStr = urlParams.get("p_item_ids");
  if (pItemIdsStr) {
    const pItemIds = pItemIdsStr.split(":").map(Number);
    for (let i = 0; i < selectedPItems.value.length; i++) {
      if (pItemMap.has(pItemIds[i])) {
        selectedPItems.value[i] = pItemMap.get(pItemIds[i]);
      }
    }
  }
  watchEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(
      "p_item_ids",
      selectedPItems.value.map((v) => v?.id).join(":")
    );
    window.history.replaceState(null, null, "?" + urlParams.toString());
  });
});
</script>

<style scoped></style>
